import { Component} from '@angular/core';

interface Favorito {
  id: number;
  nombre: string;
}

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent{

  persona: Persona = 
  {
    nombre: 'Miguel',
    favoritos: [
      {id: 0, nombre:'Metal Gear'},
      {id: 1, nombre:'Death Stranding'},
    ]
  }

  nuevoJuego: string = '';

  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego = '';
  }
  
  guardar(){
    console.log('Guardado!');
  }

  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
}
