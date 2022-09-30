import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UnoComponent } from './components/uno/uno.component'

const routes: Routes = [
    {
        path:'',
        redirectTo: 'get-character',
        pathMatch: 'full'
    },
    {
        path: 'get-character',
        component: UnoComponent
    },
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UnoRoutingModule {}