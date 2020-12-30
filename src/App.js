import React, { useState } from "react";
import "./App.css";
import postPhoto from "./img/post-photo.jpg";
import Post from "./Post.js";

const newPost = new Post(
  postPhoto,
  "sasha-yarynych",
  postPhoto,
  "this is description"
);

function App() {
  const [likeCounter, setCounter] = useState(0);

  return (
    <div className="post">
      <div className="header-of-post">
        <img src={newPost.avatar} className="avatar" alt="" />
        <h3 className="user-name">{newPost.userName}</h3>
        <button className="button">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="ellipsis-v"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
            className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-3x small-icon"
          >
            <path
              fill="currentColor"
              d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
              className=""
            ></path>
          </svg>
          <path
            fill="currentColor"
            d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
            className=""
          ></path>
        </button >
      </div>
      <img src={newPost.postPhoto} className="post-photo" alt="" />
      <div className="post-footer">
        <button
          className="button like-button"
          onClick={() => {
            setCounter(likeCounter + 1);
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-heart fa-w-16 fa-3x icon "
          >
            <path
              strokeWidth="65px"
              stroke={likeCounter > 0 ? "red" : "#ffffff"}
              fill={likeCounter > 0 ? "red" : "#717171"}
              d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
              className=""
            ></path>
          </svg>
          <path
            fill="currentColor"
            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            className=""
          ></path>
          <p className="like-btn-text btn-text">{likeCounter}</p>
        </button>
        <button
          className="button save-button"

        >
          <svg        
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bookmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="svg-inline--fa fa-bookmark fa-w-12 fa-3x icon "
          >
            <path          
              fill="#717171"
              stroke="#ffffff"
              strokeWidth="60px"
              d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
              class=""
            ></path>
          </svg>
        </button>
        <button className="button comments-btn">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="comment"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="svg-inline--fa fa-comment fa-w-16 fa-3x icon"
          >
            <path
              fill="currentColor"
              d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
              class=""
            ></path>
          </svg>
          <path
            fill="currentColor"
            d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"
            class=""
          ></path>
          <p className="comments-btn-text btn-text">0</p>
        </button>
      </div>
    </div>
  );
}

export default App;
