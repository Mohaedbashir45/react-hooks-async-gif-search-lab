import React from "react";

function GifList({ imageUrls }) {
  return (
    <div>
      <ul>
        {imageUrls.map((url, index) => (
          <li key={"img_" + index}>
            <img src={url} alt="gif" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GifList;
