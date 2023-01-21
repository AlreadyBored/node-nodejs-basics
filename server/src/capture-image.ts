import { mouse, screen, Region } from "@nut-tree/nut-js";
import Jimp from "jimp/es";
import {
  IMAGE_NAME,
  IMAGE_SIZE,
  MessageCommands,
  REPLACE_STRING,
} from "./constants";

export const captureImage = async () => {
  let { x, y } = await mouse.getPosition();
  const width = await screen.width();
  const height = await screen.height();
  if (x > width - IMAGE_SIZE) x = width - IMAGE_SIZE;
  if (y > height - IMAGE_SIZE) y = height - IMAGE_SIZE;
  const region = new Region(x, y, IMAGE_SIZE, IMAGE_SIZE);
  const img = await screen.captureRegion(IMAGE_NAME, region);
  const jimp = await Jimp.read(img);
  const jimpBuffer = await jimp.getBase64Async(Jimp.MIME_PNG);
  return `${MessageCommands.prnt_scrn} ${jimpBuffer.replace(
    REPLACE_STRING,
    ""
  )}`;
};
