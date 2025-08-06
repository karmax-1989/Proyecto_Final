<<<<<<< HEAD

function grafico_torta(){

    const ctx = document.getElementById('myChart')
    const titulos=['2017','2018','2019', '2020','2021']
    const valores=[0.005,0.012,0.13206,0.1908,0.31732163]
    const colores=['#59ff59ff','#f1c913ff','#34c217ff','#860a86ff','#1744d8ff']
    const bordes=['#686262ff']

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

// ----------------------------------------------------------------------
 

    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.


    function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Piña', 7],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
      ]);

      // Set chart options
      var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300
      };

      // Instantiate and draw our chart, passing in some options.

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
=======

function grafico_torta(){

    const ctx = document.getElementById('myChart')
    const titulos=['2017','2018','2019', '2020','2021']
    const valores=[0.005,0.012,0.13206,0.1908,0.31732163]
    const colores=['#59ff59ff','#f1c913ff','#34c217ff','#860a86ff','#1744d8ff']
    const bordes=['#686262ff']

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

// ----------------------------------------------------------------------
 

    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.


    function drawChart() {

      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Piña', 7],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
      ]);

      // Set chart options
      var options = {
        'title': 'How Much Pizza I Ate Last Night',
        'width': 400,
        'height': 300
      };

      // Instantiate and draw our chart, passing in some options.

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
>>>>>>> ea8aae8877caeddfd4da022ffdd43671b2dd0d5a
    }