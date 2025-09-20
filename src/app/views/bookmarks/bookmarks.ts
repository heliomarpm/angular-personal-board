import { Component, OnInit } from '@angular/core';
import { Bookmark, BookmarkModel } from './components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  imports: [Bookmark, RouterLink, ],
  templateUrl: './bookmarks.html',
  styleUrl: './bookmarks.scss'
})
export class Bookmarks implements OnInit {
  bookmarks: BookmarkModel[] = [];

  ngOnInit(): void {
    this.bookmarks = [{
      id: '1',
      title: 'Google',
      url: 'https://google.com.br',
      logo: ''
    },
    {
      id: '2',
      title: 'Personal Github',
      url: 'https://github.com/heliomarpm',
      logo: ''
    },
    {
      id: '3',
      title: 'Youtube',
      url: 'https://www.youtube.com',
      logo: ''
    }
    ];
  }
}
