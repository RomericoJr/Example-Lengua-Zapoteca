import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { PrototipoComponent } from './components/prototipo/prototipo.component';
import { DiagramaSistemaComponent } from './components/diagrama-sistema/diagrama-sistema.component';
import { AdminComponent } from './components/crud/admin/admin.component';
import { UserComponent } from './components/crud/user/user.component';
import { AddEditComponent } from './components/crud/admin/components/add-edit/add-edit.component';
import { ReadComponent } from './components/crud/admin/components/read/read.component';
import { DeleteComponent } from './components/crud/admin/components/delete/delete.component';

const crudRoutes: Routes= [
  {
    path: 'agregar',
    component:AddEditComponent
  },
  {
    path: 'editar/:id',
    component:AddEditComponent
  },
  {
    path: 'leer',
    component: ReadComponent
  },
  {
    path: 'eliminar',
    component: DeleteComponent
  },
  {
    path: '**',
    redirectTo: 'leer'
  }
]


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'integrantes',
    component: IntegrantesComponent
  },
  {
    path: 'prototipo',
    component: PrototipoComponent
  },
  {
    path: 'diagrama',
    component: DiagramaSistemaComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: crudRoutes
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
