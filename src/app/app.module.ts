import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileCardModule } from './components/profile-card/profile-card.module';
import { TableModule } from './components/table/table.module';
import { LinkModule } from './components/link/link.module';
import { PaginationModule } from './components/pagination/pagination.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileCardModule,
    TableModule,
    LinkModule,
    PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
