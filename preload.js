const { contextBridge, ipcRenderer } = require("electron");

const electronHandler = {
  // Expose Electron store to our application window
  store: {
    get(key) {
      return ipcRenderer.sendSync("electron-store-get", key);
    },
    set(property, val) {
      ipcRenderer.send("electron-store-set", property, val);
    },
  },
  // Expose BrowserWindow close to our application window
  closeWindow() {
    ipcRenderer.send("close");
  },
};

contextBridge.exposeInMainWorld("electron", electronHandler);
