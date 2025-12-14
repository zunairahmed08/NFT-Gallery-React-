import React from "react";
import { useParams, Link } from "react-router-dom";
import { nftData } from "../data/nftData";

const NFTDetails = () => {
  const { id } = useParams();
  const nft = nftData.find(n => n.id === parseInt(id));

  if (!nft) return <p>NFT not found</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Link to="/">← Back to Gallery</Link>
      <h1>{nft.name}</h1>
      <img src={nft.image} alt={nft.name} style={{ width: "400px", borderRadius: "10px" }} />
      <p>Artist: {nft.artist}</p>
      <p>Price: {nft.price} ETH</p>
      <p>{nft.description}</p>
    </div>
  );
};

export default NFTDetails;
