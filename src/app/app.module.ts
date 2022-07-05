import { NgModule } from '@angular/core'; //importing NgModule from @angular/core
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//if new component is created, it willbe imported first and reference will be included in declarations
import { AppRoutingModule } from './app-routing.module'; //we enabled routing this this module is imported
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({ //this is decorator
  declarations: [ //it is an array of components created.
    AppComponent,
    HeaderComponent, 
    FooterComponent,
    
  ],
  imports: [ //it is an array of modules required to be used in the application.
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //this will inculde the services created.
  bootstrap: [AppComponent]//include the main app component for starting the execution.
})                          //this component runs first.
export class AppModule { }
