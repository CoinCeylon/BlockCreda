import React, { useState } from 'react';
import { useWallet } from '@meshsdk/react';
import { uploadToIPFS } from '../utils/uploadToIPFS'; 
import { mintDocumentNFT } from '../utils/mintDocumentNFT';

const RegisterDocumentPage = () => {
  const { wallet, connected } = useWallet();
  const [formData, setFormData] = useState({
    name: '',
    docType: '',
    issueDate: '',
    issuer: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!connected) return alert('Connect wallet first.');

    try {
      const ipfsUrl = await uploadToIPFS(formData.file);

      const usedAddresses = await wallet.getUsedAddresses();
      const issuerAddress = usedAddresses[0];

      const metadata = {
        name: formData.name,
        docType: formData.docType,
        issueDate: formData.issueDate,
        ipfsUrl,
        issuer: issuerAddress,
      };

      const txHash = await mintDocumentNFT(wallet, metadata);
      alert(`NFT minted successfully. TxHash: ${txHash}`);
    } catch (err) {
      console.error(err);
      alert('Minting failed');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Register Document</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Document Name" onChange={handleChange} required className="border p-2 w-full" />
        <input type="text" name="docType" placeholder="Document Type" onChange={handleChange} required className="border p-2 w-full" />
        <input type="date" name="issueDate" onChange={handleChange} required className="border p-2 w-full" />
        <input type="file" name="file" onChange={handleChange} required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default RegisterDocumentPage;
