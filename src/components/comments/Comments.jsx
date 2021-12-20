import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsOfVideoById } from "../../redux/actions/comments.action";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = ({ videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [videoId, dispatch]);

  const comments = useSelector((state) => state.commentsList.comments);

  const handleComment = () => {};
  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="my-2 comments__form d-flex w-100">
        <img
          src="https://w7.pngwing.com/pngs/772/542/png-transparent-favicon-drawing-arab-avatar-heroes-head-cartoon.png"
          alt="avatar"
          className="me-3 rounded-circle"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(15)].map((comment, i) => (
          <Comment key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
