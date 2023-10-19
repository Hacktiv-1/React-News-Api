import React from "react";

function NewsWrapper({ children }) {
  return (
    <div className="container mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export default NewsWrapper;
