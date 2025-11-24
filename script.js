document.addEventListener('DOMContentLoaded', function() {



    const kpiData = {
        totalCamas: 150,
        camasOcupadas: 125,
        medicosGuardia: 3,
        enfermerosGuardia: 8,
        alertasActivas: 3
    };


    const tasa = ((kpiData.camasOcupadas / kpiData.totalCamas) * 100).toFixed(1);


    document.getElementById('ocupadasValue').textContent = `${kpiData.camasOcupadas} / ${kpiData.totalCamas}`;
    document.getElementById('tasaOcupacionValue').textContent = `${tasa}%`;
    document.getElementById('personalGuardiaValue').textContent = `${kpiData.medicosGuardia} Médicos, ${kpiData.enfermerosGuardia} Enfermeros`;
    document.getElementById('alertasActivasValue').textContent = kpiData.alertasActivas;


    const ctx = document.getElementById('ocupacionChart').getContext('2d');

    const ocupacionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Camas Ocupadas',
                data: [110, 115, 120, 125, 128, 125, 130],
                backgroundColor: 'rgba(13, 110, 253, 0.2)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Nº de Camas'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


});