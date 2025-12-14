import React from "react";
import "./NFTCard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NFTCard = ({ nft }) => {
  return (
    <motion.div
      className="nft-card"
      whileHover={{ scale: 1.05, rotateY: 10 }}
    >
      <img src={nft.image} alt={nft.name} />
      <h3>{nft.name}</h3>
      <p>Artist: {nft.artist}</p>
      <p>Price: {nft.price} ETH</p>
      <Link to={`/nft/${nft.id}`} className="view-details">View Details</Link>
    </motion.div>
  );
};

export default NFTCard;
