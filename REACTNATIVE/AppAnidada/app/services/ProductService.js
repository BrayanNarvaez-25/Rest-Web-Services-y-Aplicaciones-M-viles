let grades = [
    {subjet: "Matemáticas",grade:9.5},
    {subjet: "Física",grade:9.2}
];

//Funcion para obtener todos
export const getGrades = () =>{
    return grades;
}

//Funcion para guardar
export const saveGrade = (grade) =>{
    grades.push(grade);
    console.log("Arreglo",grades)
}

//Buscar un producto
const find = (subjet) =>{
    for(let i = 0;i < grades.length; i++){
        if(grades[i].subjet == subjet){
            return grades[i];
        }
    }
    return null;
}

//Actualizar producto
export const updateGrade = (nota) =>{
    let gradeRetrived = find(nota.subjet);
    if(gradeRetrived!=null){
        gradeRetrived.grade =nota.grade;
    }
    console.log(grades)
}
