// 1. Diamond Pattern

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// let n=5;
// let pattern="";

// for (let i=1; i<=n; i++){
//     for(let j=1;j<=n-i;j++){
//         pattern+=" ";
//     }
//     for (let k=1; k<=2*i-1; k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// for (let i=n-1; i>=1; i--){
//     for(let j=1; j<=n-i; j++){
//         pattern+=" ";
//     }
//     for (let k=1; k<=2*i-1; k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 2. Hollow Diamond Pattern

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// let n=5;
// let pattern="";
// for(let i=1; i<=n; i++){
//     for (let j=1; j<=n-i; j++){
//         pattern+=" ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         if (k===1 || k===2*i-1){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
//     }
//     pattern+="\n";
// }
// for(let i=n-1; i>=1; i--){
//     for (let j=1; j<=n-i; j++){
//         pattern+=" ";
//     }
//     for(let k=1; k<=2*i-1; k++){
//         if (k===1 || k===2*i-1){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 3. Hourglass Pattern

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  *******
// *********

// let n=5;
// let pattern="";
// for (let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         pattern+=" ";
//     }
//     for(let k=0; k<2*(n-i)-1;k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// for (let i=n-2;i>=0;i--){
//     for(let j=0;j<i;j++){
//         pattern+=" ";
//     }
//     for(let k=0; k<2*(n-i)-1;k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);

// 4. Hollow Square Pattern

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// let n=5;
// let pattern="";
// for (let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         if(i===0 || i===n-1 || j===0 || j===n-1){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
//         pattern+=" ";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 5. Pyramid Pattern
//     *
//    ***
//   *****
//  *******
// *********

// let n=5;
// let pattern="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         pattern+=" ";
//     }
//     for(let k=1; k<=2*i-1;k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 6. Hollow Pyramid Pattern
//     *
//    * *
//   *   *
//  *     *
// *********

// let n=5;
// let pattern="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         if(k===1 || k===2*i-1 || i===n){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }    }
//     pattern+="\n";
// }
// console.log(pattern);


// 7. Inverted Pyramid Pattern

// *********
//  *******
//   *****
//    ***
//     *

// let n=5;
// let pattern="";
// for(let i=n;i>=1;i--){
//     for(let j=1;j<=n-i;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 8. Right Triangle Pattern
// *
// **
// ***
// ****
// *****

// let n=5;
// let pattern="";
// for(let i=0;i<=n;i++){
//     for(let j=0;j<=i;j++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 9. Hollow Right Triangle Pattern
// *
// **
// * *
// *  *
// *****

// let n=5;
// let pattern="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         if(j===1 || j===i || i===n){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 10. Left Triangle Pattern
//     *
//    **
//   ***
//  ****
// *****

// let n=5;
// let pattern="";
// for (let i=1;i<=n;i++){
//     for (let j=1;j<=n-i;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         pattern+="*";
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// 11. Hollow Left Triangle Pattern
// For n = 5:

//     *
//    **
//   * *
//  *  *
// *****

// let n=5;
// let pattern="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         if(k===1 || k===i || i===n){
//             pattern+="*";
//         }
//         else{
//             pattern+=" ";
//         }
//     }
//     pattern+="\n";
// }
// console.log(pattern);