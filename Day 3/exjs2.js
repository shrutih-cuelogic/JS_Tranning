function student(name, sclass, rollno)
{ 
this.name = name; 
this.sclass = sclass ;
this.rollno  = rollno;
} 
studentv1 = new student("John", "V", 10);

student.prototype.display = function() {
    console.log("The name of the student is " + this.name + ", Class : " + this.sclass + " Roll No.: " + this.rollno);
};

studentv2 = new student("David Rayy", "VI", 12);

student.prototype.printName = function(){
  console.log("Student name is " + this.name)
};
studentv3 = new student(studentv1.name)
studentv4 = new student(studentv2.name);
studentv3.printName();
studentv4.printName();