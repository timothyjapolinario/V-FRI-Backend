import express, { Express, Request, Response } from "express";
import { getAllCloudFiles } from "./services/cloudFileService";
import cors from "cors";
const app: Express = express();
app.use(cors());
const port = 3000;

app.get("/cloudFile", async (req: Request, res: Response) => {
  const cf = await getAllCloudFiles();
  const response = {
    message: "HELLO WORLDD",
    cf: cf,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
