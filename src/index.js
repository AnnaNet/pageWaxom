import $ from 'jquery';
import 'bootstrap';

console.log ('Hello!');

let numMax = 5;
console.log ("numMax = " + numMax);

//$('.score').val(function() {
  for (let i=0; i<=numMax; i++) {
    console.log (i);
    //return i++;
  }
/*});*/

$('.score').text('55');

