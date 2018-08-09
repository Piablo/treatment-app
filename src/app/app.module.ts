import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//PrimeNG
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ScrollPanelModule} from 'primeng/scrollpanel';

//Components
import { AppComponent } from './app.component';
import { ClientDetailAutocompleteComponent } from './components/client-detail/client-detail-autocomplete/client-detail-autocomplete.component';
import { ClientDetailNewComponent } from './components/client-detail/client-detail-new/client-detail-new.component';
import { ClientDetailContainerComponent } from './components/client-detail/client-detail-container/client-detail-container.component';
import { ProductContainerComponent } from './components/product/product-container/product-container.component';
import { ProductSearchComponent } from './components/product/product-search/product-search.component';
import { ProductNewComponent } from './components/product/product-new/product-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailAutocompleteComponent,
    ClientDetailNewComponent,
    ClientDetailContainerComponent,
    ProductContainerComponent,
    ProductSearchComponent,
    ProductNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PanelModule,
    FormsModule,
    HttpModule,
    AutoCompleteModule,
    CardModule,
    ToolbarModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
