
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { ViewAreaComponent } from './view-area/view-area.component';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ScrollListComponent,
    ViewAreaComponent,
    FeaturesComponent,
    DocsComponent,
    ResourcesComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    // HttpClientInMemoryWebApiModule 모듈은 HTTP 요청을 가로채고 서버의 응답을 흉내냅니다.
    // 실제 서버가 준비되면 이 부분을 제거하면 됩니다.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
