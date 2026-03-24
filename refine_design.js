const fs = require('fs');
const path = 'd:/Aisin Studio/New Web Aisin Studio 2026 3 26/index.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Image Edition size + 30%
// Old: font-size: 0.52rem;
// New: 0.52 * 1.3 = 0.676 -> 0.68rem
content = content.replace("font-size: 0.52rem;", "font-size: 0.68rem;");

// 2. Move pack name up by 10px
// We can change card-info padding-bottom from 25px to 35px
const oldCardInfo = `.card-info {
      padding: 25px;`;
const newCardInfo = `.card-info {
      padding: 25px 25px 35px 25px;`;

if (content.includes(oldCardInfo)) {
    content = content.replace(oldCardInfo, newCardInfo);
    console.log('card-info padding updated');
} else {
    console.log('Could not find card-info styles for replacement');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete!');
