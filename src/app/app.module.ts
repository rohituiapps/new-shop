import { CategoryService } from './category.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsnavbarComponent } from './bsnavbar/bsnavbar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminItemsComponent } from './admin/admin-items/admin-items.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { ItemFormComponent } from './admin/item-form/item-form.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    BsnavbarComponent,
    HomeComponent,
    ItemsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminItemsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'my/items', component: ItemsComponent },
        { path: 'shopping-cart', component: ShoppingCartComponent },
        { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
        { path: 'order-success', component: OrderSuccessComponent },
        { path: 'login', component: LoginComponent },
        { path: 'admin/items/new', component: ItemFormComponent },
        { path: 'admin/items/:id', component: ItemFormComponent },
        { path: 'admin/admin-items', component: AdminItemsComponent },
        { path: 'admin/admin-orders', component: AdminOrdersComponent }
      ]
    )
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
