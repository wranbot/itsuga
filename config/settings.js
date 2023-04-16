const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI BASE ORI BY DENI HOSTING
global.owner = ['6282393734303'] // no own
global.packname = '© sticker by Botz' // nama pack sticker
global.author = 'Dev rnz'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})