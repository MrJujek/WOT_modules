export function drawChart(wn8_x, data_y, chart_name) {
    const unicum = (ctx, value) => ctx.p0.parsed.y > 3500 ? value :
        undefined;
    const great = (ctx, value) => ctx.p0.parsed.y > 2500 ? value :
        undefined;
    const good = (ctx, value) => ctx.p0.parsed.y > 1600 ? value :
        undefined;
    const average = (ctx, value) => ctx.p0.parsed.y > 1000 ? value :
        undefined;
    const below_average = (ctx, value) => ctx.p0.parsed.y > 500 ? value :
        undefined;
    const bad = (ctx, value) => ctx.p0.parsed.y > 200 ? value :
        undefined;
    const very_bad = (ctx, value) => ctx.p0.parsed.y >= 0 ? value :
        undefined;

    return new Chart(document.getElementById(chart_name), {
        type: 'line',
        data: {
            labels: data_y,
            datasets: [{
                data: wn8_x,
                label: "WN8",
                fill: false,    //true,
                tension: 0.2,
                segment: {
                    borderColor: ctx => unicum(ctx, 'fiolet')
                        || great(ctx, 'blue')
                        || good(ctx, 'green')
                        || average(ctx, 'yellow')
                        || below_average(ctx, 'orange')
                        || bad(ctx, 'red')
                        || very_bad(ctx, 'black')
                }
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