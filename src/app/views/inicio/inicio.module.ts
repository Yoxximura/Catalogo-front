import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [InicioComponent],
  imports: [SharedModule, InicioRoutingModule]
})
export class InicioModule {}
