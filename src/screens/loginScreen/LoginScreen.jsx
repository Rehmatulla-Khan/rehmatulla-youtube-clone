import React from "react";
import "./_loginScreen.scss";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="youtube logo"
        />
        <button>Login with google</button>
        <p>This project is made using Youtube data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
