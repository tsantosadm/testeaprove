// Import rota Chukck Norris
import express from "express";
import { chuckNorrisRouter } from "./chucknorris";

export const apiChuckNorris = express();

apiChuckNorris.use("/chuck-norris", chuckNorrisRouter);
