import {
  mouse,
  left,
  up,
  right,
  down,
  Point,
  straightTo,
  Button,
} from "@nut-tree/nut-js";
import { MessageCommands } from "./constants";

const moveMouse = async (
  callback: (px: number) => Promise<Point[]>,
  value: number
) => {
  await mouse.move(callback(value));
};

const drawRectangle = async (x: number, y: number) => {
  await mouse.drag(right(x));
  await mouse.drag(down(y));
  await mouse.drag(left(x));
  await mouse.drag(up(y));
};

const drawCircle = async (r: number) => {
  const position = await mouse.getPosition();
  for (let i = 0; i < 362; i = i + 5) {
    let x = r * Math.cos((Math.PI * i) / 180);
    let y = r * Math.sin((Math.PI * i) / 180);
    const point = new Point(x + position.x, y + position.y);
    if (i === 0) {
      await mouse.move(straightTo(point));
    } else {
      await mouse.drag(straightTo(point));
    }
  }
};

export const messageHandler = async (message: string) => {
  const command = message.split(" ");
  switch (command[0]) {
    case MessageCommands.mouse_up:
      moveMouse(up, Number(command[1]));
      return `${MessageCommands.mouse_up + "_" + command[1]}`;
    case MessageCommands.mouse_down:
      moveMouse(down, Number(command[1]));
      return `${MessageCommands.mouse_down + "_" + command[1]}`;
    case MessageCommands.mouse_left:
      moveMouse(left, Number(command[1]));
      return `${MessageCommands.mouse_left + "_" + command[1]}`;
    case MessageCommands.mouse_right:
      moveMouse(right, Number(command[1]));
      return `${MessageCommands.mouse_right + "_" + command[1]}`;
    case MessageCommands.mouse_position:
      const position = await mouse.getPosition();
      return `${
        MessageCommands.mouse_position +
        "_" +
        "X:" +
        position.x +
        "Y:" +
        position.y
      }`;
    case MessageCommands.draw_circle:
      drawCircle(Number(command[1]));
      return `${MessageCommands.draw_circle + "_" + command[1]}`;
    case MessageCommands.draw_rectangle:
      drawRectangle(Number(command[1]), Number(command[2]));
      return `${
        MessageCommands.draw_rectangle + "_" + command[1] + "_" + command[2]
      }`;
    case MessageCommands.draw_square:
      drawRectangle(Number(command[1]), Number(command[1]));
      return `${MessageCommands.draw_square + "_" + command[1]}`;
    case MessageCommands.prnt_scrn:
      return `${MessageCommands.prnt_scrn}`;
    default:
      break;
  }
};
