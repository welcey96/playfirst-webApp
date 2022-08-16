import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleSideBar } from 'src/app/state/sidebar.actions';
import { GenericType, Services } from 'src/data/services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  sideBarToggle$: Observable<boolean>;
  services: GenericType[];
  isCollapsedServicesBtn: boolean = false;
  
  constructor(private store: Store<{ sideBarToggle: boolean }>) {
    this.sideBarToggle$ = store.select('sideBarToggle');
  }

  ngOnInit() {
    this.services = Services;
  }

  closeSideNav() {
    this.store.dispatch(toggleSideBar());
  }

}
