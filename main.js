const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const Store = require("electron-store");

// Create store
const store = new Store();

// Create the browser window.
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 150,
    height: 70,
    transparent: true,
    resizable: false,
    frame: false,
    roundedCorners: false,
    hasShadow: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Keep the application on top, even in fullscreen
  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setAlwaysOnTop(true, "normal", 100);

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools. (You will need to increase window size to see it)
  // mainWindow.webContents.openDevTools();

  // Setup listeners for Electron store
  ipcMain.on("electron-store-get", async (event, val) => {
    event.returnValue = store.get(val);
  });
  ipcMain.on("electron-store-set", async (event, key, val) => {
    store.set(key, val);
  });
  // Setup listeners for close button
  ipcMain.on("close", async () => {
    mainWindow.close();
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed
app.on("window-all-closed", () => {
  app.quit();
});
