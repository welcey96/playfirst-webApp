import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { isMaintenance } from '../common/config';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private router: Router, private meta: Meta) { }

  ngOnInit() {
    if (isMaintenance) this.router.navigate(['/maintenance']);
  }

}
