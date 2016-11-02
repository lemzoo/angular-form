import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
=======
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
>>>>>>> b7d9a63551e0ca10858d3b367dd79e2aef07bf28
