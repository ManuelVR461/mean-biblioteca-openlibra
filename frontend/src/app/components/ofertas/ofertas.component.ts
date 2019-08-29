import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from './../../models/book.interface';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {
  books: BookInterface;

  constructor(private dataApi:DataApiService) { }

  ngOnInit() {
    this.dataApi.getOfertas()
      .subscribe((data: BookInterface) => (this.books = data));
  }

}
