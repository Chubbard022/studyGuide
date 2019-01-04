'use strict';

let teachers = [
    { name: 'Ken', comments: 'Amazing', rating: 4 },
    { name: 'James', comments: 'Astounding', rating: 3 },
    { name: 'Dave', comments: 'Astonishing', rating: 3 },
    { name: 'John', comments: 'Accelerating', rating: 2 },
    { name: 'Andrew', comments: 'Arm-chair-ing', rating: 3 },
    { name: 'Elizabeth', comments: 'Accepting', rating: 5 },
    { name: 'Nick', comments: 'Automating', rating: 6 },
    { name: 'Sarah', comments: 'Amplifying', rating: 7 },
    { name: 'Alena', comments: 'Appending', rating: 8 }
];

for( let teacher of teachers ) {
  console.log(teacher.name);
  if (teacher.name === 'Nick') {
    console.log(teacher.rating);
    break;
  }
};

Given that for...in is built for iterating object
 properties, not recommended for use with arrays,
 and options like Array.prototype.forEach() and
 for...of exist, what might be the use of for.

 for...of loops cannot iterate over objects



 ////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////
 'use strict';

let classroom = new Set();

let stevenJ = { name: 'steven',age: 22};
let sarah = { name: 'sarah',age: 23}

classroom.add(stevenJ);
classroom.add(srah);

if(classroom.has(stevenJ))
{
  console.log('sevenJ is in the classroom');
}

if (classroom.has(sarah))
  {
  console.log('sevenJ is in the classroom');
}

//create an array of students from the classroom set

let arrayOfStudents = Array.from(classroom);

//create a Set from an exsiting array

let alumni = new Set(arrayOfStudents);
console.log(alumni.size);


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


'use strict';

let classroom = new Map();

let stevenJ = { name: 'steven',age: 22};
let sarah = { name: 'sarah',age: 23}


classroom.set('stevenJ', stevenJ);
classroom.set('sarah', sarah);

console.log(classroom.size);

//see if a key exists

if(classroom.has(''stevenJ)){
 console.log('is in class');
}


//returning properties of something within a Map.
console.log(classroom.get('sarah'));

//clear method delets stuff and destroying its memory.
classroom.clear();

for( let student of students){
 console.log(`${student[0]}: ${student[1].age}`);
}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////



//use the class functionality when you are going to use the 'new' keyword to envoke        more code to be created with this outline...students in a classroom



class Student {
  constructor({name,age,interestLevel =5}) = {}) {
    this.name = .name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map();
  }
}

let joey = new Student({ name: 'Joey', age: 25 });
let sarah = new Student({ name: 'Sarah', age: 22 });

sarah.grades.set('History'. 'B');
sarah.grades.set('Math'. 'A');

//returning an array instanse[[],[]]
console.log(Array.from(sarah.grades));


console.log(joey);
console.log(sarah);
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////static methods/////////////////////

class Bird{

  static changeColor(bird,color){
    this.color = color;
  }
  constructor({color = 'red'} = {}){
    this.color = color;
  }
}
//how to change the value of a static class.
let redBird = new Bird;
Bird.changecolor.call(redbird,'blue');


///////////////////////////////////////////////////////////
//////////////////node.js/////////////////////////////////


// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//connect to the API URL (https://teamtreehouse.com/username.json)

//read the data

//parse the data

//print the data



//requiring the https url
const https = require('https');



function printMessage(userName,badgeCount,points){

  const message =`${userName} has ${badgeCount} total badges(s) and ${points} points in Javascript`;
  console.log(message);
}

function getProfile(username){


const request = https.get(`www.https://teamtreehouse.com/${username}.json`, response =>{
    console.dir(response.statusCode);

  let body = "";
    //the data part of this function will emit a start and ending to the data that is coming in
  response.on('data', data =>{
    body += data.toString();
  });
  response.on('end', () =>{
     //parse the data
     const profile = JSON.parse(body);
        printMessage(username, profile.badge.length);
     //console.log(body);
     //print the  type of data
     //console.log(typeof body);

   });
 });
}

const users  = ['chalkers','alenaholligan'];

users.forEach(username =>{
  getProfile(username);
});
getProfile("chalkers");
getProfile("alenahologan");


//////////\
const https = require('https');
let request = https.get('url',,reponse =>{
  console.log(response.statusCode);

});
request.on('error',error=>{});


/////////////////////////////////////
///////////////////http.STATUS_CODE///

http.STATUS_CODE[404] === 'Not Found';


/////////////////////////////////////////
/////////turnirary operator/////////////

<boolean expresson> ? <expression if true> : <expression if false>

let isTrue = true;

if(isTrue){
  console.log('Yes');
}else{
  console.log('no');
}

isTrue ? console.log('Yes') : console.log('No');

let yesOrNo = isTrue ? 'Yes' : 'No' ;

///////////////////////////////
////short circuit evaluation///

function isAdult(age){
  if(age && age >= 18){
    return true;
  }else {
    return false;
  }
}

function countToFive(start){
  //default paramater...es2015
  start = start || 1;
  for(let i= start; i <=5; i++){
    console.log(i);
  }
}
////////////////////////////////
/////////////servers and node////

command C twice will kill the server or command line ps -aux and then find the specific task that is still running and type kill ___
//create a local servers

let http = require('http');
http.createServer(function(require,response){
response.writeHead(200,{'Content-Type':'Text/plain'});
  setInterval(function(){
    response.write(new Date() + '\n');
  },1000);
  response.end('Hello World');
}).listen(3000);
console.log('Server is running at http// IP address here');
