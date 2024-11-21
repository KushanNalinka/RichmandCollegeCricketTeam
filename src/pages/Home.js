const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && allowedFileTypes.includes(file.type)) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          // Convert canvas to Blob in JPG format
          canvas.toBlob(
            (blob) => {
              const newFile = new File([blob], `${file.name}.jpg`, {
                type: "image/jpeg",
              });

              // Now you can upload the newFile or perform any action with it
              dispatch(uploadImage(newFile, nic, ""));
            },
            "image/jpeg",
            1 // JPEG image quality (from 0 to 1)
          );
        };
        img.src = e.target.result;
      };

      reader.readAsDataURL(file);
    } else {
      alert("Accept only '.jpg', '.jpeg', '.png' type images.");
    }
  };