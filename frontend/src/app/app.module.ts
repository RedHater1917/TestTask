import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { CreditArrangementComponent } from './components/credit-arrangement/credit-arrangement.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { ClientEditComponent } from './components/edit/client-edit/client-edit.component';
import { CreditEditComponent } from './components/edit/credit-edit/credit-edit.component';
import { BankEditComponent } from './components/edit/bank-edit/bank-edit.component';
import { CreditOfferEditComponent } from './components/edit/credit-offer-edit/credit-offer-edit.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { BankBrowseComponent } from './components/browse/bank-browse/bank-browse.component';
import { ClientBrowseComponent } from './components/browse/client-browse/client-browse.component';
import { CreditBrowseComponent } from './components/browse/credit-browse/credit-browse.component';
import { CreditOfferBrowseComponent } from './components/browse/credit-offer-browse/credit-offer-browse.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreditArrangementComponent,
    AdminComponent,
    ClientEditComponent,
    CreditEditComponent,
    BankEditComponent,
    CreditOfferEditComponent,
    DeleteDialogComponent,
    ClientBrowseComponent,
    CreditBrowseComponent,
    CreditOfferBrowseComponent,
    BankBrowseComponent,
    CreditArrangementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
  entryComponents: [
    ClientEditComponent,
    CreditEditComponent,
    CreditOfferEditComponent,
    BankEditComponent,
    DeleteDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
