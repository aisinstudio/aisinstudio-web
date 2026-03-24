/*
 * ═══════════════════════════════════════════════════════════
 *  AISIN STUDIO — CHARACTER DATABASE
 * ═══════════════════════════════════════════════════════════
 *
 *  HOW TO ADD A NEW CHARACTER:
 *  ───────────────────────────
 *  1. Create folder:  assets/characters/your-id/
 *  2. Add images:     cover.jpg  (homepage card)
 *                     pack-1.jpg (or .gif/.png/.webp) per sin level
 *  3. Add entry below in CHARACTERS array
 *  4. Redeploy:       netlify deploy --dir=. --prod
 *
 *  HOW TO ADD PATREON LINKS:
 *  ─────────────────────────
 *  Fill the packLinks array with your Patreon post URLs,
 *  one per sin level. Set bundleLink for the grand bundle.
 *
 * ═══════════════════════════════════════════════════════════
 */

// ── PACK TEMPLATES ── (shared metadata per sin level)
const PACK_TEMPLATES = {
  4: [
    { lv:1, fires:'🔥', cls:'sin-1', lvCls:'lv1', name:'Lingerie Tease', desc:'The elegant collector entry. Premium posing, curated atmosphere, and luxury dark aesthetic.', imgs:'100 images', vids:'—', price:'$8.99' },
    { lv:2, fires:'🔥🔥', cls:'sin-2', lvCls:'lv2', name:'Solo Sensual', desc:'Closer framing, deeper warmth, and a more personal intimate atmosphere across the full set.', imgs:'120 images', vids:'1 HD video', price:'$12.99' },
    { lv:3, fires:'🔥🔥🔥', cls:'sin-3', lvCls:'lv3', name:'Passionate Encounters', desc:'Full cinematic arc, premium visual direction, and rich narrative storytelling.', imgs:'150 images', vids:'2 HD videos', price:'$16.99' },
    { lv:4, fires:'🔥🔥🔥🔥', cls:'sin-4', lvCls:'lv4', name:'Fantasy Archive', desc:'High-intensity collector edition. Maximum visual depth, exclusive collector-first release.', imgs:'180 images', vids:'4 HD videos', price:'$22.99' },
  ],
  5: [
    { lv:1, fires:'🔥', cls:'sin-1', lvCls:'lv1', name:'Lingerie Tease', desc:'The elegant collector entry. Premium posing, curated atmosphere, and luxury dark aesthetic.', imgs:'100 images', vids:'—', price:'$8.99' },
    { lv:2, fires:'🔥🔥', cls:'sin-2', lvCls:'lv2', name:'Solo Sensual', desc:'Closer framing, deeper warmth, and a more personal intimate atmosphere across the full set.', imgs:'120 images', vids:'1 HD video', price:'$12.99' },
    { lv:3, fires:'🔥🔥🔥', cls:'sin-3', lvCls:'lv3', name:'Passionate Encounters', desc:'Full cinematic arc, premium visual direction, and rich narrative storytelling.', imgs:'150 images', vids:'2 HD videos', price:'$16.99' },
    { lv:4, fires:'🔥🔥🔥🔥', cls:'sin-4', lvCls:'lv4', name:'Fantasy Special', desc:'Premium high-intensity edition. Elevated visual richness, extreme collector focus.', imgs:'180 images', vids:'4 HD videos', price:'$22.99' },
    { lv:5, fires:'🔥🔥🔥🔥🔥', cls:'sin-5', lvCls:'lv5', name:'No Limits Archive', desc:'The definitive experience. Unrestricted, extreme, the ultimate collector archive.', imgs:'220 images', vids:'6 HD videos', price:'$34.99' },
  ]
};

const BUNDLE_INFO = {
  4: { price:'$49.99', content:'550 images + 7 HD videos' },
  5: { price:'$64.99', content:'770 images + 13 HD videos' }
};

// ── TRENDING DROPS ── (character IDs shown in Trending section)
const TRENDING = [
  { id:'chel',    title:'Chel — Temple of Gold',    desc:'Ancient stone, treasure tones, and premium collector appeal.' },
  { id:'boa',     title:'Boa — Pirate Empress',     desc:'All 5 sin levels. Dark luxury presentation.' },
  { id:'jasmine', title:'Jasmine — Thermal Series',  desc:'Elegant heat, sapphire glow, and visual atmosphere.' },
  { id:'makima',  title:'Makima — Control Arc',      desc:'Golden eyes, close framing, exclusive styling.' },
];

// ── CHARACTERS ──
// cover: URL or local path (e.g. 'assets/characters/elsa/cover.jpg')
// packImages: array of image paths per sin level (empty = uses cover as fallback)
// packLinks: array of Patreon URLs per sin level (empty = uses '#')
// bundleLink: Patreon URL for grand bundle
const CHARACTERS = [
  // ════════════ PAGE 1 ════════════
  { id:'jessica', name:'Jessica', subtitle:'Luxury Red Glamour', levels:4,
    cover:'assets/characters/jessica/Jessica.png',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'hinata', name:'Hinata', subtitle:'Soft Elegance Archive', levels:5,
    cover:'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'mulan', name:'Mulan', subtitle:"Warrior's Thermal Series", levels:4,
    cover:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'megara', name:'Megara', subtitle:'Dark Romance — Myth & Mystery', levels:4,
    cover:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'chel', name:'Chel', subtitle:'Temple of Gold Collection', levels:5,
    cover:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'ariel', name:'Ariel', subtitle:'Ocean Depths — Iridescent Luxury', levels:4,
    cover:'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'moana', name:'Moana', subtitle:'Volcanic Shore Series', levels:4,
    cover:'https://images.unsplash.com/photo-1550689469-d97d5ac7fdc5?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'jasmine', name:'Jasmine', subtitle:'Desert Midnight — Sapphire Glow', levels:5,
    cover:'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'elsa', name:'Elsa', subtitle:'Frost Elegance & Winter Luxury', levels:4,
    cover:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'rapunzel', name:'Rapunzel', subtitle:'Tower Light & Golden Magic', levels:4,
    cover:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'boa', name:'Boa Hancock', subtitle:'Pirate Empress Archive', levels:5,
    cover:'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'makima', name:'Makima', subtitle:'Control Devil — Golden Eyes', levels:5,
    cover:'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'nami', name:'Nami', subtitle:'Storm Seas Navigator', levels:4,
    cover:'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'erza', name:'Erza', subtitle:'Titania — Scarlet Armor', levels:4,
    cover:'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'tiana', name:'Tiana', subtitle:'Jazz Heat & Bayou Luxury', levels:4,
    cover:'https://images.unsplash.com/photo-1519057736756-7e21ad7be9aa?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'mikasa', name:'Mikasa', subtitle:'Survey Corps — Quiet Steel', levels:4,
    cover:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'ahri', name:'Ahri', subtitle:'Nine Tails — Illusory Charm', levels:5,
    cover:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'widowmaker', name:'Widowmaker', subtitle:'Precision & Violet Lethality', levels:4,
    cover:'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  // ════════════ PAGE 2 ════════════
  { id:'nezuko', name:'Nezuko', subtitle:'Demon Blood Art Collection', levels:4,
    cover:'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'shinobu', name:'Shinobu', subtitle:'Insect Breathing — Butterfly Poison', levels:4,
    cover:'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'mitsuri', name:'Mitsuri', subtitle:'Love Pillar — Pink-Green Blade', levels:4,
    cover:'https://images.unsplash.com/photo-1474562645009-b9d5e7c4b69f?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'power', name:'Power', subtitle:'Blood Devil — Chaotic Energy', levels:4,
    cover:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'ciri', name:'Ciri', subtitle:'Scar of Destiny — Platinum Silver', levels:4,
    cover:'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'yennefer', name:'Yennefer', subtitle:'Violet Chaos — Sorceress Grace', levels:5,
    cover:'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'bayonetta', name:'Bayonetta', subtitle:'Umbran Witch — Infinite Grace', levels:5,
    cover:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'rangiku', name:'Rangiku', subtitle:'Zanpakuto — Soul Society Allure', levels:4,
    cover:'https://images.unsplash.com/photo-1595152772835-219674b2a163?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'daki', name:'Daki', subtitle:'Upper Moon — Obi Sash Seduction', levels:5,
    cover:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'lara', name:'Lara', subtitle:'Ruins Exploration — Fierce Beauty', levels:4,
    cover:'https://images.unsplash.com/photo-1520810627419-35e592be37f7?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'zelda', name:'Zelda', subtitle:'Hyrulian Royalty — Sacred Gold', levels:4,
    cover:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'asuna', name:'Asuna', subtitle:'Flash Lightning — Knight Beauty', levels:4,
    cover:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'toga', name:'Toga', subtitle:'Transform Quirk — Knife-Edge Joy', levels:4,
    cover:'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'nicorobin', name:'Nico Robin', subtitle:'Ancient Ruins — Scholarly Allure', levels:5,
    cover:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'aurora', name:'Aurora', subtitle:'Thornless Roses — Sleeping Gold', levels:4,
    cover:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'pocahontas', name:'Pocahontas', subtitle:'River Wind — Earth Connection', levels:4,
    cover:'https://images.unsplash.com/photo-1523264653568-d3d4032d1476?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'senna', name:'Senna', subtitle:'Mist Light — Marksman Grace', levels:4,
    cover:'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'tsunade', name:'Tsunade', subtitle:'Hokage Will — Legendary Power', levels:5,
    cover:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  // ════════════ PAGE 3 ════════════
  { id:'tifa', name:'Tifa', subtitle:'Seventh Heaven — Fist of Steel', levels:5,
    cover:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'morrigan', name:'Morrigan', subtitle:'Shadow Magic — Dark Forest Ritual', levels:5,
    cover:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'merida', name:'Merida', subtitle:'Highland Fire — Archer Spirit', levels:4,
    cover:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'cinderella', name:'Cinderella', subtitle:'Glass Slipper — Midnight Gown', levels:4,
    cover:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'ahsoka', name:'Ahsoka', subtitle:'Montrals — Warrior Elegance', levels:4,
    cover:'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'isabela', name:'Isabela', subtitle:'Floral Rebellion — Golden Perfection', levels:4,
    cover:'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'nidalee', name:'Nidalee', subtitle:'Jungle Instinct — Primal Allure', levels:4,
    cover:'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'tracer', name:'Tracer', subtitle:'Blink Pulse — Time-Loop Glow', levels:4,
    cover:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'nefertari', name:'Nefertari', subtitle:'Alabasta Desert — Regal Poise', levels:4,
    cover:'https://images.unsplash.com/photo-1514909162453-fd435c9b5cf4?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'samus', name:'Samus', subtitle:'Bounty Hunter — Power Glow', levels:4,
    cover:'https://images.unsplash.com/photo-1504276048855-f3d60e69632f?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'snowwhite', name:'Snow White', subtitle:'Poison Apple — Ebony Contrast', levels:4,
    cover:'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'tinkerbell', name:'Tinker Bell', subtitle:'Pixie Dust — Jealous Green Light', levels:4,
    cover:'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'mirabel', name:'Mirabel', subtitle:'Enchanted Casa — Vibrant Spirit', levels:4,
    cover:'https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'sakura', name:'Sakura', subtitle:'Medical Ninjutsu — Pink Resolve', levels:4,
    cover:'https://images.unsplash.com/photo-1455642305367-68834a1da7ab?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'shirahoshi', name:'Shirahoshi', subtitle:'Mermaid Princess — Deep Sea Grace', levels:4,
    cover:'https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'annie', name:'Annie', subtitle:'Female Titan — Crystal Cold', levels:4,
    cover:'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'triss', name:'Triss', subtitle:'Auburn Fire — Sorceress Warmth', levels:5,
    cover:'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },

  { id:'izumi', name:'Izumi', subtitle:'Explosion Arc — Rival Elegance', levels:4,
    cover:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    packImages:[], packLinks:[], bundleLink:'#' },
];
