// 1. Greeting Program: Write a program that takes a user's 
// firstName and lastName as input and displays a greeting message in the 
// format: "Hello [firstName] [lastName]!".

// let firstName = prompt("enter firstName");
// let lastName = prompt("enter lastName");
// console.log(`Hello ${firstName} ${lastName}`);


// 2. Even or Odd Checker: Create a program that prompts the
//  user to input a number and checks whether the number is even or odd. 
//  The output should clearly state if the number is even or odd.

// let num = prompt(parseInt("enter a number"));
// if(num%2===0){
//     console.log(num,"is a even no.");
// }
// else{
//     console.log(num,"is not a even no.");
// }


// 3. Find the Largest Number: Write a program that accepts 
// three numbers as input and determines which one is the largest. 
// Display the largest number with a message.

// let num1 = prompt("enter a num1");
// let num2 = prompt("enter a num2");
// let num3 = prompt("enter a num3");
// if (num1>num2){
//     if(num1>num3){
//         console.log(num1,"is a largest no.");
//     }
//     else{
//         console.log(num3,"is a largest no.");
//     }
// }
// else {
//     if (num2>num3){
//         console.log(num2,"is a largest no.");
//     }
//     else{
//         console.log(num3,"is a largest no.");
//     }
// }


// 4. Reverse a String: Create a program that takes a string as 
// input and returns the reverse of that string. For example, 
// if the input is "JavaScript", the output should be "tpircSavaJ".

// let input = prompt("enter a input");
// let reverseInput = input.split("").reverse().join("");
// console.log(reverseInput);


// 5. Array Sum Calculator: Write a program that takes an array of numbers and 
// calculates the sum of all its elements. Display the total sum as output.

// let array = [1,2,3,4,5];
// sum = 0;
// for (let i=0;i<array.length;i++){
//     sum+=array[i];
// }
// console.log(sum);


// 6. DOM Manipulation - Button Click: Add a button to an HTML page, 
// and write JavaScript code that changes the background color of 
// the page to blue when the button is clicked.

// function changecol(){
//     document.body.style.backgroundColor = "blue";
// }


// 7. Prime Number Checker: Create a function that checks whether a given 
// number is a prime number or not. If the number is prime, the program should return
//  a message saying so; otherwise, it should indicate that the number is not prime.

// let num = prompt("enter a num");
// c=0;
// for (let i=1;i<=num;i++){
//     if(num%i==0){
//         c+=1;
//     }
// }
// if (c===2){
//     console.log(num,"so,its prime no.");
// }
// else{
//     console.log(num,"its not prime no.");
// }


// 8. Factorial Calculator: Write a program that calculates the factorial of a given number.
//  For instance, if the input is 5, the program should output 120.

// let num = prompt("enter a no.");
// let mul=1;
// for (i=1;i<=num;i++){
//     mul*=i;
// }
// console.log(mul);


// 9. Vowel Counter: Write a program that takes a string as input and counts
//  the total number of vowels in it. Display the vowel count along with the input string.

// let name = prompt("entera name");
// let c=0;
// for(let i=0;i<name.length;i++){
//     if (name[i]==="a" || name[i]==="e" || name[i]==="i" || name[i]==="o" || name[i]==="u"){
//         c+=1;
//     }
// }
// console.log(c);


// 10. Guess the Number Game: Develop a program that generates a random number between 1 and 10
//  and prompts the user to guess it. If the user's guess matches the random number, display a success message; otherwise, ask the user to try again.

// let randomnum = Math.floor(Math.random() * 10);
// console.log(randomnum)
// let guess = prompt(parseInt("enter your guess"));

// if (randomnum == guess){
//     console.log("success");
// }
// else{
//     console.log("not sucsess");
// }


// 11. Remove duplicate elements from an array. For example, [1, 2, 2, 3, 4, 4] becomes [1, 2, 3, 4].  

// const array =[1,2,3,4,2,5,1];
// const newarray = [...new Set(array)];
// console.log(newarray);

// const array = [1,2,3,4,2,3,5,4];
// const uniquearray = [];
// for (let i=0; i<array.length; i++){
//     if(!uniquearray.includes(array[i])){
//         uniquearray.push(array[i]);
//     }
// }
// console.log(uniquearray);


// 12. Find the second largest number in an array.  

// const array = [1,2,6,7,8,3];
// max=array[0];
// smax=array[1];
// for (let i = 0 ;i < array.length; i++){
//     if (array[i]>max){
//         smax = max;
//         max = array[i];
//     }
// }
// console.log(smax);


// 13. Sort an array in ascending order without using built-in methods.  

// const array = [1,2,7,8,9,4,3];
// for(let i =0; i<array.length-1;i++){
//     for(let j=0; j<array.length-i-1; j++){
//         if(array[j]>array[j+1]){
//             let temp = array[j];
//             array[j]=array[j+1];
//             array[j+1]=temp
//         }
//     }
// }
// console.log(array);


// 14. Merge two sorted arrays into one sorted array.  

// let arr1 = [1,2,6,7,4,9,10];
// let arr2 = [3,4,2,1,5];
// arr1.sort((a,b)=>a-b);
// arr2.sort((a,b)=>a-b);
// let mergearr = [];
// let i=0;
// let j=0;
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         mergearr.push(arr1[i]);
//         i++;
//     }
//     else{
//         mergearr.push(arr2[j]);
//         j++;

//     }
// }
// while(i<arr1.length){
//     mergearr.push(arr1[i]);
//     i++;
// }
// while(j<arr2.length){
//     mergearr.push(arr2[j]);
//     j++;
// }
// console.log(mergearr)


// 15. Find the missing number in an array containing numbers from 1 to N

// let array = [1,2,3,5];
// let N=5;
// let expectedSum = ((N*(N+1))/2);
// let actualSum = 0;
// for(let i=0 ;i<array.length; i++){
//     actualSum += array[i];
// }
// let res = expectedSum - actualSum;
// console.log(res);


// Basic Problems:
//1. Write a program to swap two numbers without using a temporary variable.

// let a = 10;
// let b = 15;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

// 2. Check if a given year is a leap year.  

// let year = 2020;
// if((year%4==0 && year%100!=0) || (year%400==0)){
//     console.log(`yes ${year} is a leap year`);
// }
// else{
//     console.log(`no, ${year} it's not leap year`);
// }

// 3. Find the greatest of three numbers.  

// let a=5;
// let b=10;
// let c=20;
// let greatest;
// if (a>b && a>c){
//     greatest = a;
// }
// else if(b>c){
//     greatest = b;
// }
// else{
//     greatest = c;
// }
// console.log(greatest);


// 4. Write a program to convert Celsius to Fahrenheit and vice versa.  
//celcius to Fahrenheit
// let c = 25;
// let Fahrenheit = (c * 9/5) + 32;
// console.log(`${Fahrenheit} F`)

// Fahrenheit to celcius
// let f = 77;
// let celcius = ((f-32)*5/9);
// console.log(`${celcius} C`)

//5. Calculate the GCD (Greatest Common Divisor) of two numbers using the Euclidean algorithm.
// let a = 56;
// let b = 98;
// while(b!=0){
//     let temp = b ;
//     b = a%b;
//     a = temp;
// }
// console.log(a);


// Intermediate Problems:
// 6. Write a program to count the frequency of each character in a string.  

// let str = "hlo madhu";
// let countFreq = {};
// for (let i=0;i<str.length;i++){
//     char = str[i];
//     if(countFreq[char]!=undefined){
//         countFreq[char]+=1;
//     }
//     else{
//         countFreq[char]=1;

//     }
// }
// for (let char in countFreq){
//     console.log(`character ${char}, frequency ${countFreq[char]}`);
// }


// 7. Implement a program to remove all spaces from a string.  
// let str = "hlo madhu";
// let noSpaces = str.replace(/\s+/g, ''); 
// console.log(noSpaces);

// let str = "hlo madhu";
// let result = "";
// for (let i = 0; i<str.length; i++){
//     if(str[i]!=" "){
//         result+=str[i];
//     }
// }
// console.log(result);


// 8. Reverse the digits of a number (e.g., 1234 becomes 4321).  
// let num = 123;
// let reverse = 0;
// while(num>0){
//     let digit = num%10;
//     reverse = reverse*10+digit;
//     num=Math.floor(num/10);
// }
// console.log(reverse);

// 9. Find all prime numbers between two given numbers. 



// 10. Calculate the power of a number using recursion.
