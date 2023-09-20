import "dotenv/config";
import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, async () => {
  console.log(`Opening app http://localhost:${port}/#/${process.env.GAME_ID}`);
});