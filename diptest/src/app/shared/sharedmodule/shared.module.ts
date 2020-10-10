import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
