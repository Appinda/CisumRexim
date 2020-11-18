const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const { app, BrowserWindow, Menu } = require('electron');
const appMenu = new (require('./menu'))(isMac);

appMenu.on('newproject', () => {
  console.log("New project");
}).on('openproject', () => {
  console.log("Open project");
}).on('closeproject', () => {
  console.log("Close project");
})

function startElectron() {
  console.log("Starting Electron..");

  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  });

  win.loadURL('http://localhost:3000');
  
  win.on('ready-to-show', () => {
    win.show();
  });

  Menu.setApplicationMenu(appMenu.get());

}

function startNext(){
  console.log("Starting Next..");
  nextApp.prepare().then(() => {
    createServer((req, res) => {
      
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
  
      if (pathname === '/a') {
        nextApp.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        nextApp.render(req, res, '/b', query);
      } else {
        handle(req, res, parsedUrl);
      }
    }).listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
      startElectron();
    });
  });  
}


app.whenReady().then(startNext);

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    startElectron()
  }
});