import {
  GenericObject,
  PublishResponse,
  Service,
} from "@octopost/module-manager";
import { WebhookClient } from "discord.js";
import { fetchImages } from "./utils/fetchImages";
/**
 * responsable to send the message to the discord channel by a webhook
 * this code will only run on server side so you will have access to node API like readdir
 * @implements {Service} - the interface with the necessary method
 * @example
 * ```ts
 * // how to use this service:
 * const teste = new DiscordServer();
 *
 * const connectionObject: GenericObject<string> = {
 *   url: "webhook string connection here",
 * };
 *
 * // mock a image to this example
 * const image = new File(["hello"], "hello.png", { type: "image/png" });
 * teste.publish("teste", [image, image1], connectionObject);
 * ```
 */
export class DiscordServer implements Service {
  /**
   * @param text - the message content
   * @param image - the media to send with the message
   * @param customOpts - a object with a key name called url that receives the discord webhook string connection
   * @returns a object with a status code
   */
  async publish(
    text: string,
    image: File[],
    customOpts: GenericObject<string>,
  ): Promise<PublishResponse> {
    const webhookClient = new WebhookClient({ url: customOpts.url });
    const imagesLinks: string[] = [];

    image.map(async (img) => fetchImages(img, imagesLinks));

    try {
      webhookClient.send({
        content: text,
        files: imagesLinks,
      });
    } catch (error) {
      console.error(`[discord]: ${error}`);
      return {
        status: 500,
      } as PublishResponse;
    }

    return {
      status: 201,
    } as PublishResponse;
  }
}
