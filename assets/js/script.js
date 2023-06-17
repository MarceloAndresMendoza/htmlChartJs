document.addEventListener('DOMContentLoaded', () => {
    const dataTotals = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        label: '# de solicitudes totales',
        values: [35, 37, 27, 23, 27, 38],
        borderWidth: 1
    }
    const dataResolved = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        label: '# de solicitudes resueltas',
        values: [27, 29, 23, 18, 25, 37],
        borderWidth: 1
    }

    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataTotals.labels,
            datasets: [
                {
                    label: dataTotals.label,
                    data: dataTotals.values,
                    borderWidth: 1,
                },{
                    label: dataResolved.label,
                    data: dataResolved.values,
                    borderWidth: 1,
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                }
            }
        }}
    );
});