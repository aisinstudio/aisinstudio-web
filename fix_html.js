const fs = require('fs');
const filePath = 'd:/Aisin Studio/New Web Aisin Studio 2026 3 26/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// The marker is inside the editions section.
const marker = 'Ultimate Sin'; 
const startPos = content.indexOf(marker);
if (startPos !== -1) {
    // Find where THIS section and his divs ends.
    // It's line 457 in original which was after a few </div>
    const sectionEndMarker = '</section>';
    // Let's find the first </section> AFTER the marker.
    const firstSectionClose = content.indexOf(sectionEndMarker, startPos);
    if (firstSectionClose !== -1) {
        // Now find the start of the next clean section: join
        const nextSectionStart = content.indexOf('<section class="cta-strip" id="join">');
        if (nextSectionStart !== -1) {
            // Cut between firstSectionClose + 10 (approx) and nextSectionStart
            const cleanBefore = content.substring(0, firstSectionClose + 10);
            const cleanAfter = content.substring(nextSectionStart);
            fs.writeFileSync(filePath, cleanBefore + '\n\n    ' + cleanAfter, 'utf8');
            console.log('✅ HTML fixed successfully!');
        } else {
             console.log('❌ Could not find cta-strip');
        }
    } else {
         console.log('❌ Could not find first closing section');
    }
} else {
    console.log('❌ Could not find marker');
}
