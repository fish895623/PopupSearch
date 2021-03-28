import {app, BrowserWindow, globalShortcut, Menu, Tray} from 'electron'

let win = null

app.on('ready', () => {
    win = new BrowserWindow()
    win.setAlwaysOnTop(true, undefined, undefined)
    win.loadURL('http://localhost:5656/')
})

// 플랫폼이 맥os 이면 앞의 것을 선택, 아닐경우 뒤에것을 선택하여 값을 입력
const refreshCommand = process.platform === 'darwin' ? 'Cmd+R' : 'F5'

app.on('browser-window-focus', () => {
    globalShortcut.register(refreshCommand, () => {
        app.quit()
    })
})

// 어플에 포커스 되어 있으면 최소화
app.whenReady().then(() => {
    globalShortcut.register('Alt+I', () => {
        if (win.isFocused() == false) {
            win.focus()
            win.show()
        } else {
            win.minimize()
            win.hide()
        }
    })
})

let tray = null
app.whenReady().then(() => {
    tray = new Tray('icon.png')
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Item1', type: 'radio'},
        {label: 'Item2', type: 'radio'},
        {label: 'Item3', type: 'radio', checked: true},
        {label: 'Item4', type: 'radio'}
    ])
    tray.setToolTip('This is my application.')
    tray.setContextMenu(contextMenu)
    tray.on('double-click', function () {
        console.log('DoubleClicked')
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
