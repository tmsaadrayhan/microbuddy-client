import { createRequire } from "module";
const require = createRequire(import.meta.url);

import crypto from 'crypto'
const fs = require('fs')
const path = "src/assets/portfolio/banner/";
fs.readdir(path, (err, files) => {
  if (err) {
    console.error(err);
  }
  files.forEach((file) => {
    if (file.toLocaleLowerCase() !== file) {
      fs.rename(path + file, path + file.toLocaleLowerCase(), (err) => {
        if(err) {
            console.error(err);
        }
        else {
            console.log(file);
        }
      });
    }
  });
});
