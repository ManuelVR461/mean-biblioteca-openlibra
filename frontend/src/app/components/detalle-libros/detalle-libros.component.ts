import { Component, OnInit } from '@angular/core';
import { DataApiService } from './../../services/data-api.service';
import { BookInterface } from './../../models/book.interface';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-libros',
  templateUrl: './detalle-libros.component.html',
  styleUrls: ['./detalle-libros.component.css']
})
export class DetalleLibrosComponent implements OnInit {
  id: string;
  private sub: any;

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  book: BookInterface = {
    titulo: '',
    idioma: '',
    descripcion : '',
    portada : '',
    precio : '',
    oferta : 0,
    link_amazon : '',
    autor : '',
    idbook : ''
  };

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params.id;
    });
    this.getDetalle(this.id);
  }

  getDetalle(id: string) {
    this.dataApi.getBookById(id).subscribe(book => (this.book = book));
  }

}
