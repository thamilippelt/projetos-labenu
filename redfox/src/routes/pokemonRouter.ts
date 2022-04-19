import express from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { PokeController } from "../controller/PokeController";
import { PokeDatabase } from "../data/PokeDatabase";

const pokeController = new PokeController(
    new PokeBusiness(
        new PokeDatabase()
    )
);

export const pokeRouter = express.Router();


pokeRouter.get("/all-poke", pokeController.allPoke);
pokeRouter.get("/:id", pokeController.pokeById);
