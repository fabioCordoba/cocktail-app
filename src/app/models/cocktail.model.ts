import { ICocktail } from "../interfaces/icocktail";
import { set, get } from 'lodash-es';

export class Cocktail implements ICocktail{
    
    constructor(data:any) {
        set(this, 'data', data)
    }

    get id(): string {
        return get(this, 'data.idDrink');
    }

    get name(): string {
        return get(this, 'data.strDrink');
    }

    get img(): string {
        return get(this, 'data.strDrinkThumb');
    }

    get glass(): string {
        return get(this, 'data.strGlass');
    }


    get ingredients(): string[] {
        return this.getList('data.strIngredient');
    }

    get numIngredients(): number {
        return this.ingredients.length;
    }

    get instructions(): string {
        return get(this, 'data.strInstructionsES') ? get(this, 'data.strInstructionsES') : get(this, 'data.strInstructions');
    }

    get measures(): string[] {
        return this.getList('data.strMeasure');
    }

    get numMeasures(): number {
        return this.measures.length;
    }

    /**
    * Obtiene la lista de la ruta indicada
    * No hay un array como tal y cuando se encuentra una posicion vacia, nosotros no continuamos mirando
    * @param path ruta del objeto buscado
    */
    private getList(path: string): string[] {
        let index = 1;
        let element = get(this, path + index);
        let list = [];

        while (element) {
            list.push(element);
            index++;
            element = get(this, path + index);
        }

        return list;
    }
}
