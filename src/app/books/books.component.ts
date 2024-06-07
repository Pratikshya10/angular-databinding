import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  book1 ="Wings of fire";
  book2 = "Monk who sold his ferrari"
  book3 = "To kill a Mocking Bird";;
  book4 = "The Perfect Murder";
  book5 = "The Da Vinci Code"; 
  src1 = "https://upload.wikimedia.org/wikipedia/en/3/3a/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg";
  src2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0Bx0e9mh1T1QrAGE67rxgWqNjaSBWYpNZQ&s";
  src3 = "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg";
  src4 = "https://m.media-amazon.com/images/I/71DW5Hrc41L._AC_UF1000,1000_QL80_.jpg";
  src5 = "https://m.media-amazon.com/images/I/815WORuYMML._AC_UF1000,1000_QL80_.jpg";
}
