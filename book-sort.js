books = ['Crime and Punishment', 'War and Peace', 'The Grapes of Wrath', 'Fahrenheit 911', 'I, Robot', 'Something Wicked This Way Comes', 'The Brothers Karamozov', 'Julius Caesar', '1984', 'The Catcher in the Rye', 'Slaughterhouse-Five', 'Snow Crash', 'Stranger in a Strange Land', "Ender's Game", 'Animal Farm', 'House of Leaves']
const mergeSort = require('./merge');

function bookSort(books){
  mergeSort(books);
}

if(require.main === module){
  bookSort(books);
  console.log(books);
}