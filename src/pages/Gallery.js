import React, { useState } from "react";
import { nftData } from "../data/nftData";
import NFTCard from "../components/NFTCard/NFTCard";
import FilterSort from "../components/FilterSort/FilterSort";
import "./Gallery.css";

const Gallery = () => {
  const [nfts, setNfts] = useState(nftData);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>NFT Gallery</h1>
      <FilterSort nfts={nfts} setNfts={setNfts} allNfts={nftData} />
      <div className="nft-grid">
        {nfts.map(nft => <NFTCard key={nft.id} nft={nft} />)}
      </div>
    </div>
  );
};

export default Gallery;
