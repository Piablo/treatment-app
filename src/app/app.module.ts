import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';


//PrimeNG
import {AutoCompleteModule} from 'primeng/autocomplete';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ListboxModule} from 'primeng/listbox';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';

//Components
import { AppComponent } from './app.component';
import { ClientDetailAutocompleteComponent } from './components/client-detail/client-detail-autocomplete/client-detail-autocomplete.component';
import { ClientDetailNewComponent } from './components/client-detail/client-detail-new/client-detail-new.component';
import { ClientDetailContainerComponent } from './components/client-detail/client-detail-container/client-detail-container.component';
import { ProductContainerComponent } from './components/product/product-container/product-container.component';
import { ProductSearchComponent } from './components/product/product-search/product-search.component';
import { ProductNewComponent } from './components/product/product-new/product-new.component';
import { TreeviewComponent } from './components/nav-panel/treeview/treeview.component';
import { NavContainerComponent } from './components/nav-panel/nav-container/nav-container.component';
import { TreeviewNewTPComponent } from './components/nav-panel/treeview-new-tp/treeview-new-tp.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'add-patient', component: ClientDetailContainerComponent },
  { path: 'add-product', component: ProductContainerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ClientDetailAutocompleteComponent,
    ClientDetailNewComponent,
    ClientDetailContainerComponent,
    ProductContainerComponent,
    ProductSearchComponent,
    ProductNewComponent,
    TreeviewComponent,
    NavContainerComponent,
    TreeviewNewTPComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
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
    ScrollPanelModule,
    ListboxModule,
    TooltipModule,
    TreeModule,
    DialogModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
