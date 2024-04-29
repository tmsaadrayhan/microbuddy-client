import { createRequire } from "module";
const require = createRequire(import.meta.url);

import crypto from "crypto";
const fs = require("fs");
const path = require("path");
const folderPath = "src/assets/portfolio/website/";
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
  }
  files.forEach((file) => {
    if (file.toLocaleLowerCase() !== file) {
      fs.rename(
        folderPath + file,
        folderPath + file.toLocaleLowerCase(),
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log(file);
          }
        }
      );
    }
  });
});
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Iterate over each file
  files.forEach((file) => {
    // Construct the full file path
    const filePath = path.join(folderPath, file);

    // Remove parentheses from the file name
    const newFileName = file.replace(/[()]/g, "");

    // Construct the full new file path
    const newFilePath = path.join(folderPath, newFileName);

    // Rename the file
    fs.rename(filePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error("Error renaming file:", renameErr);
      } else {
        console.log(`File ${file} renamed successfully!`);
      }
    });
  });
});
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Iterate over each file
  files.forEach((file) => {
    // Construct the full file path
    const filePath = path.join(folderPath, file);

    // Remove parentheses from the file name
    const newFileName = file.replace(/\s/g, "");

    // Construct the full new file path
    const newFilePath = path.join(folderPath, newFileName);

    // Rename the file
    fs.rename(filePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error("Error renaming file:", renameErr);
      } else {
        console.log(`File ${file} renamed successfully!`);
      }
    });
  });
});
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Iterate over each file
  files.forEach((file) => {
    // Construct the full file path
    const filePath = path.join(folderPath, file);

    // Remove parentheses from the file name
    const newFileName = file.replace(/-/g, "");

    // Construct the full new file path
    const newFilePath = path.join(folderPath, newFileName);

    // Rename the file
    fs.rename(filePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error("Error renaming file:", renameErr);
      } else {
        console.log(`File ${file} renamed successfully!`);
      }
    });
  });
});
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Iterate over each file
  files.forEach((file) => {
    // Construct the full file path
    const filePath = path.join(folderPath, file);

    // Remove parentheses from the file name
    const newFileName = file.replace(/_/g, "");

    // Construct the full new file path
    const newFilePath = path.join(folderPath, newFileName);

    // Rename the file
    fs.rename(filePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error("Error renaming file:", renameErr);
      } else {
        console.log(`File ${file} renamed successfully!`);
      }
    });
  });
});
