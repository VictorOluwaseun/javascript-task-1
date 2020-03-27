//Store your name in a variable
const myName = "Adewumi Victor";
//Store your courses in an array
const myCourses = ["Node js", "php", "Javascript", "HTML", "CSS"];

//Display name and courses
console.log(myName);
console.log(myCourses);

//My courses' length
const myCoursesLength = myCourses.length;

//The logic: display odd numbers btw 1 and 200(inclusive) if courses' length is odd and otherwise if even
for (let i = 0; i <= 200; i++) {
  if (myCoursesLength % 2 === 0) {
    i % 2 === 0 && console.log(i);
  } else {
    i % 2 !== 0 && console.log(i);
  }
}