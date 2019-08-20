/* 
    Canvas myChart1
*/
var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: "Courbe d'évolution",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
/* 
    Canvas myChart2
*/
var ctx1 = document.getElementById('myChart2').getContext('2d');
var myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Nombre De Votes Par Couleur',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function teste() {
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:5000/listeProduits"

        });
    });
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            url: "http://127.0.0.1:5000/listeProduits",
            success: function (listeProduits) {
                alert('vva');
                $.each(listeProduits, function (index, produit) {
                    alert('vva');
                    //$("#classes").append("<option id='id_classe' value=" + classe.id + ">" + classe.libelle + "</option>");
                    /*Méthode 2
                    var selection = document.getElementById("classes");
                    selection.options[selection.options.length] = new Option(classe.libelle, classe.id);
                    */
                });
            }
        });
    });
}

