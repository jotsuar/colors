import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';



export const ColorsRoutes: Routes = [
    { path: '', component: ListComponent },
    { path: '**', component: ListComponent },
];
