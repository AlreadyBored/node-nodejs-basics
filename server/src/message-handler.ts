import { mouse, left, up, right, down } from "@nut-tree/nut-js";
import { MessageCommands } from "./constants";

import { drawCircle, drawRectangle, moveMouse } from "./mouse-function";
import { captureImage } from "./capture-image";

export const messageHandler = async (message: string) => {
  const command = message.split(" ");
  switch (command[0]) {
    case MessageCommands.mouse_up:
      moveMouse(up, Number(command[1]));
      break;
    case MessageCommands.mouse_down:
      moveMouse(down, Number(command[1]));
      break;
    case MessageCommands.mouse_left:
      moveMouse(left, Number(command[1]));
      break;
    case MessageCommands.mouse_right:
      moveMouse(right, Number(command[1]));
      break;
    case MessageCommands.mouse_position:
      const position = await mouse.getPosition();
      return `${MessageCommands.mouse_position} ${position.x},${position.y}`;
    case MessageCommands.draw_circle:
      drawCircle(Number(command[1]));
      break;
    case MessageCommands.draw_rectangle:
      drawRectangle(Number(command[1]), Number(command[2]));
      break;
    case MessageCommands.draw_square:
      drawRectangle(Number(command[1]), Number(command[1]));
      break;
    case MessageCommands.prnt_scrn:
      const message = await captureImage();
      return message;
    default:
      break;
  }
};
