import express from "express";
import cors from "cors";
import { apiChuckNorris } from "./router";

const port = process.env.PORT || "5000";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", apiChuckNorris);

app.listen(port, () => {
  console.log("Rodando na porta", port);
});
