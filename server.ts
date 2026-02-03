import "dotenv/config";
import http from 'http'
import express from 'express'
import config from "./config/index"
import databaseConnect from "./database/connection"


import TodoRoutes from "./routes/todo.routes";

const app = express();

app.use(express.json());

app.use("/api/v1/todo",TodoRoutes);
const server = http.createServer(app);

databaseConnect((isConnect: boolean) => {
  if (isConnect) {
    server.listen(config.PORT, () => {
      console.log(`Server runs on port ${config.PORT}`);
    });
  }
});
