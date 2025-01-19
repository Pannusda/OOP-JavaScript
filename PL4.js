class Student{
    constructor(name){
        this.name=name;
        this.grades=[];
    }
    addGrade(grade){
        if(grade<0 || grade>100){
            console.log('Score must be between 0-100') 
        }else{
        this.grades.push(grade)
    }
}
    getAverageGrade(){
        if(this.grades.length==0){
            return 0
        }else{
            let total=0;
            this.grades.forEach(gradesForEach => {
            total+=gradesForEach;
        })
            return total/(this.grades.length)
        }      
        }
    }

class Gradebook{
    students=[]
    addStudent(student){
        this.students.push(student)
}
    getStudent(name){
        let find_std
        this.students.find(findStudent=>{
            if (findStudent.name===name){
                find_std = findStudent
            } 
        })
        return find_std
    }
  
    listStudents(){
        this.students.forEach(studentsForEach=>{          
            console.log('Student: ',studentsForEach.name,', Average Grade: ',
            studentsForEach.getAverageGrade()
            )
        })
    }
}
let gradebook = new Gradebook()
let student1 = new Student('Toey')
let student2 = new Student('Peem')
student1.addGrade(89)
student1.addGrade(87)
student1.addGrade(600)
student1.addGrade(90)
student2.addGrade(96)
student2.addGrade(99)
student2.addGrade(99)
student2.addGrade(96)
gradebook.addStudent(student1)
gradebook.addStudent(student2)
gradebook.listStudents()
const std = gradebook.getStudent('Toey')
console.log(std.getAverageGrade())

