const pinataApiKey = "ec60ecb81fcc3a1af0f0";
const pinataSecretApiKey = "c124318d0101614ca1a88aa83a319bc6057f13bb2fb7a8e8437c2693956f5368";
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const pinFileToIPFS = async () => {  
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();  
    data.append("file", fs.createReadStream("./pathtoyourfile.png"));  

    const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; 
      boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  }); 
  
  console.log(res.data);
};

pinFileToIPFS();