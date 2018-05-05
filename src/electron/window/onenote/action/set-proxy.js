const { ipcRenderer}  = require('electron');

const vex = require('vex-js');

module.exports = (data) => {

    vex.dialog.prompt({
        message: p3x.onenote.lang.label.setProxy,
        placeholder: p3x.onenote.lang.dialog.setProxy.placeholder,
        input: `<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="${p3x.onenote.lang.dialog.setProxy.placeholder}" value="${data.proxy}">`,
        buttons: [
            Object.assign({}, vex.dialog.buttons.YES, {
                text: p3x.onenote.lang.button.save,
            }),
            Object.assign({}, vex.dialog.buttons.NO, {
                text: p3x.onenote.lang.button.cancel
            }),
        ],
        callback: function (value) {
            try {
                global.p3x.onenote.data.proxy = value;
                ipc.send('p3x-onenote-save', global.p3x.onenote.data);

            } catch(e) {
                console.error(e)
            }
        }
    })


}