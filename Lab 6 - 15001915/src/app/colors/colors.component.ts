import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule;

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss',
})
export class ColorsComponent {
  rojo = 255;
  azul = 255;
  verde = 255;
  colors: string[] = [];

  rgbToHex(r: number, g: number, b: number) {
    // Convierte cada componente RGB a hexadecimal y los concatena
    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');

    // Devuelve el valor hexadecimal concatenado
    return '#' + hexR + hexG + hexB;
  }

  addColor() {
    const toHex = this.rgbToHex(this.rojo, this.verde, this.azul);
    this.colors.push(toHex);
  }
}
