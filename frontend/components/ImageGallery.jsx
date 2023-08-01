// import React, { useState, useEffect } from 'react';
// import fetchImagesFromPinata from '../js/pinata.js'

// // Array of CIDs for the images you want to display
// const imageCIDs = [
//   'CID_1',
//   'CID_2',
//   // Add more CIDs for each image you want to display
// ];

// // React functional component
// function ImageGallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function fetchImages() {
//       const fetchedImages = await fetchImagesFromPinata();
//       setImages(fetchedImages);
//     }
//     fetchImages();
//   }, []);

//   return (
//     <div>
//       {images.map((image) => (
//         <img key={image.ipfs_pin_hash} src={image.ipfs_pin_hash} alt="Image from Pinata" />
//       ))}
//     </div>
//   );
// }

// export default ImageGallery;