function dropHandler(ev) {
  console.log("File(s) dropped");
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.files) {
    // Use DataTransferItemList interface to access the file(s)
    const path = [];
    [...ev.dataTransfer.files].forEach((file) => {
      path.push([file.path, file.name]);
    });
    console.log(path);
    versions.getPath(path);
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file}`);
    });
  }
}
function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
