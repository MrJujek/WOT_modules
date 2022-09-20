export function drawWN8Chart(wn8, data, chart_name) {
    const unicum = (ctx, value) => ((ctx.p0.parsed.y >= 3500) && (ctx.p1.parsed.y >= 3500)) ? value : undefined;
    const great = (ctx, value) => ((ctx.p0.parsed.y >= 2500) && (ctx.p1.parsed.y >= 2500)) ? value : undefined;
    const good = (ctx, value) => ((ctx.p0.parsed.y >= 1600) && (ctx.p1.parsed.y >= 1600)) ? value : undefined;
    const average = (ctx, value) => ((ctx.p0.parsed.y >= 1000) && (ctx.p1.parsed.y >= 1000)) ? value : undefined;
    const below_average = (ctx, value) => ((ctx.p0.parsed.y >= 500) && (ctx.p1.parsed.y >= 500)) ? value : undefined;
    const bad = (ctx, value) => ((ctx.p0.parsed.y >= 200) && (ctx.p1.parsed.y >= 200)) ? value : undefined;
    const very_bad = (ctx, value) => ((ctx.p0.parsed.y >= 0) && (ctx.p1.parsed.y >= 0)) ? value : undefined;

    const wykres = new Chart(document.getElementById(chart_name), {
        type: 'line',
        data: {
            labels: data,
            datasets: [{
                data: wn8,
                label: "WN8",
                //borderColor: 'blue',
                // {
                //     borderColor: ctx => unicum(ctx, 'blueviolet')
                //         || great(ctx, 'blue')
                //         || good(ctx, 'green')
                //         || average(ctx, 'yellow')
                //         || below_average(ctx, 'orange')
                //         || bad(ctx, 'red')
                //         || very_bad(ctx, 'black')
                // },
                fill: true,    //false,
                tension: 0.3,
                segment: {
                    borderColor: ctx => unicum(ctx, 'blueviolet')
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
        },
    });

    return wykres;
}
