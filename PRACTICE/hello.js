console.log("Hey!");
/*when we want to run the program on terminal then write node filename.js or without js also its fine because node only run js files
Since we dont want to write that whole node filename so what we do in package.json inside script below test write something like "start(instead of start we can write else also)":"node filename.js"
and now when we want to run file on terminal then just write npm start it is very useful when we have multiple file in projects
*/
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,5));
/*here it was just one function but when its a big project then we are suppose to divide our file into modules
so what we can do is like we can put all mathematical functions in one file and other functions in different file
therefore here we will make a file with name math.js which will have this function an we can call our function from that file
to this*/
 const math=require("./math");//this is used to import that function from other file also in that file you need to export also if instead of./math we have just given math then it would consider it built in module so we use ./
  //console.log(math(2,5)); when we have just one function then write like this
 
 console.log(math.sub(2,5));
 console.log(math.addfun(2,5));
/*OR*/
/*const {add,sub}=require("./math");
console.log(sub(2,5));
console.log(add(2,5));
we can also do it like this but then in the other file while exporting we can't give name to function like here we have give addfun*/

console.log(math.mult(2,5));//to run this first comment all other functions
 