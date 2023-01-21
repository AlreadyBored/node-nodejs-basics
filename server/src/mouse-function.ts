import {
  down,
  left,
  mouse,
  Point,
  right,
  straightTo,
  up,
} from "@nut-tree/nut-js";

export const moveMouse = async (
  callback: (px: number) => Promise<Point[]>,
  value: number
) => {
  await mouse.move(callback(value));
};

export const drawRectangle = async (x: number, y: number) => {
  await mouse.drag(right(x));
  await mouse.drag(down(y));
  await mouse.drag(left(x));
  await mouse.drag(up(y));
};

export const drawCircle = async (r: number) => {
  const position = await mouse.getPosition();
  for (let i = 0; i < 362; i = i + 5) {
    let x = r * Math.cos((Math.PI * i) / 180) + position.x;
    let y = r * Math.sin((Math.PI * i) / 180) + position.y;
    const point = new Point(x, y);
    if (i === 0) {
      await mouse.move(straightTo(point));
    } else {
      await mouse.drag(straightTo(point));
    }
  }
};
