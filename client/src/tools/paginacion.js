export const totalPaginas = (datos) =>{
    return Math.ceil(datos.length / 4)
};

export const getDataPagina = (nuPagina, datos) =>{
    let ini = nuPagina * 4 - 4
    let fin = nuPagina * 4

    return datos.slice(ini, fin)
};
