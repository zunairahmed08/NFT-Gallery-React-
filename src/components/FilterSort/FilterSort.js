import React, { useState } from "react";
import "./FilterSort.css";

const FilterSort = ({ nfts, setNfts, allNfts }) => {
  const [artist, setArtist] = useState("");

  const handleSortPrice = () => {
    const sorted = [...nfts].sort((a, b) => a.price - b.price);
    setNfts(sorted);
  };

  const handleFilterArtist = (e) => {
    const selected = e.target.value;
    setArtist(selected);
    if (selected === "") {
      setNfts(allNfts);
    } else {
      const filtered = allNfts.filter(nft => nft.artist === selected);
      setNfts(filtered);
    }
  };

  return (
    <div className="filter-sort">
      <button onClick={handleSortPrice}>Sort by Price</button>
      <select value={artist} onChange={handleFilterArtist}>
        <option value="">All Artists</option>
        <option value="Zunair">Zunair</option>
        <option value="Ahmed">Ahmed</option>
        <option value="Sara">Sara</option>
      </select>
    </div>
  );
};

export default FilterSort;
