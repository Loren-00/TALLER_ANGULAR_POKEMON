import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

//Creación del atributo para ser usado en el HTML/CSS
@Directive({
  selector: '[appResaltarPokemon2]',
  standalone: true
})

//Creación de la clase ResaltarPokemon
export class ResaltarPokemon2Directive {
  private el = inject(ElementRef);

  colorBorde =input<string>('#FFFF00');

//Uso de Hostliner para capturar eventos y señales dentro del DOM
  @HostListener('mouseenter') onMouseEnter(){
    this.aplicarEfecto(`3px solid ${this.colorBorde()}`,'scale(1)', 'none'); 
  }

  @HostListener('mouseleave') onMouseleave(){
    this.aplicarEfecto(`1px solid #e0e0e0e0`,'sacale(1.03)','0 8px 16px rgba(0,0,0,0.15)');
  }

    aplicarEfecto(borde: string, escala: string, sombra: string){
      const elemento = this.el.nativeElement;
      elemento.style.border = borde; 
      elemento.style.transform = escala; 
      elemento.style.boxShadow = sombra;
      elemento.style.transition = 'all 0.25s ease-in-out';
    }}
