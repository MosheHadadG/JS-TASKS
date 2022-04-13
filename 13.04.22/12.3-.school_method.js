const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1
const findPerson = function (school, studentOrTeacher, id) {
  studentOrTeacher = studentOrTeacher.toLowerCase();
  if (studentOrTeacher === "student") {
    const findStudent = school.students.find(function(student){
      return student.id === id
    });
    return findStudent;
 }
 else if ((studentOrTeacher === "teacher")) {
  const findTeacher = school.teachers.find(function(teacher){
    return teacher.id === id;
 })
 return findTeacher;
}
}
// Find Student
console.log(findPerson(school, "student", 12));
// Find Teacher
console.log(findPerson(school, "teacher", 2));

// 2
const assignStudent = function(school, id, subject) {
  const teacherWithSubject = school.teachers.find(function(teacher){
    return teacher.subjects.includes(subject);
  });
  if(teacherWithSubject.capacityLeft === 0) {
    console.log("Sorry, no available teachers left");
  }
  else {
    teacherWithSubject.students.push(id);
    teacherWithSubject.capacityLeft -= 1;
  }
  return teacherWithSubject;
}

// Add student id to biology subject with Pinchas
console.log(assignStudent(school, 12, "biology"));
// Add student id to ethics subject with Williams
console.log(assignStudent(school, 10, "ethics"));