import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    if (file.mimetype == "application/pdf") {
      cd(null, "pdfUploads");
    } else {
      cd(null, "uploads");
    }
  },

  filename: function (req, file, cd) {
    cd(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
export default upload;
