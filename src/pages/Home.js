// const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && allowedFileTypes.includes(file.type)) {
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         const img = new Image();
//         img.onload = () => {
//           const canvas = document.createElement("canvas");
//           const ctx = canvas.getContext("2d");
//           canvas.width = img.width;
//           canvas.height = img.height;
//           ctx.drawImage(img, 0, 0);

//           // Convert canvas to Blob in JPG format
//           canvas.toBlob(
//             (blob) => {
//               const newFile = new File([blob], `${file.name}.jpg`, {
//                 type: "image/jpeg",
//               });

//               // Now you can upload the newFile or perform any action with it
//               dispatch(uploadImage(newFile, nic, ""));
//             },
//             "image/jpeg",
//             1 // JPEG image quality (from 0 to 1)
//           );
//         };
//         img.src = e.target.result;
//       };

//       reader.readAsDataURL(file);
//     } else {
//       alert("Accept only '.jpg', '.jpeg', '.png' type images.");
//     }
//   };

//   const handleImageUpload = (file) => {
//     return new Promise((resolve, reject) => {
//       const formData = new FormData();
//       formData.append('file', file);
  
//       fetch('http://rcc.dockyardsoftware.com/upload', {
//         method: 'POST',
//         body: formData,
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`Server responded with status ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           if (data.fileUrl) {
//             resolve(data.fileUrl);
//           } else {
//             reject(new Error('File upload failed: No file URL returned'));
//           }
//         })
//         .catch((error) => {
//           console.error('Image upload failed:', error);
//           reject(error);
//         });
//     });
//   };
  
//   const handleSubmitPlayer = async (formData, file) => {
//     try {
//       // Step 1: Upload the image and get the URL
//       const imageUrl = await handleImageUpload(file);
  
//       // Step 2: Add the image URL to the player data
//       const playerData = {
//         ...formData,
//         image: imageUrl, // Attach the uploaded image URL
//       };
  
//       // Step 3: Submit player data to the backend
//       const response = await fetch('http://rcc.dockyardsoftware.com/api/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(playerData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Failed to submit player: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('Player added successfully:', data);
//       alert('Player added successfully!');
//     } catch (error) {
//       console.error('Error adding player:', error);
//       alert(`Error: ${error.message}`);
//     }
//   };