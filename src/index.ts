let inputOk:boolean = true;

while (inputOk === true) {
  let nombre: string = String(prompt("Ingrese Nombre de Alumno"));
  
  if (nombre !== "" && nombre !== "null") {
    let notaPractica: number = Number(prompt("Ingrese nota Practica de " + nombre));
    let notaProblemas: number = Number(prompt("Ingrese nota Problemas de " + nombre));
    let notaTeoria: number = Number(prompt("Ingrese nota Teoria de " + nombre));
    
    if (notaPractica >= 0 && notaPractica <= 10 && notaPractica != null ){
      if (notaProblemas >= 0 && notaProblemas <= 10 && notaProblemas != null) {
        if (notaTeoria >= 0 && notaTeoria <= 10 && notaTeoria != null){
          console.log("Alumno " + nombre + ", nota final: " + (notaPractica * 0.1 + notaProblemas * 0.5 + notaTeoria * 0.4));
        };
      };
    } else {
      console.log("Error con alumno " + nombre + ", se continua con siguiente alumno");
    };  
      
  } else {
      /* break; */
      inputOk=false;
    };
  
};