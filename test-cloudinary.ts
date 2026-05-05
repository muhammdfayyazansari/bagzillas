import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";

dotenv.config();

console.log("Configuring Cloudinary...");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function testUpload() {
  try {
    console.log("Attempting upload...");
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: process.env.CLOUDINARY_UPLOAD_FOLDER },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      // Dummy 1x1 transparent PNG
      const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64");
      stream.end(buffer);
    });
    console.log("Upload success!", result);
  } catch (err) {
    console.error("Upload failed with error:", err);
  }
}

testUpload();
