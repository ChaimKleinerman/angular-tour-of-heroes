import { Component } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroDetailComponent,DashboardComponent,MessagesComponent, RouterModule, HttpClientModule,], 
  standalone: true,
})
export class AppComponent {
  title = 'Tour of Heroes';
}
