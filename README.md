# NFT Gallery (React)

## Project Overview

NFT Gallery is a frontend web application developed using React. The project displays a collection of NFT cards with images, artist names, and prices. Users can filter NFTs by artist, sort them by price, and view detailed information for each NFT using client-side routing.

This project is designed as a beginner-to-intermediate level React application and is suitable for academic submissions, practice projects, and portfolio demonstration.


## Features

* Display NFTs in a responsive card-based grid
* Local image assets for NFTs
* Filter NFTs by artist name
* Sort NFTs by price
* Dedicated NFT details page
* Smooth hover animations using Framer Motion
* Clean and modular component structure
* Client-side routing with React Router


## Technologies Used

* React JS
* React Router DOM
* Framer Motion
* JavaScript (ES6)
* CSS


## Folder Structure
NFT-GALLERY/
│
├── node_modules/
├── public/
│
├── src/
│   ├── assets/
│   │   ├── nft1.jpg
│   │   ├── nft2.jpg
│   │   ├── nft3.jpg
│   │   ├── nft4.jpg
│   │   └── nft5.jpg
│   │
│   ├── components/
│   │   ├── FilterSort/
│   │   │   ├── FilterSort.js
│   │   │   └── FilterSort.css
│   │   │
│   │   └── NFTCard/
│   │       ├── NFTCard.js
│   │       └── NFTCard.css
│   │
│   ├── data/
│   │   └── nftData.js
│   │
│   ├── pages/
│   │   ├── Gallery.js
│   │   ├── Gallery.css
│   │   └── NFTDetails.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## Installation and Setup

Follow the steps below to run the project locally:

1. Clone the repository or download the source code.

2. Open the project folder in Visual Studio Code.

3. Open the terminal in the project root directory and install dependencies:


npm install

4. Install required extra libraries:

npm install framer-motion ethers

5. Start the development server:
npm start

6. Open your browser and navigate to:
http://localhost:3000

## Application Flow

* The Gallery page displays all NFTs in a grid layout.
* Filter and sort options allow users to organize NFTs dynamically.
* Clicking on an NFT opens a detailed view page.
* Hovering over NFT cards triggers smooth animation effects.



## Notes and Limitations

* This project is a frontend-only demo.
* No real blockchain transactions are performed.
* NFT data is stored locally in JavaScript files.
* MetaMask integration is not implemented in this version.


## Future Enhancements

* Backend integration using an API or JSON server
* Wallet connection and ownership simulation
* Real blockchain minting and buying functionality
* Search bar and pagination
* Light and dark theme toggle

## Author
Developed by Zunair

