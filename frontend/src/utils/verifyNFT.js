import axios from 'axios';

export const verifyDocument = async (nftId) => {
  try {
    const res = await axios.get(`https://cardano-testnet.blockfrost.io/api/v0/assets/${nftId}`, {
      headers: {
        project_id: 'preprodmoSoziq98sXocYytRiGjxPHdbuRReBMA', 
      },
    });

    return res.data.onchain_metadata;
  } catch (err) {
    console.error('Verification error:', err);
    throw new Error('Verification failed');
  }
};
