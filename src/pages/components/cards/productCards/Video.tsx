import * as React from "react";
import { useState, useEffect } from "react";

interface IVideoProps {
  link: string;
  judul: string;
}

const Video: React.FunctionComponent<IVideoProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="containerVideo">
      <div className="containerEmbed">
        {isMobile ? (
          <iframe
            width="300"
            height="220"
            src={props.link}
            title="YouTube video player"
            allow="fullscreen"
          />
        ) : (
          <iframe
            width="200"
            height="140"
            src={props.link}
            title="YouTube video player"
            allow="fullscreen"
          />
        )}
      </div>
      <h2 className="judulVideo"> {props.judul} </h2>
    </div>
  );
};

export default Video;
