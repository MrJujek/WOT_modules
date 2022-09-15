export function drawChart(wn8_x, data_y, chart_name) {
    const fiolet = (ctx, value) => ctx.p0.parsed.y > 3000 ? value :
        undefined;
    const blue = (ctx, value) => ctx.p0.parsed.y > 1500 ? value :
        undefined;

    return new Chart(document.getElementById(chart_name), {
        type: 'line',
        data: {
            labels: data_y,
            datasets: [{
                data: wn8_x,
                label: "WN8",
                borderColor: blue,
                fill: false,
                tension: 0.2,
                // segment: {
                //     borderColor: ctx => fiolet(ctx, 'rgba(255, 206, 86, 1)')
                //         || green(ctx, 'rgba(255, 159, 64, 1)')
                // }
            }]
        },
        options: {
            title: {
                display: true,
                text: 'WN8'
            }
        }
    });
}
// const ctx = document.getElementById('myChart');
// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [1299, 1900, 2300, 500, 1165, 3100],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             tension: 0.3,
//             segment: {
//                 borderColor: ctx => fiolet(ctx, 'rgba(255, 206, 86, 1)')
//                     || green(ctx, 'rgba(255, 159, 64, 1)')
//             }
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });