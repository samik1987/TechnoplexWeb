import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CoursesComponent } from './views/courses/courses.component';
import { AboutComponent } from './views/about/about.component';
import { BlogComponent } from './views/blog/blog.component';
import { ContactComponent } from './views/contact/contact.component';
import { DotNetComponent } from './views/dot-net/dot-net.component';
import { MvcComponent } from './views/mvc/mvc.component';
import { DotNetCoreComponent } from './views/dot-net-core/dot-net-core.component';
import { AngularComponent } from './views/angular/angular.component';
import { UIComponent } from './views/ui/ui.component';
import { DbComponent } from './views/db/db.component';
import { MsOfficeComponent } from './views/ms-office/ms-office.component';
import { AdvanceExcelComponent } from './views/advance-excel/advance-excel.component';
import { DigitalMarketingComponent } from './views/digital-marketing/digital-marketing.component';




const routes: Routes = [
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"courses", component:CoursesComponent,
      children: [
        {path:"dot-net", component:DotNetComponent},
        {path:"dot-net-core", component:DotNetCoreComponent},
        {path:"mvc", component:MvcComponent},
        {path:"angular", component: AngularComponent},
        {path:"UI", component: UIComponent},
        {path:"data-base", component: DbComponent},
        {path:"MsOffice", component: MsOfficeComponent},
        {path:"advance-excel", component: AdvanceExcelComponent},
        {path:"digital-marketing", component: DigitalMarketingComponent}

      ]
    },
    {path:"blog", component:BlogComponent},
    {path:"contact", component:ContactComponent},
    {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutingComponent = [
  HomeComponent,
  CoursesComponent,
  AboutComponent,
  BlogComponent,
  ContactComponent,
  DotNetComponent,
  MvcComponent,
  DotNetCoreComponent,
  AngularComponent,
  UIComponent,
  DbComponent,
  MsOfficeComponent,
  AdvanceExcelComponent,
  DigitalMarketingComponent,
]
