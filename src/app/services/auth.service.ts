import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireBaseAuth: AngularFireAuth) { }

  public authenticateByGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    const promise = this.fireBaseAuth.signInWithPopup(provider);
    return from(promise); // converte a promise em um observable
  }
}
