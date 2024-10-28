import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabService } from './tab.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-practice';
  currentTab: string = 'Home';

  constructor(private tabService: TabService) {
    this.tabService.currentTab.subscribe(tab => this.currentTab = tab);
  }

  openTab(tab: string) {
    this.tabService.changeTab(tab);
  }
}