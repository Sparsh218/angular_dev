import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServersComponent } from './components/servers/servers.component';
import { UsersComponent } from './components/users/users.component';
import { ServerComponent } from './components/server/server.component';
import { UserComponent } from './components/user/user.component';
import { EditServerComponent } from './componente/edit-server/edit-server.component';
import { PageNotFoundComponent } from './componente/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { ServiceResolver } from './resolver/service.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: ServerComponent , resolve: {server: ServiceResolver}},
      { path: ':id/edit', component: EditServerComponent , canDeactivate: [AuthGuard]},
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
    canActivateChild: [AuthGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { message: 'Please try valid Url' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
