import React, { useState } from 'react';
import { verifyDocument } from '../utils/verifyNFT';

const VerifyDocumentPage = () => {
  const [docId, setDocId] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = async () => {
    if (!docId.trim()) {
      alert('Please enter a Document ID');
      return;
    }

    try {
      const metadata = await verifyDocument(docId.trim());
      setResult(metadata);
    } catch (err) {
      console.error(err);
      alert('Verification failed');
      setResult(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Verify Document</h1>
      <input
        type="text"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
        placeholder="Enter Document NFT ID"
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleVerify} className="bg-green-600 text-white px-4 py-2 rounded mb-6">
        Verify
      </button>

      {result && (
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Name:</strong> {result.name}</p>
          <p><strong>Type:</strong> {result.docType}</p>
          <p><strong>Issuer:</strong> {result.issuer}</p>
          <p><strong>Issue Date:</strong> {result.issueDate}</p>
          <a href={result.image} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            View Document
          </a>
        </div>
      )}
    </div>
  );
};

export default VerifyDocumentPage;