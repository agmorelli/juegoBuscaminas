import {BuscaMinas} from './busca-minas';

export class Juego {

    public Jugador:string;
    public BuscaMinas:BuscaMinas;
    public nivel=6;

    public constructor(jugador:string)
    {
        this.Jugador=jugador;
        this.BuscaMinas=new BuscaMinas(this.nivel);
        
    }


    


}
