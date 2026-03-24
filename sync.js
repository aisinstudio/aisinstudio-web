const fs = require('fs');
const path = require('path');

const CHAR_DIR = path.join(__dirname, 'assets', 'characters');
const DATA_FILE = path.join(__dirname, 'data', 'characters.json');

function scanPacks(charPath, charId) {
    // Escaneamos cualquier subcarpeta dentro del personaje como si fuera un pack
    const subitems = fs.readdirSync(charPath, { withFileTypes: true });
    const packFolders = subitems
        .filter(f => f.isDirectory() && !f.name.startsWith('.') && f.name.toLowerCase() !== 'packs')
        .map(f => f.name);

    return packFolders.map((folder, index) => {
        const packPath = path.join(charPath, folder);
        const files = fs.readdirSync(packPath);
        
        let lv = index + 1;
        let name = folder;
        let link = '#';
        let price = (index === 0) ? '8.99' : (index === 1) ? '12.99' : (index === 2) ? '16.99' : '22.99';
        let desc = 'Premium collection.';

        // Busca cualquier archivo .txt y asume que el contenido es el link
        const txtFile = files.find(f => f.endsWith('.txt'));
        if (txtFile) {
            const content = fs.readFileSync(path.join(packPath, txtFile), 'utf8').trim();
            if (content.startsWith('http')) {
                link = content;
            } else {
                const lines = content.split('\n');
                lines.forEach(l => {
                    const line = l.trim();
                    if (line.startsWith('NAME:')) name = line.replace('NAME:', '').trim();
                    if (line.startsWith('LINK:')) link = line.replace('LINK:', '').trim();
                    if (line.startsWith('PRICE:')) price = line.replace('PRICE:', '').trim();
                    if (line.startsWith('PACK Description:')) desc = line.replace('PACK Description:', '').trim();
                    if (line.startsWith('DESC:')) desc = line.replace('DESC:', '').trim();
                    if (line.includes('SINLEVEL:')) {
                        const match = line.match(/\((\d+)\)/);
                        if (match) lv = parseInt(match[1]);
                    }
                });
            }
        }

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
