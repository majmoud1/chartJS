/* 
Fonction permettant de tracer la courbe d'évolution des ventes de smartphones pendant l'année
*/
function smartphone() {
    var ctx = document.getElementById('diagrammeSmartphone').getContext('2d');
    var mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
        'Novembre', 'Decembre'];
    var smartphones = [1500, 2000, 1220, 3600, 1452, 1300, 450, 5000, 5500, 6000, 6500, 7000];
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: mois,
            datasets: [{
                label: "Courbe de Vente de Smartphones Pendant l'année",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: smartphones
            }]
        },

        // Configuration options go here
        options: {}
    });
}

/* 
Fonction permettant de tracer le nombre de produits vendus (diagramme circulaire)
*/
function nombreProduitsVendus() {
    var data = {
        datasets: [{
            data: [41522, 30060, 26302, 263500, 8669, 20660, 610, 416, 8069, 17100, 12250],
            backgroundColor: ['#AFFF33', '#FA1927', '#19C7FA', '#0E4FD3', '#9E9194', '#1ADBA6', '#B7D2DF', '#06E81E', '#D1FA2A', '#D31D1D', '#FC03C7']
        }],
        labels: [
            'Smartphones',
            'Informatiques',
            'Electromenagers',
            'Supermarche',
            'Parfums',
            'Televisions',
            'Climatiseurs',
            'Refrigerateurs',
            'Produits Bebe',
            'Mode Femme',
            'Mode Homme'
        ]
    };
    var ctx = document.getElementById('diagrammeCirculaire').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: data
    });
}
/* 
Fonction permettant de tracer les courbes d'évolution des produits homme et femme
*/
function modeHommeFemme() {
    var ctx = document.getElementById('evolutionModeHommeFemme').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre',
                    'Octobre', 'Novembre', 'Decembre'],
            datasets: [{
                label: "Courde D'évolution des Produits Femme",
                //backgroundColor: 'rgb(0, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                data: [1000, 1500, 1200, 3000, 800, 600, 1500, 1400, 1450, 1500, 1550, 1600]
            },
            {
                label: "Courde D'évolution des Produits Homme",
                //backgroundColor: 'rgb(0, 99, 0)',
                borderColor: 'rgb(0, 99, 0)',
                data: [2000, 1000, 1300, 2540, 700, 780, 1000, 1100, 780, 460, 140, 450]
            }
            ]
        },
    });

}
/* 
Fonction permettant de tracer le diagramme en barre de tous les produits pour chaque mois
*/
function diagremmeBarre(){
    var ctx = document.getElementById('diagremmeBarreParMois').getContext('2d');
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre',
                    'Octobre', 'Novembre', 'Decembre'],
            datasets: [{
                label: "Smartphones",
                backgroundColor: '#AFFF33',
                borderColor: 'rgb(0, 99, 132)',
                data: [1500, 2000, 1220, 3600, 1452, 1300, 450, 5000, 5500, 6000, 6500, 7000]
            },
            {
                label: "Informatiques",
                backgroundColor: '#FA1927',
                borderColor: 'rgb(0, 99, 132)',
                data: [2000, 260, 1700, 4200, 2100, 1900, 900, 3000, 3200, 3400, 3600, 3800]
            },
            {
                label: "Electromenagers",
                backgroundColor: 'rgb(0, 99, 132)',
                borderColor: 'rgb(0, 99, 132)',
                data: [500, 1400, 789, 1500, 750, 740, 623, 3500, 3750, 4000, 4250, 4500]
            },
            {
                label: "Supermarche",
                backgroundColor: '#19C7FA',
                borderColor: 'rgb(0, 99, 132)',
                data: [15000, 21000, 14000, 25000, 18000, 18500, 17000, 21000, 24000, 27000, 30000, 33000]
            },
            {
                label: "Parfums",
                backgroundColor: '#0E4FD3',
                borderColor: 'rgb(0, 99, 132)',
                data: [800, 750, 812, 1000, 650, 712, 645, 900, 780, 660, 540, 420]
            },
            {
                label: "Televisions",
                backgroundColor: '#9E9194',
                borderColor: 'rgb(0, 99, 132)',
                data: [500, 400, 100, 2000, 500, 660, 2000, 1500, 2200, 2900, 3600, 4300]
            },
            {
                label: "Climatiseurs",
                backgroundColor: '#1ADBA6',
                borderColor: 'rgb(0, 99, 132)',
                data: [10, 15, 20, 30, 40, 60, 60, 45, 60, 75, 90, 105]
            },
            {
                label: "Refrigerateurs",
                backgroundColor: '#B7D2DF',
                borderColor: 'rgb(0, 99, 132)',
                data: [10, 10, 13, 20, 50, 60, 78, 55, 45, 35, 25, 15]
            },
            {
                label: "Produits Bébé",
                backgroundColor: '#06E81E',
                data: [400, 600, 550, 1500, 500, 450, 569, 600, 650, 700, 750, 800]
            },
            {
                label: "Mode Femme",
                backgroundColor: '#D1FA2A',
                borderColor: 'rgb(0, 99, 132)',
                data: [1000, 1500, 1200, 3000, 800, 600, 1500, 1400, 1450, 1500, 1550, 1600]
            },
            {
                label: "Mode Homme",
                backgroundColor: '#1FF3FA',
                borderColor: 'rgb(0, 99, 0)',
                data: [2000, 1000, 1300, 2540, 700, 780, 1000, 1100, 780, 460, 140, 450]
            }
            ]
        }
    });
}

/* 
Diagramme Horizontal: Fonction permettant de tracer le nombre de produits vendus pour chaque produit
*/
function diagrammeHorizontal(){
    var ctx = document.getElementById('diagrammeHorizontalParMois').getContext('2d');
    var data = {
        datasets: [{
            data: [41522, 30060, 26302, 263500, 8669, 20660, 610, 416, 8069, 17100, 12250],
            backgroundColor: ['#AFFF33', '#6E16F6', '#19C7FA', '#0E4FD3', '#9E9194', '#1ADBA6', '#B7D2DF', '#06E81E', '#D1FA2A', '#D31D1D', '#FC03C7']
        }],
        labels: [
            'Smartphones',
            'Informatiques',
            'Electromenagers',
            'Supermarche',
            'Parfums',
            'Televisions',
            'Climatiseurs',
            'Refrigerateurs',
            'Produits Bebe',
            'Mode Femme',
            'Mode Homme'
        ]
    };
    var myBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data
    });
}

/* function testePython() {
    var a = [{ 'produit': 'smartphones', 'Janvier': '1500', 'Fevrier': '2000', 'Mars': '350' },
    { 'produit': 'informatique', 'Janvier': '250', 'Fevrier': '1150', 'Mars': '2500' },
    { 'produit': 'electromenager', 'Janvier': '2000', 'Fevrier': '1500', 'Mars': '1350' }];
    var b = new Map();
    b.set('produit', 'smartphones');
    for (var [key, value] of b) {
        alert('Bonjour' + key);
    }
} */