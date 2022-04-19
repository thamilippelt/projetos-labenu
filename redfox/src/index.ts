import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { pokeRouter } from "./routes/pokemonRouter";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/pokemon", pokeRouter);

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });