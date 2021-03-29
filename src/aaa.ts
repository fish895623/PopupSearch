// import { spawn } from 'child_process'

// function abc(app: string, funccc: string) {
//     spawn(app, [funccc])
// }

const ele = document.getElementById('data')
ele.addEventListener('keydown', function (e) {
    const keyCode = e.which || e.keyCode
    if (keyCode === 13 && !e.shiftKey) {
        e.preventDefault()
        document.getElementById('submit').click()
    }
})

// export { abc }
