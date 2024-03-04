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
    {nome:"Ryan", cognome:"Reynolds", numero:"000", età:"45", isOnline:true, colore:"yellow", immagine:"../../assets/ryan reynols.jpg"},
    {nome:"Dwayne", cognome:"Johnson", numero:"111", età:"49", isOnline:false, colore:"blue", immagine:"../../assets/Dwayne_Johnson_2014_(cropped).jpg"},
    {nome:"Leonardo", cognome:"Di Caprio", numero:"222", età:"47", isOnline:true, colore:"brown", immagine:"../../assets/LeonardoDiCaprio.jpg"},
    {nome:"Serena", cognome:"Williams", numero:"333", età:"40", isOnline:false, colore:"purple", immagine:"../../assets/Serena-Williams.jpg"},
    {nome:"Elon", cognome:"Musk", numero:"444", età:"50", isOnline:true, colore:"pink", immagine:"../../assets/Elon_Musk.jpg"},
    {nome:"Michelle", cognome:"Obama", numero:"555", età:"58", isOnline:false, colore:"lightblue", immagine:"../../assets/Michelle_Obama.jpg"},
    {nome:"Brad", cognome:"Pitt", numero:"666", età:"59", isOnline:true, colore:"orange", immagine:"../../assets/Brad_Pitt.jpg"},
    {nome:"Taylor", cognome:"Swifth", numero:"777", età:"33", isOnline:false, colore:"darkorange", immagine:"../../assets/Taylor_Swift.png"},
    {nome:"Emma", cognome:"Watson", numero:"888", età:"31", isOnline:true, colore:"lightpink", immagine:"../../assets/emma watson.jpg"},
    {nome:"Oprah", cognome:"Winfrey", numero:"999", età:"68", isOnline:false, colore:"green", immagine:"../../assets/oprah winfrey.jpg"},
  ]

}
