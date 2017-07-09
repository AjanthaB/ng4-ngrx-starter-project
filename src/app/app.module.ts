import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from '../store/reducers';

import { AppComponent } from './app.component';

// effects
import { UserEffects } from '../store/user/user.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.provideStore(reducer),
    EffectsModule.run(UserEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension({ // configure store dev tools
      maxAge: 20 // number of actions
    }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
