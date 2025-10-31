const students = [
  {
    rollNo: 1,
    name: "Arya",
    dept: "CS",
    marks: [
      { subject: "Maths", score: 78 },
      { subject: "Science", score: 82 },
      { subject: "English", score: 75 },
    ],
  },
  {
    rollNo: 2,
    name: "Vikram",
    dept: "IT",
    marks: [
      { subject: "Maths", score: 92 },
      { subject: "Science", score: 87 },
      { subject: "English", score: 90 },
    ],
  },
  {
    rollNo: 3,
    name: "Meera",
    dept: "EC",
    marks: [
      { subject: "Maths", score: 65 },
      { subject: "Science", score: 70 },
      { subject: "English", score: 68 },
    ],
  },
  {
    rollNo: 4,
    name: "Kiran",
    dept: "CS",
    marks: [
      { subject: "Maths", score: 95 },
      { subject: "Science", score: 90 },
      { subject: "English", score: 93 },
    ],
  },
  {
    rollNo: 5,
    name: "Nisha",
    dept: "IT",
    marks: [
      { subject: "Maths", score: 85 },
      { subject: "Science", score: 78 },
      { subject: "English", score: 88 },
    ],
  },
];
// Print the total number of students.
// console.log(students.length)

// Print all student names from the IT department.
students.forEach((each) => {
    if(each.dept == "IT"){
        // console.log(each.name)
    }
})

// Print the total marks of each student.


students.forEach((each) => {
    let totalMark = each.marks.reduce((acc,curr) => acc + curr['score'],0)
    // console.log(each.name,":",totalMark)
})

// Print the average marks of each student.
students.forEach((each) => {
    let totalMark = each.marks.reduce((acc,curr) => acc + curr['score'],0)
    // console.log(each.name,":",(totalMark/each.marks.length))
})

// Find the student with the highest Science mark.
let hsmark = 0
let stdName = ""
students.forEach((each) => {
    each.marks.forEach((eachStudent) => {
        if(eachStudent.subject == "Science" && eachStudent.score > hsmark){
            stdName = each.name
            hsmark = eachStudent.score
        }
    })
})
// console.log(stdName,hsmark)

// Print students who scored above 80 in English.
students.forEach((each) => {
    each.marks.forEach((eachMark) => {
        if(eachMark.subject == "English" && eachMark.score > 80){
            // console.log(each.name)
        }
    })
})

// Find the department with the highest total marks (sum of all its students).
let obj = {}
let highDep = ""
let highMark = 0
students.forEach((each) => {
    let totalmark = each.marks.reduce((acc,curr) => acc+curr['score'],0)
    if(obj[each.dept]){
        obj[each.dept] += totalmark
    }else{
        obj[each.dept] = totalmark
    }
   for(let dept in obj){
    if(obj[dept] > highMark){
        highMark = obj[dept]
        highDep = dept
    }
   }
})
// console.log(obj)
// console.log(highDep,highMark)

// Find the student with the lowest Maths mark.
students.forEach((each) => {
    let mathsMark = each.marks.map((eachMark) => eachMark.subject == "Maths")
    console.log(mathsMark)

})


// Print the name and subject where rollNo 3 scored the highest.

// Print the overall class average (all marks of all students combined).