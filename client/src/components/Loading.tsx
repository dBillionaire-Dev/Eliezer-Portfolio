import React from "react";

interface LoadingProps {
  size?: number; // diameter of spinner in pixels
  text?: string; // optional loading text
  fullScreen?: boolean; // full page height spinner
}

const Loading: React.FC<LoadingProps> = ({
  size = 48,
  text = "Loading...",
  fullScreen = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${
        fullScreen ? "h-screen" : "h-64"
      }`}
    >
      <div
        className="animate-spin rounded-full border-t-4 border-b-4 border-gray-800"
        style={{ width: size, height: size }}
      ></div>
      {text && <p className="mt-4 text-gray-700">{text}</p>}
    </div>
  );
};

export default Loading;
