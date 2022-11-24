import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService } from './../../services/collaborator.service';
import { Collaborator } from './../../models/collaborator';
import { NotificationService } from './../../services/notification.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.css']
})
export class EditCollaboratorComponent implements OnInit {

  public collaborator!: Collaborator;
  public isLoadUpload: boolean = false;

  constructor(
    private notification: NotificationService,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private route: ActivatedRoute,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.initializeFields();
  }

  private initializeFields(): void {
    const id = this.route.snapshot.params["id"];
    this.collaboratorService.findById(id).subscribe(collaborator => {
      this.collaborator = collaborator;
    })
  }

  public updateCollaborator(form: NgForm): void {
    if(form.valid) {
      this.collaboratorService.updateCollaborator(this.collaborator).subscribe(response => {
        this.notification.showMenssage("Atualizado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMenssage("Dados inválidos.");
    }
  }

  public uploadFile(event: any):void {
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
    this.uploadService.uploadFoto(file).subscribe(uploadResult =>{
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.collaborator.fotoUrl = fotoUrl;
      })
    });    
  }
}
