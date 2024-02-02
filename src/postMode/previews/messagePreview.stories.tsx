import MessagePreview from "./messagePreview";
import { Story } from "@ladle/react";
import octologo from "./assets/octologo.png";
import { IMessagePreview } from "./messagePreview.types";
import "./styles/base.css";

export const MessagePreviewStorie: Story<IMessagePreview> = (props) => {
  return <MessagePreview {...props} />;
};

MessagePreviewStorie.args = {
  name: "Octopost",
  image: octologo,
  content: "message content",
};
