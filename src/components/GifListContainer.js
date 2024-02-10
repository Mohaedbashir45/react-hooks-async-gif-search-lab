import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

const request_url =
  "https://api.giphy.com/v1/gifs/trending?api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g";

function GifListContainer() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetch(request_url)
      .then((r) => r.json())
      .then((data) => {
        const topThree = data.data.slice(0, 3); // Getting top 3 trending GIFs
        const urls = topThree.map((gif) => gif.images.original.url);
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error fetching trending GIFs:", error);
      });
  }, []);

  function handleSearch(searchInput) {
    let searchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=RLH6uvGK2KyyVc5ts9jJaWiAndkpALVw&rating=g`;

    fetch(searchUrl)
      .then((r) => r.json())
      .then((data) => {
        const searchedUrls = data.data.map((gif) => gif.images.original.url);
        setImageUrls(searchedUrls);
      })
      .catch((error) => {
        console.error("Error fetching searched GIFs:", error);
      });
  }

  return (
    <div>
      <GifSearch handleSearch={handleSearch} />
      <GifList imageUrls={imageUrls} />
    </div>
  );
}

export default GifListContainer;
