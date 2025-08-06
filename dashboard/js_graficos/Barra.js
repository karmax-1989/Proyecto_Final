<<<<<<< HEAD

function grafico_barra(){

    //  donde se va a representar nuestro grafico
    const ctx = document.getElementById('myChart3');

   // inico de nuestro grafico
  new Chart(ctx, {
    type: 'bar',
    // toda la informacion para representar el grafico
    data: {
        // titulos de cada barra
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{

        label: '# of Votes',
        // los datos segun los titulos establecidos
        data: [12, 5, 3, 5, 2, 3],
        borderWidth: 3,
        backgroundColor:['#d41515ff','#1900fcff','#ffea04ff','#32f800ff', ' #6f10ebff','#eba610ff'],
        borderColor: ['#000000ff'],
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

=======

function grafico_barra(){

    //  donde se va a representar nuestro grafico
    const ctx = document.getElementById('myChart3');

   // inico de nuestro grafico
  new Chart(ctx, {
    type: 'bar',
    // toda la informacion para representar el grafico
    data: {
        // titulos de cada barra
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{

        label: '# of Votes',
        // los datos segun los titulos establecidos
        data: [12, 5, 3, 5, 2, 3],
        borderWidth: 3,
        backgroundColor:['#d41515ff','#1900fcff','#ffea04ff','#32f800ff', ' #6f10ebff','#eba610ff'],
        borderColor: ['#000000ff'],
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

>>>>>>> ea8aae8877caeddfd4da022ffdd43671b2dd0d5a
