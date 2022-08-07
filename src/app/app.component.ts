import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './common/config';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(this.app);
  title = 'pf-app';

}
