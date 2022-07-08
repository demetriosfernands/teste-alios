import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { EtapasAdmissaoComponent } from './etapas-admissao/etapas-admissao.component';
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CartaoContainerComponent } from './cartao-container/cartao-container.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    BarraSuperiorComponent,
    EtapasAdmissaoComponent,
    CartaoContainerComponent
  ],
  exports: [
    MenuLateralComponent,
    BarraSuperiorComponent,
    EtapasAdmissaoComponent,
    CartaoContainerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule
  ]
})
export class ComponentsModule { }
