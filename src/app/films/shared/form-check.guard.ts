import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class FormCheckGuard implements CanDeactivate<boolean> {

  private formComplete = true;

  canDeactivate(): boolean {
    if (this.formComplete) {
      return true;
    } else {
      return window.confirm('Est ce que tu es sur ?');
    }
  }

  setFormComplete(complete: boolean): void {
    this.formComplete = complete;
  }
}
