const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("./frontend/html/index.html");
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  ipcMain.on("get-path", (event, path) => {
    path.forEach((file) => {
      fs.copyFile(
        file[0],
        `C:\\${file[1]}`,
        (mode = fs.constants.COPYFILE_EXCL),
        (err) => {
          if (err) throw err;
          console.log("Successfully Copied");
          progress?.Report((++processed / files.Length) * 100);
        }
      );
    });
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
