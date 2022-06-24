
import express from "express";
import { ChuckNorrisController } from "../controllers/ChuckNorrisControllers";

export const chuckNorrisRouter = express();
chuckNorrisRouter.get("/random/", ChuckNorrisController.random); // se os dois estão vazios

chuckNorrisRouter.get("/search/:term", ChuckNorrisController.search); // se palavra chave ta preenchido

chuckNorrisRouter.get("/categories/", ChuckNorrisController.categories); // lista  categoria

chuckNorrisRouter.get("/category/:term", ChuckNorrisController.category); // imprimi categoria
