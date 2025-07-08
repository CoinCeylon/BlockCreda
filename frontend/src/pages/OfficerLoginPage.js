
import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfficerLoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const wallet = prompt("Enter your wallet address:");
    if (wallet && wallet.trim() !== "") {
      localStorage.setItem('walletAddress', wallet.trim());
      navigate('/register');
    } else {
      alert("Wallet address is required!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Officer Login</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Connect Wallet (Manual Entry)
      </button>
    </div>
  );
};

export default OfficerLoginPage;
