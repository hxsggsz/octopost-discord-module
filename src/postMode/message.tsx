import { PostMode } from "@octopost/module-manager";
import MessagePreview from "./previews/messagePreview";

export const Message: PostMode = {
  name: "Message",
  previewComponent: MessagePreview,
  widgets: [],
  validators: {
    media: {
      allowedFormats: ["jpg", "jpeg", "png", "webp", "gif"],
      ar: ["1080:1920"],
      maxFileSize: 25,
      mediaQtyLimit: 10,
    },
    text: {
      maxLength: 2000,
    },
  },
};
