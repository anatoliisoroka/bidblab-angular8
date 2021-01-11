import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { MenuService } from '../shared/components/menu/menu.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public menuItems:Array<any>;
  constructor(
    private media: ObservableMedia,
    private router: Router,
    public menuService:MenuService,
  ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
  }
  
  isMediaActive(breakpoint) {
    return this.media.isActive(breakpoint);
  }

}
