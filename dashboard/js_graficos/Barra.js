
function grafico_barra(){

    //  donde se va a representar nuestro grafico
    const ctx = document.getElementById('myChart3');

   // inico de nuestro grafico
  new Chart(ctx, {
    type: 'bar',
    // toda la informacion para representar el grafico
    data: {
        // titulos de cada barra
      labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
      datasets: [{

        label: 'Consumo de energía solar por año',
        // los datos segun los titulos establecidos
        data: [0, 0.005, 0.012, 0.0132, 0.191, 0.317],
        borderWidth: 3,
        backgroundColor:['#d41515ff','#1900fcff','#ffea04ff','#32f800ff', ' #6f10ebff','#eba610ff'],
        borderColor: ['#ffffffff'],
      }]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

}


grafico_barra() /* inicialización del js una vez se cargue la pagina html*/

