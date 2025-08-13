function grafico_Linea(){

    const ctx = document.getElementById('myChart4')

    const labelst=['Solar', 'Eólica', 'Geotérmica']

    const titulos=year()

    /*valores que se le da a cada linea */
    const valoresSolar=[0, 0, 0, 0, 0, 0.005, 0.012, 0.132, 0.191, 0.317]
    const valoresEolica=[0.055, 0.058, 0.070, 0.068, 0.051, 0.003, 0.043, 0.063, 0.010, 0.051]
    const valoreshidrica=[1.476, 1.346, 1.729, 1.823, 1.994, 1.991, 2.119, 2.444, 2.821, 2.821]

    /*asigna color a cada punto de la linea */
    const coloresSolar='#34c217ff'
    const coloesEolica='#8e7f7f'
    const coloresHidrica='#4000ff'

    /*dibuja la linea de cada valor */
    const bordesSolar='#34c217ff'
    const bordesEolica='#8e7f7f'
    const bordesHidrica='#4000ff'

    const mychart = new Chart(ctx,{
        type:'line',
        data:{
            labels: titulos,//titulos de cada porcion
            datasets:[{
                label: labelst[0],// valores de cada porcion
                data: valoresSolar,
                backgroundColor:coloresSolar,// da color a las porciones
                borderColor: bordesSolar,
                borderWidth:1.5
            },
            {
                label: labelst[1],// valores de cada porcion
                data: valoresEolica,
                backgroundColor:coloesEolica,// da color a las porciones
                borderColor: bordesEolica,
                borderWidth:1.5
    
            },
            {
                label: labelst[2],// valores de cada porcion
                data: valoreshidrica,
                backgroundColor:coloresHidrica,// da color a las porciones
                borderColor: bordesHidrica,
                borderWidth:1.5
    
            }]
        },
        
        options:{
            responsive:'true',
            maintainAspectRatio:'false'
        }
    })

}

function year(){

    const limite=2021

    let arr = []

    for (let i =2012;i <= limite ;i++) {

        arr.push(i)
        
    }

    return arr


}

grafico_Linea()