import crypto from 'crypto'
import multer from 'multer'
import { resolve } from 'path'

const upload = (folderPath: string) => ({
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", folderPath),
  }),
  filename: (req, file, callback) => {
    const fileHash = crypto.randomBytes(16).toString("hex");
    const fileName = `${fileHash}-${file.originalname}`;

    return callback(null, fileName);
  },
});

export default upload;
