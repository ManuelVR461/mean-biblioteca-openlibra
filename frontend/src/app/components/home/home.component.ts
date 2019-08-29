import { BookInterface } from './../../models/book.interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  books: BookInterface;
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    console.log('inicie home')
    this.getListBooks();
  }

  getListBooks() {
    console.log('llamo todos lo libros desde home')
    this.dataApi.getAllBooks()
      .subscribe((books: BookInterface) => (this.books = books));
  }

}
