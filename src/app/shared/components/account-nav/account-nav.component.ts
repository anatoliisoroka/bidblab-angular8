import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../shared/components/menu/menu.service';

@Component({
  selector: 'app-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.scss'],
  providers: [ MenuService ],
})
export class AccountNavComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  public menuItems:Array<any>;

  constructor(
    private router: Router,
    public menuService:MenuService,
  ) { }

  ngOnInit() {
    this.menuItems = this.menuService.getVerticalMenuItems();
  }

}

