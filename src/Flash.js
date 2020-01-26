import React from "react";
import { render } from "react-dom";
import FlashMessage from "react-flash-message";

const Message = () => (
  <FlashMessage duration={3000}>
    <div>
      <strong>I will disapper in 3 seconds!</strong>
      <button>Press me</button>
    </div>
  </FlashMessage>
);

export default Message;
