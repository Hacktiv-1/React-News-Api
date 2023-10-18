import React from "react";

function NewsItemHead({ urlToImage }) {
  const imageUrl = urlToImage || "https://placehold.co/600x400?text=No-Image";

  return (
    <img
      src={imageUrl}
      alt=""
      className="overflow-hidden rounded-t-lg object-cover w-full h-80 transition ease-in-out hover:delay-150 hover:scale-105"
    />
  );
}

export default NewsItemHead;
