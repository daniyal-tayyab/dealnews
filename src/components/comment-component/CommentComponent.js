import React from "react";

import "./style.css";

const CommentComponent = () => {
  return (
    <div class="card">
      <div class="chat-header">Comments</div>
      <div class="chat-window">
        <ul class="message-list"></ul>
      </div>
      <div class="chat-input">
        <input
          type="text"
          class="message-input"
          placeholder="Type your Comment here"
        />
        <button class="send-button">Post</button>
      </div>
    </div>
  );
};

export default CommentComponent;
