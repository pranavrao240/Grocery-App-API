const multer = require("multer");
const Path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/sliders');
    },
    filename:(req, file, cb) => {
        cb(null, Date.now()+"-"+file.originalname);
    },

});

const fileFilter = (req, file, callback) => {
    const fileExt = [".png",".jpg"];
    if(!fileExt.includes(Path.extname(file.originalname))){
        return callback(new Error("Invalid File Type"));
    }
    const fileSize = parseInt(req.headers["content-length"]);

    if(fileSize >1048576){ 
        return callback(new Error("Invalid File Size"));
    }

    callback(null,true);
}

let upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    fileSize:1048576
})

module.exports = upload.single("sliderImage");