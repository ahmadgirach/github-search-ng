import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card.component';
import { LinkModule } from '../link/link.module';



@NgModule({
  declarations: [
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    LinkModule
  ],
  exports: [
    ProfileCardComponent
  ]
})
export class ProfileCardModule { }
