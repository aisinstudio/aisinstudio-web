const fs = require('fs');
const path = require('path');

const CHAR_DIR = path.join(__dirname, 'assets', 'characters');
const DATA_FILE = path.join(__dirname, 'data', 'characters.json');

function scanPacks(charPath, charId) {
    const subitems = fs.readdirSync(charPath, { withFileTypes: true });
    const packFolders = subitems
        .filter(f => f.isDirectory() && !f.name.startsWith('.') && f.name.toLowerCase() !== 'packs')
        .map(f => f.name);

    // 1. Buscamos el archivo de info central (cualquier .txt en la raíz del personaje)
    let globalInfo = {};
    const globalTxt = subitems.find(f => f.isFile() && f.name.endsWith('.txt'));
    if (globalTxt) {
        const content = fs.readFileSync(path.join(charPath, globalTxt.name), 'utf8');
        // Parseamos bloques entre { }
        const regex = /\{([\s\S]*?)\}/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const block = match[1];
            const lines = block.split('\n');
            let pNum = '';
            let pData = { desc: 'Premium collection.', price: '8.99' };
            lines.forEach(l => {
                const line = l.trim();
                if (line.toLowerCase().startsWith('pack:')) pNum = line.split(':')[1].trim();
                if (line.startsWith('NAME:')) pData.name = line.replace('NAME:', '').trim();
                if (line.startsWith('LINK:')) pData.link = line.replace('LINK:', '').trim();
                if (line.startsWith('PRICE:')) pData.price = line.replace('PRICE:', '').trim();
                if (line.startsWith('PACK Description:')) pData.desc = line.replace('PACK Description:', '').trim();
                if (line.startsWith('DESC:')) pData.desc = line.replace('DESC:', '').trim();
                if (line.includes('SINLEVEL:')) {
                    const m = line.match(/\((\d+)\)/);
                    if (m) pData.lv = parseInt(m[1]);
                }
            });
            if (pNum) globalInfo[pNum] = pData;
        }
    }

    return packFolders.map((folder, index) => {
        const packPath = path.join(charPath, folder);
        const files = fs.readdirSync(packPath);
        
        // Intentamos obtener el número del pack (asumiendo formato "Pack 1" o similar)
        const folderNum = folder.replace(/\D/g, ''); 
        const info = globalInfo[folderNum] || globalInfo[folder] || {};

        let lv = info.lv || (index + 1);
        let name = info.name || folder;
        let link = info.link || '#';
        let price = info.price || ((index === 0) ? '8.99' : (index === 1) ? '12.99' : (index === 2) ? '16.99' : '22.99');
        let desc = info.desc || 'Premium collection.';

        // Busca cualquier imagen en el pack
        const img = files.find(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        const imgPath = img ? `assets/characters/${charId}/${folder}/${img}` : '';

        return {
            lv,
            name,
            link,
            price,
            desc,
            img: imgPath,
            imgs: '100+ images',
            vids: 'HD Video Clips'
        };
    });
}

function sync() {
    console.log('🔍 Escaneando carpeta de personajes...');
    if (!fs.existsSync(CHAR_DIR)) {
        console.error('❌ La carpeta assets/characters/ no existe.');
        return;
    }

    const characters = [];
    const charFolders = fs.readdirSync(CHAR_DIR, { withFileTypes: true })
        .filter(f => f.isDirectory())
        .map(f => f.name);

    charFolders.forEach(folder => {
        const charPath = path.join(CHAR_DIR, folder);
        const files = fs.readdirSync(charPath);
        
        // El nombre del personaje es el nombre de la carpeta
        const name = folder;
        const id = folder.toLowerCase().replace(/\s+/g, '-');
        
        // Busca la portada (el primer archivo de imagen en la raíz del personaje)
        const coverFile = files.find(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
        const cover = coverFile ? `assets/characters/${folder}/${coverFile}` : '';
        
        const packs = scanPacks(charPath, folder);
        
        characters.push({
            id,
            name,
            subtitle: 'Premium Collection',
            levels: packs.length || 4,
            cover,
            packs
        });
        
        console.log(`✅ Personaje encontrado: ${name} (${packs.length} packs)`);
    });

    fs.writeFileSync(DATA_FILE, JSON.stringify(characters, null, 2));
    console.log(`\n✨ Sincronización completa. Datos guardados en data/characters.json`);
}

sync();
