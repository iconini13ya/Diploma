import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, MainComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
