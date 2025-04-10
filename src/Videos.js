import React from "react";
import './Videos.css';

const Videos = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="section-header text-green-700">Watch Our Story</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 justify-items-center">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/eyGg4FVf6_E"
            title="YouTube video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/rJhQhOA6Fy8"
            title="YouTube video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-wrapper md:col-span-2">
          <iframe
            src="https://www.youtube.com/embed/GB6L2lOMnGE"
            title="YouTube video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
