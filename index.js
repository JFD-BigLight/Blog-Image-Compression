const fs = require('fs-extra');
const tinify = require("tinify");

/// please get your unique key
tinify.key = "";

//please update your new file name 
const fileName = "";
const nameSlug = fileName.replaceAll(' ', '_');
const directory = fs.readdirSync("./images");


// check if a string contains a number
const containsNumbers = (str) =>{return /\d/.test(str)}
// find the index of the number in the file name
const findindex = (str)=>{
    var num = /\d/;
    var nums = str.match(num);
    return str.indexOf(nums);
}
// check to see if the file passed is an image
const isImage = (url) => {return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)};

function recursion(){
    fs.readdir('./images', function(err, data) {data.length == 0?console.log(`${directory} is empty!`):compressImages(directory);}); 
    const compressImages = async(files)=>{
        try{
            for(const file of files){
                if(fs.statSync(`./images/${file}`).size > 400000){
                    console.error(`\x1b[41m Please reduce file size of ${file} \x1b[0m`)
                }else{
                    isImage(file)?await tinify.fromFile(`./images/${file}`).toFile(`./images/${file}`):console.log(`hidden file: ${file}`);
                }
                if(fs.statSync(`./images/${file}`).size <= 100000){
                    const moveFiles = (formatedFile) =>{
                        fs.move(`./images/${file}`,formatedFile, (err) => {
                            return (err?console.log(err):console.log(`\x1b[32m${file} successfully moved!! \x1b[0m`));
                        });
                    }
                    if(containsNumbers(file)){
                        const numType = file.slice(findindex(file),file.length);
                        const formatedFileName = `${nameSlug + numType}`;
                        moveFiles(`./final/${formatedFileName.toLowerCase()}`);
                    }
                    if(file.includes('ero')) moveFiles(`./final/${nameSlug + "Hero.jpg"}`);
                }
                else{recursion();}
            }
        } catch(error){
            console.log(`Error:${error}`);
        }
    }
}
recursion();
