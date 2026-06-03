import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath) => {
    try {
        if(!localFilePath) {
            return null;
        }
        // Upload the image to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",  
        });
        //file has been uploaded to cloudinary, now we can remove it from local storage
        console.log("File is uploaded to cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);//removing the file from local storage if there is an error while uploading to cloudinary.
        return null;
    }
export default uploadOnCloudinary;

cloudinary.v2.uploader.upload("path/to/my/image.jpg", { public_id: "my_image" },
  function(error, result) { console.log(result, error); });