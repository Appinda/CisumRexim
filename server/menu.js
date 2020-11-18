const {Menu} = require("electron");

module.exports = class AppMenu {
  
  constructor(isMac){
    this.isMac = isMac;
    this.listeners = {
      newproject: [],
      openproject: [],
      closeproject: [],
    }
  }

  get(){
    return Menu.buildFromTemplate([
      // { role: 'appMenu' }
      ...(this.isMac ? [{
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideothers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      }] : []),
      // { role: 'fileMenu' }
      {
        label: 'File',
        submenu: [
          { id: 'newproject', label: 'New project', click: () => this.trigger('newproject') },
          { id: 'openproject', label: 'Open project..', click: () => this.trigger('openproject')},
          { id: 'closeproject', label: 'Close project', click: () => this.trigger('closeproject')},
          { type: 'separator' },
          this.isMac ? { role: 'close' } : { role: 'quit' }
        ]
      },
      // { role: 'editMenu' }
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          ...(this.isMac ? [
            { role: 'pasteAndMatchStyle' },
            { role: 'delete' },
            { role: 'selectAll' },
            { type: 'separator' },
            {
              label: 'Speech',
              submenu: [
                { role: 'startspeaking' },
                { role: 'stopspeaking' }
              ]
            }
          ] : [
            { role: 'delete' },
            { type: 'separator' },
            { role: 'selectAll' }
          ])
        ]
      },
      // { role: 'viewMenu' }
      {
        label: 'View',
        submenu: [
          { role: 'reload' },
          { role: 'forcereload' },
          { role: 'toggledevtools' },
          { type: 'separator' },
          { role: 'resetzoom' },
          { role: 'zoomin' },
          { role: 'zoomout' },
          { type: 'separator' },
          { role: 'togglefullscreen' }
        ]
      },
      // { role: 'windowMenu' }
      {
        label: 'Window',
        submenu: [
          { role: 'minimize' },
          { role: 'zoom' },
          ...(this.isMac ? [
            { type: 'separator' },
            { role: 'front' },
            { type: 'separator' },
            { role: 'window' }
          ] : [
            { role: 'close' }
          ])
        ]
      },
      {
        role: 'help',
        submenu: [
          {
            label: 'Learn More',
            click: async () => {
              const { shell } = require('electron')
              await shell.openExternal('https://electronjs.org')
            }
          }
        ]
      }
    ]);
  }

  // Add new listener
  on(name, fn){
    if(!this.listeners.hasOwnProperty(name)) throw new Error(`Function with name "${name}" does not exist.`);
    this.listeners[name].push(fn);
    return this; // Chaining allowed
  }

  // private: Trigger event with functions
  trigger(name, ...args){
    if(!this.listeners.hasOwnProperty(name)) throw new Error(`Function with name "${name}" does not exist.`);
    this.listeners[name].forEach(fn => {
      fn(...args);
    });
  }

}