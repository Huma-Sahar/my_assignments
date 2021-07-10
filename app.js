//CHAPTER 38--42

//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(){
// var a = 2;
// var b = 10;
// var c = Math.pow(b, a);
// alert(c);

// }
// power();
/////////////////////////////////////////////////////////////////////


//2. Any year is entered through the keyboard. Write a function to determine whether
// the year is a leap year or not.

// function leapYear(input) {
//     var year = input;
//     var answer;
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         answer = "yes";
//     } else {
//         answer = "no";
//     }
//     console.log(answer);
// }

// leapYear(2014);
/////////////////////////////////////////////////////////////////////////

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


// var triarea = function(a,b,c) {
// 	var s = (a+b+c)/2;
// 	var a = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//   return a;
// }
// document.write(triarea(2,2,2));

////////////////////////////////////////////////////////////////////////////

// 4. Write a function that receives marks received by a student in 3 subjects and returns the 
// average and percentage of thesemarks. there should be 3 functions one is the mainFunction and 
// other are for average and percentage. Call those functions from mainFunction and display result
//  in mainFunction.

// function marks(){
//     var math = 60;
//     var science = 78;
//     var islamiat = 90;

//     document.write('Math = '+ math+ '<br>'+ 'Science = '+science+ '<br>'+ 'islamiat = '+islamiat)
//     return math+science+islamiat
// }

// var a = marks()
// document.write('<br>'+'Total numbers = ' + a)

// function percentage(){
// var b = a*100/300
// return b

// }
// var c = percentage()
// document.write('<br>'+ 'Percentage = ' + c +'%')

//////////////////////////////////////////////////////////////////////////////////////

// 5. You have learned the function indexOf. Code your own custom function that will perform the 
// same functionality. You can code for single character as of now.

// function index(){
// var a = 'Pakistan is my beloved country' 
// var b = a .indexOf('is')
// return b

// }
// var c = index();
// document.write('the index of is  : '+c)

///////////////////////////////////////////////////////////////////////////////////////

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more
//  than 25 characters long.

// function vowels(){
//     var a = 'Pakistan is my beloved country' ;
//     return a.replace(/[aeiouAEIOU]/g, '' )

// }
// var c = vowels()

// document.write(c)

/////////////////////////////////////////////////////////////////////////////////////

// 7. Write a function with switch statement to count the number of occurrences of any two vowels in
//  succession in a line of text. For example, in the sentence



// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   document.write(findOccurrences());

//////////////////////////////////////////////////////////////////////////////////////

// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions 
// to convert and print this distance in meters, feet, inches and centimeters.


// function meters(distance){
//     var meter = 1000*distance;
//     document.write(meter +' meters <br>')
// }
//  meters(10);

// function feets(distance){
//     var feet = 3280.84*distance;
//     document.write(feet + ' feets <br>')
// }
// feets(10);

// function inches(distance){
//     var inch = 39370.1*distance;
//     document.write(inch +' inches  <br>')

// }
// inches(10);

// function centimeters(distance){
//     var a = 100000*distance
    
//     document.write(a+' centimeters  <br>')

// }
// centimeters(10);

////////////////////////////////////////////////////////////////////////////////////////

// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs.
//  12.00 per hour for every hour worked above 40 hours. Assume that employees do not work 
//  for fractional part of an hour.

// var overtime = 12.00 ;
// var hours = 40;

// while (overtime<= 40){
//     document.write( overtime)
    
// }
// overtime++




//////////////////////////////////////////////////////////////////////////////////////////

            //CHAPTER --43-48


  //  1. Show an alert box on click on a link.  
  
  // function greet(){
  //   alert('hello Huma');

  // }
  
/////////////////////////////////////////////////////////////////////////////////////////

// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.


















































































 
