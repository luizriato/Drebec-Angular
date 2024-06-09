import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.scss'
})


export class SimuladorComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }


}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDialogModule],
})
export class DialogContentExampleDialog { }
