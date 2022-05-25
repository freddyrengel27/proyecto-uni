import {jsPDF} from "jspdf";

const reducerPDF =  async (array) =>{

    const doc = jsPDF();
    let setMaterias = [];
    for (const mate of array) {
        let Yvalue = 180
        let prue = setMaterias.filter(mat => mat.codigo == mate.codigo)
        if(prue.length == 0){
            Yvalue = Yvalue + 5
        doc.setFontSize(11).text(mate.codigo, 17, Yvalue)
        doc.setFontSize(11).text(mate.materia, 47, Yvalue)
        doc.setFontSize(11).text(mate.horas, 77, Yvalue)
        return doc
        }
        return doc
    }
    
    
   
    // setMaterias.forEach((prof) =>{
    //     Yvalue = Yvalue + 5
    // doc.setFontSize(11).text(prof.codigo, 17, Yvalue)
    // doc.setFontSize(11).text(prof.materia, 47, Yvalue)
    // doc.setFontSize(11).text(prof.horas, 77, Yvalue)
    // return doc
    // })

    return doc
};

export default reducerPDF;