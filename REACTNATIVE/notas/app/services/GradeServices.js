let grades = [
    {subjet: "Matemáticas",grade:9.5},
    {subjet: "Física",grade:9.2}
];

export const saveGrade = (grade) =>{
    grades.push(grade);
    console.log("Arreglo",grades)
}

export const getGrades = () =>{
    return grades;
}

export const updateGrade = (nota) =>{
    let gradeRetrived = find(nota.subjet);
    if(gradeRetrived!=null){
        gradeRetrived.grade =nota.grade;
    }
    console.log(grades)
}

const find = (subjet) =>{
    for(let i = 0;i < grades.length; i++){
        if(grades[i].subjet == subjet){
            return grades[i];
        }
    }
    return null;
}