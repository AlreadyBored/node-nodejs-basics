import { messageHandler } from "./message-handler";
import { WebSocketServer } from "ws";

const HTTP_PORT = 8080;
const wss = new WebSocketServer({ port: HTTP_PORT });

wss.on("connection", (ws) => {
  console.log("connection done");

  ws.on("message", async (data) => {
    const message = await messageHandler(data.toString());
    if (message) {
      ws.send(message);
    }
  });

  ws.send("Hello from WS");
});
console.log(`Websocket listen PORT:${HTTP_PORT}`);
