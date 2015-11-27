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