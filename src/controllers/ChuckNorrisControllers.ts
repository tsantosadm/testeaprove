import { server_api } from "../services/apiChuckNorris";

export const ChuckNorrisController = {
  async random(req, res) {
    await server_api
      .get("jokes/random")
      .then((response) => {
        let { value } = response.data;
        return res.status(200).json({
          Frase: value,
        });
      })
      .catch((err) => {
        return res.status(400).json({ ERROR: err });
      });
  },

  async categories(req, res) {
    await server_api
      .get("jokes/categories")
      .then((response) => {
        return res.status(200).json({ categorias: response.data });
      })
      .catch((err) => {
        return res.status(400).json({ ERROR: err });
      });
  },

  async search(req, res) {
    server_api
      .get(`jokes/search?query=${req.params.term}`)
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
      .get(`jokes/random?category=${req.params.term}`)
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
};
