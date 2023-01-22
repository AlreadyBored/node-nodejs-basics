import { messageHandler } from "./message-handler";
import { WebSocketServer } from "ws";
import * as dotenv from "dotenv";
dotenv.config();

let HTTP_PORT = 8080;
if (process.env.PORT) {
  HTTP_PORT = parseInt(process.env.PORT);
}

const wss = new WebSocketServer({ port: HTTP_PORT });

wss.on("connection", (ws) => {
  console.log("connection done");

  ws.on("message", async (data) => {
    const message = await messageHandler(data.toString());

    if (message) {
      ws.send(message);
    }
  });
  ws.on("error", (error) => {
    console.log(error);
  });
  ws.on("close", () => ws.send("WS was closed"));

  ws.send("Hello from WS");
});
console.log(`Websocket listen PORT:${HTTP_PORT}`);
