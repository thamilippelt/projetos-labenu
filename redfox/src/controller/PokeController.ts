import { Request, Response } from "express";
import { PokeBusiness } from "../business/PokeBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { PokeDatabase } from "../data/PokeDatabase";




export class PokeController {
    constructor(
        private pokeBusiness: PokeBusiness,
    ) {

    }
    allPoke = async (req: Request, res: Response) => {
        const poke = "" as string
        try {
        
            const result = await this.pokeBusiness.getAllPoke(poke);


                res.send({result})
        } catch (error) {

            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Erro ao coletar pokemon" })
            }
        }

        await BaseDatabase.destroyConnection();
    }


    pokeById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const result = await this.pokeBusiness.getPokeById(id as string)

            res.status(200).send({ result })
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).send(error.message);
            } else {
                res.send({ message: "Erro ao coletar pokemon" })
            }
        }
        await BaseDatabase.destroyConnection();
    }
    

}