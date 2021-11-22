import React from "react";
import { AiFillEye } from "react-icons/ai";
import thumbnail from "../../assets/temp-thumbnail.jpg";
import "./_video.scss";

const Video = () => {
  return (
    <div className="video">
      <div className="video__top">
        <img src={thumbnail} alt="thumbnail" />
        <span>05:43</span>
      </div>

      <div className="video__title">Create App in 5 mins</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 5m views •
        </span>
        <span>5 days ago</span>
      </div>

      <div className="video__channel">
        <img
          src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s88-c-k-c0x00ffffff-no-rj"
          alt="channel logo"
        />
        <p>Marvel Entertainment</p>
      </div>
    </div>
  );
};

export default Video;
