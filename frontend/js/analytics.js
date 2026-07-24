const revenueCtx = document.getElementById('revenueChart');

if(revenueCtx){
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun'],
            datasets: [{
                label: 'Revenue',
                data: [12000,15000,18000,21000,24000,28000],
                tension: 0.4
            }]
        }
    });
}