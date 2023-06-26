import React, { useEffect, useState } from 'react';
import './Imageholder.css';

function Imageholder({ imgpreview }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imgpreview && imgpreview !== '' && imgpreview !== null) {
      setImage(URL.createObjectURL(imgpreview));
    }
  }, [imgpreview]);

  return (
    <div className='image_holder'>
      <img src={image} alt="Preview" />
    </div>
  );
}

export default Imageholder;
