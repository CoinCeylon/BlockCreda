
import React from 'react';
import { useWallet } from '@meshsdk/react';

const WalletConnect = () => {
  const { connected, connect, disconnect } = useWallet();

  return (
    <div className="mb-4">
      {!connected ? (
        <button
          onClick={() => connect('eternl')}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Connect Eternl
        </button>
      ) : (
        <button
          onClick={disconnect}
          className="bg-red-500 px-4 py-2 rounded text-white"
        >
          Disconnect
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
