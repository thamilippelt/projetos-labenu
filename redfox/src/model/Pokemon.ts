export class Pokemon {
    constructor(
        private id: number,
        private name: string,
        private pokedex_number: number,
        private generation: number,
        private evolution_stage: number,
        private type: string,
        private atack: number,
        private defense: number
        
    ){}

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name
    }

    public getPokedexNumber(): number {
        return this.pokedex_number
    }

    public getGeneration() {
        return this.generation
    }
  
    public getEvolutionStage() {
       return this.evolution_stage 
    }

    public getType() {
        return this.type
    }

     public getAttack() {
        return this.atack
    }

     public getDefense() {
        return this.defense 
    }

}