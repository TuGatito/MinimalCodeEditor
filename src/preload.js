const fs = require('fs');
const dialog  = require('electron').remote.dialog
const remote = require('electron').remote

window.openFile = () => {
    const dir = dialog.showOpenDialogSync()
    const path = dir[0];
    console.log(path);
    const data = fs.readFileSync(path, 'utf-8');
    return {path, data};
}

window.saveFile = (path, data) => {
    fs.writeFileSync(path, data);
}

window.closeApp = () => {
    remote.getCurrentWindow().close();
}