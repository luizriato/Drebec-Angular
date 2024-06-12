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

  openDialogSolar() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openDialogEolica() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog2);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openDialogBiomassa() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog3);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openDialogSolarBiomassa() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog4);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openDialogTodos() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog5);


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openDialogNenhum() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog6);


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

@Component({
  selector: 'dialog-content-example-dialog2',
  templateUrl: 'dialog-content-example-dialog2.html',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDialogModule],
})

export class DialogContentExampleDialog2 { }

@Component({
  selector: 'dialog-content-example-dialog3',
  templateUrl: 'dialog-content-example-dialog3.html',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDialogModule],
})
export class DialogContentExampleDialog3 { }

@Component({
  selector: 'dialog-content-example-dialog4',
  templateUrl: 'dialog-content-example-dialog4.html',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDialogModule],
})
export class DialogContentExampleDialog4 { }


@Component({
  selector: 'dialog-content-example-dialog5',
  templateUrl: 'dialog-content-example-dialog5.html',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDialogModule],
})
export class DialogContentExampleDialog5 { }

@Component({
  selector: 'dialog-content-example-dialog6',
  templateUrl: 'dialog-content-example-dialog6.html',
  standalone: true,
  imports: [MatDialogModule, MatCardModule, MatButtonModule, MatDialogModule],
})
export class DialogContentExampleDialog6 { }