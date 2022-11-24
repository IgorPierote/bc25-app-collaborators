import { EmptyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NotificationService } from './notification.service';
import { from, EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private storage: AngularFireStorage,
    private notification: NotificationService
    ) { }

  public uploadFoto(photo: File): Observable<any> {
    const promise = this.storage.upload(`fotos/${File.name}`, photo);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMenssage("Erro ao fazer upload")
        console.error(error);
        return EMPTY;
      })
    )
  }
}
