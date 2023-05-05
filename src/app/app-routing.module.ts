import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './components/homepage/homepage.component';
import { TeampageComponent } from './components/teampage/teampage.component';
import { PetitionpageComponent } from './components/petitionpage/petitionpage.component';
import { LearnpageComponent } from './components/learnpage/learnpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ListpageComponent } from './components/listpage/listpage.component';
// import { TopnavComponent } from './components/topnav/topnav.component';
// import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { EditlistComponent } from './components/editlist/editlist.component';

const routes: Routes = [
  { path: '', component:  HomepageComponent},
  { path: 'team', component:  TeampageComponent},
  { path: 'petition', component:  PetitionpageComponent},
  { path: 'learn', component:  LearnpageComponent},
  { path: 'list', component:  ListpageComponent},
  { path: 'login', component:  LoginpageComponent},
  { path: 'confirmation', component:  ConfirmationComponent},
  { path: 'edit-list/:id', component: EditlistComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
