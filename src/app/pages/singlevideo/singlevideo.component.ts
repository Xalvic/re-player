import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.component.html',
  styleUrls: ['./singlevideo.component.scss']
})
export class SinglevideoComponent implements OnInit {

  video_id;

  videoList = [];

  currentVideo;

  constructor(
    private route: ActivatedRoute,
    private _list: ListService,
  ) { 
    this.video_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    
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

}
