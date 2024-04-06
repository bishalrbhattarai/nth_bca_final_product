import fs from "fs";
import path from "path";

// Define the directory containing your images
const directory = "./ExecutiveComittee";

// Read the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Filter out only files with uppercase extensions
  const filesWithUppercaseExt = files.filter((file) => {
    const ext = path.extname(file);
    return ext.toUpperCase() !== ext;
  });

  // Convert extensions to lowercase
  filesWithUppercaseExt.forEach((file) => {
    const ext = path.extname(file);
    const newName = path.join(
      directory,
      file.slice(0, -ext.length) + ext.toLowerCase()
    );
    const oldName = path.join(directory, file);

    fs.rename(oldName, newName, (err) => {
      if (err) {
        console.error("Error renaming file:", err);
      } else {
        console.log(`Renamed ${oldName} to ${newName}`);
      }
    });
  });
});
