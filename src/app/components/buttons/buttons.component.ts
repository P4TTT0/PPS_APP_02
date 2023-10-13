import { Component, OnInit, Input } from '@angular/core';
import { Howl } from 'howler'

export interface Track{
  name : string;
  path : string;
}
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent  implements OnInit {

  @Input() folderUrl : string = 'Colores';
  @Input() idioma : string = 'Ingles';
  @Input() audios : string[] = [];


  playlist : Track[] = [
    {
      name: 'Audio1',
      path: './../../assets/Idiomas/Ingles/Uno.mp3'
    },
    {
      name: 'Audio2',
      path: './../../assets/Idiomas/Ingles/Dos.mp3'
    },
  ]
  public player : Howl | any;


  constructor() {}

  ngOnInit() {
  }

  public playAudio(idioma : string, audio : string)
  {
    const src : string = './../../assets/Idiomas/' + idioma + '/' + audio;
    this.player = new Howl(
      {
        src: [src]
      }
    )
    this.player.play();
    console.log(src);
  }
}
