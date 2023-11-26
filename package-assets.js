const fs = require('fs');

fs.cpSync('./src/web/', './build/web/', {recursive: true});

if (!fs.existsSync('./build/assets/')) {
    fs.cpSync('./assets/tray/', './build/assets/tray/', {recursive: true});
}
