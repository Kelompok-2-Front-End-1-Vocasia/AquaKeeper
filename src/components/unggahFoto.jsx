import { useState } from 'react';
import { ImageUploader } from 'cloudinary-react';

const ImageUploadComponent = () => {
  const [image, setImage] = useState('');

  const handleImageUpload = (info) => {
    if (info.event === 'success') {
      setImage(info.info.secure_url);
      // Di sini Anda dapat menyimpan URL gambar ke database atau melakukan tindakan lainnya.
    }
  };

  return (
    <div>
      <ImageUploader
        cloudName={env.CLOUD_NAME}
        apiKey={env.CLOUD_API_KEY}
        uploadPreset="ml_default"
        buttonText="Pilih Gambar"
        onSuccess={handleImageUpload}
        onFailure={console.error}
        withIcon={true}
        singleImage={true}
      />
      {image && <img src={image} alt="Uploaded" style={{ width: '300px', height: 'auto' }} />}
    </div>
  );
};

export default ImageUploadComponent;
