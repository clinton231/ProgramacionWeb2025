document.addEventListener('DOMContentLoaded', function() {


    const kpiData = {
        totalCamas: 150,
        camasOcupadas: 125,
        medicosGuardia: 3,
        enfermerosGuardia: 8,
        alertasActivas: 3
    };

    const tasa = ((kpiData.camasOcupadas / kpiData.totalCamas) * 100).toFixed(1);
    const ocupadasValue = document.getElementById('ocupadasValue');
    if (ocupadasValue) ocupadasValue.textContent = `${kpiData.camasOcupadas} / ${kpiData.totalCamas}`;

    const tasaOcupacionValue = document.getElementById('tasaOcupacionValue');
    if (tasaOcupacionValue) tasaOcupacionValue.textContent = `${tasa}%`;

    const personalGuardiaValue = document.getElementById('personalGuardiaValue');
    if (personalGuardiaValue) personalGuardiaValue.textContent = `${kpiData.medicosGuardia} Médicos, ${kpiData.enfermerosGuardia} Enfermeros`;

    const alertasActivasValue = document.getElementById('alertasActivasValue');
    if (alertasActivasValue) alertasActivasValue.textContent = kpiData.alertasActivas;


    const chartElement = document.getElementById('ocupacionChart');

    if (chartElement) {
        const existingChart = Chart.getChart(chartElement);
        if (existingChart) {
            existingChart.destroy();
        }

        const ctx = chartElement.getContext('2d');

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
    }



    function loadCriticalAlerts() {
        const criticalAlertsList = document.getElementById('criticalAlertsList');
        if (!criticalAlertsList) return;

        const alertsData = [{
                ubicacion: 'T.I. - Cama 4',
                complejidad: 'ALTA (Ventilación Asistida)',
                alerta: 'Medicación **Ibuprofeno** PENDIENTE (hace 15 min). Dosis: 400mg c/4hs.',
                urgencia: 'danger'
            },
            {
                ubicacion: 'T.I. - Cama 8',
                complejidad: 'MEDIA (Post-Operatorio)',
                alerta: 'Signos Vitales sin registrar hace 30 min.',
                urgencia: 'warning'
            },
            {
                ubicacion: 'T.I. - Cama 2',
                complejidad: 'ALTA (Sepsis)',
                alerta: 'Medicación **Antibiótico X** PENDIENTE (hace 5 min). Dosis: 1g c/6hs.',
                urgencia: 'danger'
            }
        ];

        criticalAlertsList.innerHTML = '';

        alertsData.forEach(alert => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');

            const mainContent = document.createElement('span');
            mainContent.classList.add('fw-bold', `text-${alert.urgencia}`);
            mainContent.innerHTML = `${alert.urgencia.toUpperCase()}: ${alert.ubicacion}`;

            const detailContent = document.createElement('small');
            detailContent.classList.add('d-block', 'text-muted');
            detailContent.innerHTML = `${alert.alerta} | **Complejidad:** ${alert.complejidad}`;

            listItem.appendChild(mainContent);
            listItem.appendChild(detailContent);

            criticalAlertsList.appendChild(listItem);
        });
    }

    // loadCriticalAlerts();

    // const manageUsersBtn = document.getElementById('manageUsersBtn');
    // if (manageUsersBtn) {
    //     manageUsersBtn.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         alert('Redirigiendo a la pantalla de Gestión de Usuarios (Falta construir la vista)');
    //     });
    // }
});