import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {NavigationComponent} from './home/navigation/navigation.component';
import {SidebarComponent} from './home/sidebar/sidebar.component';
import {ContentComponent} from './home/content/content.component';
import {FilterComponent} from './home/filter/filter.component';
import {ChartsComponent} from './home/content/charts/charts.component';
import {TableComponent} from './home/content/table/table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LineChartComponent } from './home/content/charts/line-chart/line-chart.component';
import { PieChartComponent } from './home/content/charts/pie-chart/pie-chart.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SidebarComponent,
    ContentComponent,
    FilterComponent,
    ChartsComponent,
    TableComponent,
    LineChartComponent,
    PieChartComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName: 'csrftoken', headerName: 'X-CSRFToken'}),
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
