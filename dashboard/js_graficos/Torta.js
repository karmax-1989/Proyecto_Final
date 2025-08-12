
function grafico_torta(){

    const ctx = document.getElementById('myChart')
    const titulos=['2017','2018','2019', '2020','2021']
    const valores=[0.005,0.012,0.13206,0.1908,0.31732163]
    const colores=['#fc0505ff','#f1c913ff','#34c217ff','#860a86ff','#1744d8ff']
    const bordes=['#ffffffff']

    const mychart = new Chart(ctx,{
        type:'pie',
        data:{
            labels: titulos,//titulos de cada porcion
            datasets:[{
                label:'valores',// valores de cada porcion
                data: valores,
                backgroundColor:colores,// da color a las porciones
                borderColor:bordes,
            }],
            options:{
                responsive:'true',
                maintainAspectRatio:'false'
            }
            
        },
        
    })

}

grafico_torta()