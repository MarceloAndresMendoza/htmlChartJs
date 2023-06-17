const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
            label: '# de solicitudes resueltas',
            data: [35, 37, 27, 23, 27, 22, 38],
            borderWidth: 1
        },
        {
            label: '# de solicitudes recibidas',
            data: [39, 42, 34, 29, 28, 26, 39],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});