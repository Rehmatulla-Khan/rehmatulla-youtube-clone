import moment from "moment";
import React from "react";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex ">
      <img
        src="https://w7.pngwing.com/pngs/772/542/png-transparent-favicon-drawing-arab-avatar-heroes-head-cartoon.png"
        alt="avatar"
        className="rounded-circle me-3"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">
          Mezab Khan * {moment("2020-05-05").fromNow()}
        </p>
        <p className="mb-0">NICE VIDEO!!!!</p>
      </div>
    </div>
  );
};

export default Comment;
