import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExpenseEntryComponent} from './expense-entry/expense-entry.component';
import {ExpenseEntryListComponent} from './expense-entry-list/expense-entry-list.component';
import {PlayingAroundComponent} from './plaiying-around/playing-around.component';
import {StreamingContentComponent} from './streaming-content/streaming-content';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    PlayingAroundComponent,
    StreamingContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
