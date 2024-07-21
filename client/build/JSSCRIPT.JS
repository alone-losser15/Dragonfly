document.addEventListener('DOMContentLoaded', function() {
    const datasets = [
      [65, 59, 80, 81, 56, 55],
      [25, 39, 20, 31, 56, 65],
      [85, 71, 90, 55, 60, 80],
      [30, 25, 40, 45, 20, 30]
    ];
  
    const options = {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y;
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      }
    };
  
    ['chart1', 'chart2', 'chart3', 'chart4'].forEach((chartId, index) => {
      const ctx = document.getElementById(chartId).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'GRAPH',
            data: datasets[index],
            fill: true,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.4)',
            tension: 0.4,
            pointBackgroundColor: 'rgba(75,192,192,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75,192,192,1)',
          }]
        },
        options: options
      });
    });
  });
  