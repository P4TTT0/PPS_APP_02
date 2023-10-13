import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  
  public logGuard : boolean = true;

  constructor(public ngFireAuth : AngularFireAuth) { }

  public async logIn(email : string, password : string)
  {
    this.logGuard = false;
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  public async logOut()
  {
    this.logGuard = true;
    return await this.ngFireAuth.signOut();
  }

  public async getProfile()
  {
    return await this.ngFireAuth.currentUser;
  }
}
