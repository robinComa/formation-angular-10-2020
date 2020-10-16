import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ConfirmExitComponent } from './confirm-exit.component';

describe('ConfirmExitComponent', () => {
  let component: ConfirmExitComponent;
  let fixture: ComponentFixture<ConfirmExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmExitComponent ],
      imports: [MaterialModule, TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
