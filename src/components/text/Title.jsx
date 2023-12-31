import React from "react";

const Title = ({ children }) => {
    return (
        <h1 className="text-2xl font-semibold p-4">
            {children}
        </h1>
    );
}
export default Title;