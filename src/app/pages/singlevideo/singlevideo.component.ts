import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.component.html',
  styleUrls: ['./singlevideo.component.scss']
})
export class SinglevideoComponent implements OnInit {
  screenHeight: number;
  screenWidth: any;

  theHeight = '360px';

  video_id;
  theVideoHeight;
  videoList = [];

  currentVideo;

  like = null;

  constructor(
    private route: ActivatedRoute,
    private _list: ListService,
    public newSelector: ElementRef,
  ) { 
    this.video_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if(window.innerWidth <= 520) {
      this.theVideoHeight = window.innerHeight / 3;
      this.theHeight = `${this.theVideoHeight}px`;
    }
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this._list.listCards().subscribe(
      (data) => {
        this.currentVideo = data.find(itm => itm.video_id == this.video_id);
        this.videoList = data.filter(x => x != this.currentVideo)
      }
    )
  }

  ngAfterViewInit() {
    this.scrollTo();
  }

  clickLike() {
    if(this.like == null || this.like == 'dislike') {
      this.like = 'like';
    } else {
      this.like = null;
    }
  }
  clickDislike() {
    if(this.like == null || this.like == 'like') {
      this.like = 'dislike';
    } else {
      this.like = null;
    }
  }

  scrollTo() {
    this.newSelector.nativeElement
            .querySelector('#video-tag')
            .scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
