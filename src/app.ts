import {app, BrowserWindow} from 'electron'
import * as path from 'path'

let win = null
app.on('ready', () => {
    win = new BrowserWindow()
    win.setAlwaysOnTop(true, undefined, undefined)
    win.loadFile(path.join(__dirname, "../assets/index.html"))
})

app.on('window-all-closed', () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})