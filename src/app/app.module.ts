import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { TeampageComponent } from './components/teampage/teampage.component';
import { PetitionpageComponent } from './components/petitionpage/petitionpage.component';
import { LearnpageComponent } from './components/learnpage/learnpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ListpageComponent } from './components/listpage/listpage.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { EditlistComponent } from './components/editlist/editlist.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TeampageComponent,
    PetitionpageComponent,
    LearnpageComponent,
    LoginpageComponent,
    ListpageComponent,
    TopnavComponent,
    BottomnavComponent,
    ConfirmationComponent,
    EditlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
