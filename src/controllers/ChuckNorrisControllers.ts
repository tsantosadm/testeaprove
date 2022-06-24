//controladores de rotas

import { server_api } from "../services/apiChuckNorris";

export const ChuckNorrisController = {
  async random(req, res) {
    await server_api
      .get("jokes/random") // rota para consumir qualquer informação aleatória
      .then((response) => {
        let { id, value } = response.data;
        return res.status(200).json({
          id,
          value,
          
        });
      })
      .catch((err) => {
        return res.status(400).json({ ERROR: err });
      });
  },

  async categories(req, res) {
    await server_api
      .get("jokes/categories") // rota para consumir informação por categoria
      .then((response) => {
        return res.status(200).json({ categorias: response.data });
      })
      .catch((err) => {
        return res.status(400).json({ ERROR: err });
      });
  },

  async search(req, res) {
    server_api
      .get(`jokes/search?query=${req.params.term}`) // rota para consumir qualquer informação pesquisada linkada a alguma categoria
      .then((response) => {
        if (response.data.length == 0) {
          return res.status(400).json({ ERRO: "Nao obteve nenhum resutado" });
        }
        return res.status(200).json(response.data);
      })
      .catch((err) => {
        return res.status(400).json({ ERROR: err });
      });
  },
  async category(req, res) {
    server_api
      .get(`jokes/random?category=${req.params.term}`) // rota para consumir qualquer informação aleatória linkada a alguma categoria
      .then((response) => {
        
        return res.status(200).json(response.data);
      })
      .catch((err) => {
        return res.status(400).json({ ERROR: err });
      });
  },
};
