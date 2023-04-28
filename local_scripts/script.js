const fetch = require('node-fetch');
const fs = require('fs');

(async () => {

  var result = await fetch('https://your-domain.com/notion-todo-wallpaper').then((res) => res.json());

  if (result.hasChange && result.imageUrl) {
    const res = await fetch(result.imageUrl);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync('/Users/oliviabedford/notion wallpaper/wallpaper.png', buffer);
    fs.writeFileSync('/Users/oliviabedford/notion wallpaper/wallpaper copy.png', buffer);
    console.log(`imageUrl: ${result.imageUrl}`);
  } else {
    console.log('no new wallpaper')
  }
})();
