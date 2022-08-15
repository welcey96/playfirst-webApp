import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { VIEWPORT_BREAKPOINTS } from '@common/constants';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardMainComponent implements OnInit {

  @ViewChild('s3Carousel') s3Carousel: ElementRef;
  carouselItems: SlideItems[];
  serviceItems: SlideItems[];
  s3ItemsPerSlide: number;
  mobileBreakPoints = VIEWPORT_BREAKPOINTS;

  constructor() {}

  ngOnInit() {
    this.s3ItemsPerSlide = window.innerWidth > this.mobileBreakPoints.SM_MAX ? 4 : window.innerWidth > this.mobileBreakPoints.XS_MAX ? 3 : 2;
    this.carouselItems = [
      {
        src: '/assets/images/4600.png',
        title: "We maximize the potential of children with special needs.",
        lead: "In partnership with parents and therapists, we provide the highest quality therapy services in an environment that is compassionate, respectful, and supportive to our clients and their families, enabling each child to reach his/her full potential."
      },
      {
        src: '/assets/images/9600.png',
        title: "Who we are",
        lead: "PlayFirst Therapy Center for Kids and Adults, provides highly specialized OCCUPATIONAL, PHYSICAL, and SPEECH therapy services for people of all ages. PLAYGROUP classes are also open for enrollment and handled by licensed Occupational Therapists"
      },
      {
        src: '/assets/images/7600.png',
        title: "WE ARE ACTIVELY HIRING!",
        lead: "We are in need of Occupational Therapists, Speech Therapists and SPED Teachers for our growing clinics in Consolacion and Talisay, if interested, you may send your resume to playfirst.therapy@gmail.com or message us on our Facebook account."
      }
    ];

    this.serviceItems = [
      {
        src: '/assets/images/4600.png',
        title: "Occupational Therapy",
        lead: ""
      },
      {
        src: '/assets/images/1600.png',
        title: "Speech Therapy",
        lead: ""
      },
      {
        src: '/assets/images/7600.png',
        title: "Physical Therapy",
        lead: ""
      },
      {
        src: '/assets/images/9600.png',
        title: "SPED",
        lead: ""
      },
      {
        src: '/assets/images/8600.png',
        title: "Playgroup",
        lead: ""
      },
      {
        src: '/assets/images/5600.png',
        title: "Teletherapy",
        lead: ""
      }
    ]
  }

  trackByIndex(index: number): number {
    return index;
  }
}

interface SlideItems {
  src: string;
  title: string
  lead: string;
}
