******************INTRO**********************
Blog Image Compression is a small script that speeds up the process of renaming and compressing images for the George SEO Blog. Please Visit my Github page to clone the repo.
https://github.com/JFD-BigLight
******************INTRO**********************

******************SET UP**********************
Make sure Node & NPM are installed and then install the following:

Fs-Extra: 'npm install fs-extra'
Adds file system methods that aren't included in the native fs module and adds promise support to the fs methods.
For more information please refer to the Fs-Extra Github https://github.com/jprichardson/node-fs-extra/blob/master/README.md

Tinify: 'npm install tinify'
Node.js client for the Tinify API, used for TinyPNG and TinyJPG.
API KEY: Please visit https://tinypng.com/developers and sign up to receive your private key. When you have received your Key please update "tinify.key" in the index.js file.
For more information please refer to the Tinify Github https://github.com/tinify/tinify-nodejs/blob/master/README.md
******************SET UP**********************

******************HOW IT WORKS**********************
Figma 
1. Open your figma file select all images apart from the hero image.
2. Select all images and click export dropdown on the right hand side menu,
   select size:1.5x, file type:jpg then click export.
3. Make sure you select the "Blog-Image-Compression/images" as your folder to save your images to.
4. Go back to Figma and just select your Hero image and export the same as the previous files with
   the following settings size:1x, file type:jpg.

Files
1. Please make sure the files do not exceed 370kb or they will not be compressed below 100kb

VsCode
1. Open the "Blog-Image-Compression" folder in your Code Editor.
2. Make sure you have followed the "set up" process above.
3. open index.js and add your new file name to the "fileName" variable, add a week number name of the blog.
4. Then run 'node index.js'

For more information:
https://docs.google.com/document/d/1frx46lQmt1MYEIbyJHo2kktp4R-1AXolgIj2vKLCMLw/edit#
https://photos.app.goo.gl/qHMSG2fNYQHnBGqX7
******************HOW IT WORKS**********************


******************CONTACT**********************
Any questions please do not hesitate to get in touch, you can contact me via the below.
jacob.delaney@biglight.com
******************CONTACT**********************
# Blog-Image-Compression
