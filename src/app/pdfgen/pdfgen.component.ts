import { Component, OnInit } from '@angular/core';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-pdfgen',
  templateUrl: './pdfgen.component.html',
  styleUrls: ['./pdfgen.component.css']
})
export class PdfgenComponent implements OnInit {

  filename: String;
  content: String;

  constructor(private pdfService: PdfService) { }

  ngOnInit() {
  }

  generatepdf() {
    const newTask = {
      filename: this.filename,
      content: this.content
    }

    this.pdfService.generatepdf(newTask).subscribe(task => {
      console.log(newTask.filename);
    });
  }

}
