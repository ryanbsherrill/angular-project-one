import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EiaApiDataComponent } from './eia-api-data/eia-api-data.component';
import { EiaApiDataService } from './eia-api-data/eia-api-data.service';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';

@NgModule({
  // declarations: [AppComponent, EiaApiDataComponent, ServerComponent, ServersComponent],
  declarations: [AppComponent, EiaApiDataComponent],
  imports: [BrowserModule,FormsModule, HttpClientModule],
  providers: [EiaApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
