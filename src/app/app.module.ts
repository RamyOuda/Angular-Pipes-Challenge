import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PowerPipe } from './pipes/power.pipe';
import { ShorthandPipe } from './pipes/shorthand.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PowerPipe, ShorthandPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
