"use strict";

function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [];
  }
  this.marks.push(mark);
}
Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
    this.marks = [];
  }
  for (let mark of marks){
    this.marks.push(mark);
  }
}

Student.prototype.getAverage = function () {
  let reducer = (accumulator, curr) => accumulator + curr;
  return this.marks.reduce(reducer) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  if (this.subject){
    delete this.subject;
  }
  if (this.marks){
    delete this.marks;
  }
  this.excluded = reason;
}