import { CloudinaryContext } from 'cloudinary-react';

// Di dalam komponen Anda
<CloudinaryContext cloudName={env.CLOUD_NAME} apiKey={env.CLOUD_API_KEY} apiSecret={env.CLOUD_API_SECRET}>
  {/* ... komponen-komponen lain di sini */}
</CloudinaryContext>
