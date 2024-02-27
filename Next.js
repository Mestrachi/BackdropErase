import { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function BackgroundRemoval() {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);

  const removeBackground = async () => {
    // Assuming you have an input element with type="file" to select an image
    const file = inputImage.files[0];
    const imageUrl = URL.createObjectURL(file);

    // Read the image
    const image = new Image();
    image.src = imageUrl;
    await image.decode();

    // Perform background removal (replace this with your background removal logic)
    // For simplicity, this example just displays the input image as the output
    setOutputImage(imageUrl);
  };

  const handleInputChange = (event) => {
    setInputImage(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleInputChange} />
      <button onClick={removeBackground}>Remove Background</button>
      {outputImage && (
        <div>
          <h2>Output Image</h2>
          <img src={outputImage} alt="Output" />
        </div>
      )}
    </div>
  );
}
