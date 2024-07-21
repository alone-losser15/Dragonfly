const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Temperature and Humidity',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: true,
    borderColor: 'rgba(75,192,192,1)',
    backgroundColor: 'rgba(75,192,192,0.4)',
    tension: 0.4,
    pointBackgroundColor: 'rgba(75,192,192,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(75,192,192,1)',
  }]
};

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

const myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
