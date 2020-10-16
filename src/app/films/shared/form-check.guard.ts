import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmExitComponent } from './confirm-exit/confirm-exit.component';

@Injectable()
export class FormCheckGuard implements CanDeactivate<boolean> {

  private formComplete = true;

  constructor(private dialog: MatDialog) { }

  canDeactivate(): Observable<boolean> {
    if (this.formComplete) {
      return of(true);
    } else {
      const dialogRef = this.dialog.open(ConfirmExitComponent);
      return dialogRef.afterClosed();
    }
  }

  setFormComplete(complete: boolean): void {
    this.formComplete = complete;
  }
}
