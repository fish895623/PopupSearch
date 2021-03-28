import {app, BrowserWindow, globalShortcut} from 'electron'

let win = null

app.on('ready', () => {
    win = new BrowserWindow()
    // win.setAlwaysOnTop(true, undefined, undefined)
    win.loadURL('http://localhost:5656/')
})

// 플랫폼이 맥os 이면 앞의 것을 선택, 아닐경우 뒤에것을 선택하여 값을 입력
const refreshCommand = process.platform === 'darwin' ? 'Cmd+R' : 'F5'

app.on('browser-window-focus', () => {
    globalShortcut.register(refreshCommand, () => {
        app.quit()
    })
})

app.whenReady().then(() => {
    globalShortcut.register('Alt+I', () => {
        if (win.isFocused() == false) {
            win.focus()
        } else {
            win.minimize()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
