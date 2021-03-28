import { app, BrowserWindow } from 'electron'

let win = null
app.on('ready', () => {
    win = new BrowserWindow()
    // win.setAlwaysOnTop(true, undefined, undefined)
    win.loadURL('http://localhost:5656/')
    win.on('minimize', (error) => {
        console.log(error)
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
