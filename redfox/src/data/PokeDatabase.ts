import { Pokemon } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";


export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "pokemons";

  public async getAllPoke(): Promise<Pokemon | any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(PokeDatabase.TABLE_NAME)
        .orderBy("name")

      return result
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }

  public selectPokeById = async (id: string): Promise<Pokemon | any> => {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(PokeDatabase.TABLE_NAME)
        .where({ id })
      return result[0]

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }
}
function orderBy(arg0: string) {
  throw new Error("Function not implemented.");
}

