// // Function to fetch images from Pinata using the CIDs
// const pinataSDK = require('@pinata/sdk');

// const pinata = pinataSDK('6a58d9f3839f73873497', '5561ce86dcc05272135c3ebdaedd3f092f4a00de1402b0a02a692c78816ec656');



// export default async function fetchImagesFromPinata() {
//     try {
//       const images = await Promise.all(
//         imageCIDs.map(async (cid) => {
//           const image = await pinata.pinByHash(cid);
//           return image;
//         })
//       );
//       return images;
//     } catch (error) {
//       console.error('Error fetching images from Pinata:', error);
//       return [];
//     }
//   }