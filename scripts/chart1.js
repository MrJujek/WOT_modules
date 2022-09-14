const fiolet = (ctx, value) => ctx.p0.parsed.y > 3000 ? value :
    undefined;
const blue = (ctx, value) => ctx.p0.parsed.y > 1500 ? value :
    undefined;

new Chart(document.getElementById("myChart"), {
    type: 'line',
    data: {
        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950],
        datasets: [{
            data: [86, 114, 106, 106, 107, 111, 133, 221],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false,
            tension: 0.3
        }]
    },
    options: {
        title: {
            display: true,
            text: 'World population per region (in millions)'
        }
    }
});
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