import React from "react";
import "./styles/messagePreview.css";
import { IMessagePreview } from "./messagePreview.types";

function MessagePreview(props: IMessagePreview) {
  return (
    <main className="wrapper">
      <div className="userContent">
        <img
          className="image"
          src={props.image}
          alt="foto de um povo logo da octopost"
        />
        <div className="wrapperText">
          <div className="userText">
            <h1 className="name">{props.name}</h1>
            <span>
              Agora às {new Date().getHours()}:{new Date().getMinutes()}
            </span>
          </div>
          <p className="content">{props.content}</p>
        </div>
      </div>
    </main>
  );
}

export default MessagePreview;
