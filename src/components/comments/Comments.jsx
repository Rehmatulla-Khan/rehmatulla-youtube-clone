import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = () => {
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

// <div className="comments">
//     <p>1234 comments</p>
//     <div className="comments__form d-flex my-2">
//       <img
//         src="https://w7.pngwing.com/pngs/772/542/png-transparent-favicon-drawing-arab-avatar-heroes-head-cartoon.png"
//         alt="avatar"
//         className="rounded-circle me-3"
//       />
//       <form onSubmit={handleComment} className="d-flex flex-grow-1">
//         <input
//           type="text"
//           className="flex-grow-1"
//           placeholder="write a comment..."
//         />
//         <button className="border-0 p-2">comment</button>
//       </form>
//     </div>

//     <div className="comments__list">
// {[...Array(15)].map((comment, i) => (
//   <Comment key={i} />
//       ))}
//     </div>
//   </div>
