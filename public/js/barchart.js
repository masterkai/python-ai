// var barData = [390,410,440,470,500];
//
// var seniority = ['一年以下','1~3年','3~5年','5~10年','10年以上'];
//
// var height = 250,
//     width = 900,
//     barHeight = 25,
//     barOffset = barData.length*4;

// var xScale = d3.scale.linear()
//     .domain([0, d3.max(barData)])
//             .range([0, width]);

// d3.select('#chart').append('svg')
//     .attr('width', width)
//     .attr('height', height)
//     .style('background', '#4bffb4')
//     .selectAll('rect').data(barData)
//     .enter().append('rect')
//         .style('fill', '#e31f81')
//         .attr('height', barHeight)
//         .attr('width', function (d) {
//             return d;
//         })
    // .attr('x', function (data,i) {
    //     ;
    // })
    //     .attr('y', function (data,i) {
    //         return (i+.5) * (barHeight + barOffset)
    //     })
