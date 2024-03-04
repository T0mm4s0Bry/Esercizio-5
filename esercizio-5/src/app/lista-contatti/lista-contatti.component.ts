import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  contatti=[
    {nome:"ryan", cognome:"raynols", numero:"000", età:"38", isOnline:true, colore:"yellow", immagine:""},
    {nome:"dwayne", cognome:"johnson", numero:"111", età:"51", isOnline:false, colore:"blue", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"222", età:"38", isOnline:true, colore:"brown", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"333", età:"38", isOnline:false, colore:"purple", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"444", età:"38", isOnline:true, colore:"pink", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"555", età:"38", isOnline:false, colore:"lightblue", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"666", età:"38", isOnline:true, colore:"orange", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"777", età:"38", isOnline:false, colore:"darkorange", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"888", età:"38", isOnline:true, colore:"lightpink", immagine:""},
    {nome:"ryan", cognome:"raynols", numero:"999", età:"38", isOnline:false, colore:"green", immagine:""},
  ]

}
