import axios from 'axios';

export const uploadToIPFS = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        pinata_api_key: '6f62a4240441748c7b09',
        pinata_secret_api_key: 'c58493358a90108e8ffe269720139a95e515601cbda9171dd72ddf09f702ed7a',
      },
    });
    return `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
  } catch (err) {
    console.error('Error uploading to IPFS:', err);
    throw new Error('IPFS upload failed');
  }
};