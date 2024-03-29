import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PowerPipe } from '../pipes/power.pipe';
import { ShorthandPipe } from '../pipes/shorthand.pipe';
import { UsdToEurPipe } from '../pipes/usd-to-eur.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, PowerPipe, ShorthandPipe, UsdToEurPipe],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
