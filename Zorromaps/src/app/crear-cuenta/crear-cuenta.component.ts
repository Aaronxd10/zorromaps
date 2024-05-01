import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [CommonModule], // Aquí se importa CommonModule
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {
  mostrarTerminosCondiciones: boolean = false;
  constructor() { }


  mostrarTerminos(): void {
    this.mostrarTerminosCondiciones = !this.mostrarTerminosCondiciones;
  }
  toggleTerminos(): void {
    this.mostrarTerminosCondiciones = !this.mostrarTerminosCondiciones;
  }

  irALogin(): void {
    // Aquí puedes navegar al componente de inicio de sesión o a la ruta correspondiente
    console.log('Ir a la página de inicio de sesión');
  }
}
