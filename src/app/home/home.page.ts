import { Component, Input, OnInit } from '@angular/core';
import { AutheticationService } from '../services/authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public folderUrl : string = "Colores";
  public idioma : string = "Ingles";
  public audios : string[] = ['Rojo.mp3', 'Amarillo.mp3', 'Verde.mp3', 'Azul.mp3', 'Rosa.mp3'];
  public categorySrc = "./../../assets/Colores/1.png"
  public lenguageSrc = "./../../assets/Banderas/Ingles.png"

  public player : Howl | any;

  constructor(private auth : AutheticationService, private router : Router) {
  }

  ngOnInit(){
    console.log(this.auth.logGuard);
  }

  public OnLogoutClick()
  {
    this.auth.logOut().then(() => {
      this.router.navigate(['/login'])
    });
  }

  showOptions = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  public ChangeCategory(category : string, audios : string[])
  {
    this.folderUrl = category;
    this.audios = audios;
    const src : string = './../../assets/Idiomas/' + this.idioma + '/' + category + '.mp3';
    this.player = new Howl(
      {
        src: [src]
      }
    )
    this.categorySrc = './../../assets/' + category + '/1.png'
    this.player.play();
  }

  public ChangeLenguage(lenguage : string)
  {
    this.idioma = lenguage;
    const src : string = './../../assets/Idiomas/' + lenguage + '.mp3';
    this.player = new Howl(
      {
        src: [src]
      }
    )
    this.lenguageSrc = './../../assets/Banderas/' + lenguage + ".png"
    this.player.play();
  }

  public playAudioCategory(idioma : string, audio : string)
  {
    const src : string = './../../assets/Idiomas/' + idioma + '/' + audio;
    this.player = new Howl(
      {
        src: [src]
      }
    )
    this.player.play();
  }

}
