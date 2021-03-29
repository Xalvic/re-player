import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-listvideos',
  templateUrl: './listvideos.component.html',
  styleUrls: ['./listvideos.component.scss']
})
export class ListvideosComponent implements OnInit {

  videoList = [];

  constructor(
    private _list: ListService 
  ) { }

  ngOnInit(): void {

    this._list.listCards().subscribe(
      (data) => {
        this.videoList = data;
      }
    )

  }

}
