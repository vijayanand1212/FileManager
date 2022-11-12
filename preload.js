const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  getPath: (path) => ipcRenderer.send("get-path", path),
  // we can also expose variables, not just functions
});
