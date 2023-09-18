import "dotenv/config";
import express from "express";
const app = express();
const port = 3000;

import open, {apps} from "open";

app.use(express.static("public"));

app.listen(port, async () => {
  await open(`http://localhost:${port}/#/${process.env.GAME_ID}`, {
    app: { name: apps.chrome, arguments: ["--kiosk", "--disable-pinch", "--overscroll-history-navigation=0", "--allow-file-access-from-files", "--check-for-update-interval=604800"] },
  });
  console.log(`Opening app http://localhost:${port}/#/${process.env.GAME_ID}`);
});