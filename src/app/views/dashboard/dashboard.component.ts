import { CollaboratorService } from './../../services/collaborator.service';
import { Collaborator } from './../../models/collaborator';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/components/details/details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [];

  constructor(
    private collaboratorService: CollaboratorService,
    private notification: NotificationService,
    private dialogue: MatDialog
    ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.collaboratorService.findAll().subscribe(collaborators => {
      this.dataSource = collaborators;
    });
  }

  public deleteCollaborator(id: string): void {
    this.collaboratorService.deleteCollaborator(id).subscribe(response => {
      this.notification.showMenssage("Colaborador Apagado.");
      this.initializeTable();
    })
  }

  public openDetails(collaborator: Collaborator): void {
    this.dialogue.open(DetailsComponent, {
      width: "400px",
      data: collaborator
    })
  }
}