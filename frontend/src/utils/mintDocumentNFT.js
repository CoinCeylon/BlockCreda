import { Transaction } from '@meshsdk/core';

export async function mintDocumentNFT(wallet, metadata) {
  const tx = new Transaction({ initiator: wallet });

  tx.mintAsset({
    assetName: metadata.name,
    assetQuantity: '1',
    metadata: {
      name: metadata.name,
      image: metadata.ipfsUrl,
      docType: metadata.docType,
      issuer: metadata.issuer,
      issueDate: metadata.issueDate,
    },
    label: '721',
  });

  const unsignedTx = await tx.build();
  const signedTx = await wallet.signTx(unsignedTx);
  const txHash = await wallet.submitTx(signedTx);
  return txHash;
}
