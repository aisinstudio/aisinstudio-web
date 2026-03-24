const fs = require('fs');
const path = 'd:/Aisin Studio/New Web Aisin Studio 2026 3 26/index.html';
let content = fs.readFileSync(path, 'utf8');

// 1. Image Edition size + 30%
// 0.52 * 1.3 = 0.676 -> 0.68rem
content = content.replace("font-size: 0.52rem;", "font-size: 0.68rem;");

// 2. Move pack name up by 10px (increase padding-bottom)
content = content.replace("      padding: 25px;", "      padding: 25px 25px 35px 25px;");

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete!');
