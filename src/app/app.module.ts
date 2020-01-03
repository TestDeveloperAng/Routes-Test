import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Router,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { ServiceService } from './shared/service.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';

const appRoutes = [
  {path : '', component : HomeComponent},
  {path : 'servers', component : ServersComponent},
  {path : 'servers/:id/edit', component : EditServerComponent},
  {path : 'users', component : UsersComponent},
  {path : 'users/:id/:name', component : UserComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ServersComponent, UsersComponent, EditServerComponent, ServerComponent, UserComponent ],
  bootstrap:   [ AppComponent ],
  providers: [ServiceService]
})
export class AppModule { }
