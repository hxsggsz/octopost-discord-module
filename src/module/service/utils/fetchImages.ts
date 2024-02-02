import { PublishResponse } from "@octopost/module-manager";
import { ResContent } from "./fetchImage.types";

export async function fetchImages(img: File, imagesLinks: string[]) {
  const formData = new FormData();
  formData.append("image", img);

  try {
    const fetchImages = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: "Client-ID 96d5cb7e6c00be9",
      },
      body: formData,
    });

    const res = (await fetchImages.json()) as ResContent;
    if (!res.success) {
      throw new Error(res.data.error?.message);
    }
    imagesLinks.push(res.data.link);
  } catch (error) {
    console.error(`[discord-imgur]: ${error}`);
    return {
      status: 500,
    } as PublishResponse;
  }
}
