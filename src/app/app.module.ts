import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { FilterWishComponent } from './filter-wish/filter-wish.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    FilterWishComponent,
    WishListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
