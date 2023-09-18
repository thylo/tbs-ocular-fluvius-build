import "dotenv/config";
import express from "express";
const app = express();
const port = 3000;

import open from "open";

app.use(express.static("public"));

app.listen(port, async () => {
  await open(`http://localhost:${port}/#/${process.env.GAME_ID}`, {
    app: { name: "google chrome", arguments: ["--kiosk"] },
  });
  console.log(`Opening app http://localhost:${port}/#/${process.env.GAME_ID}`);
});
