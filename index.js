const axios = require('axios');

// Base URL for the API
const apimain = 'https://nayan-video-downloader.vercel.app/';

async function alldl(url) {
  try {
    
    const response = await axios.get(`${apimain}alldown?url=${url}`);

    
    const imu = response.data.data;

    
    return {
      Author: "Md. Ariful Islam Asif",
      Facebook: "https://www.facebook.com/ARIF.THE.REBEL.233",
      Whatsapp: "wa.me/+8801905600093",
      data: rebel  
    };
  } catch (error) {
    console.error("Error downloading video:", error);
    throw error;  
  }
}

module.exports = { alldl };
