import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const StackedBarChart=()=>{
    
    const [data]=useState([{group: 'August', In: 46.15384615384615, out: 3.8461538461538463},
                            {group: 'September', In: 13.333333333333334, out: 13.333333333333334},
                            {group: 'October', In: 21.568627450980394, out: 54.90196078431373},
                            {group: 'November', In: 21.568627450980394, out: 54.90196078431373},
                            {group: 'December', In: 73.07692307692307, out: 23.076923076923077},
                            {group: 'January', In: 21.568627450980394, out: 54.90196078431373},]);
    
    console.log('data',data)                            
    const svgRef = useRef()
    const subgroups=['In', 'out']
    const groups=['August', 'September', 'October', 'November','December','January']
    
    useEffect(()=>{
        //setting up svg container
        const w=400
        const h=100
       
        const svg=d3.select(svgRef.current)
                    .attr('width',w)
                    .attr('height',h+20)

        // //setting the scaling
        const xScale = d3.scaleBand()
                        .domain(groups)
                        .range([0,w])
                        .padding(0.8)

        const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([ h, 0 ]);
        

        //setting the axes
        const xAxis = d3.axisBottom(xScale)
                        .tickSizeOuter(0)
        const yAxis = d3.axisLeft(yScale)
                        
        
        svg.append('g')
            .call(xAxis)
            .attr('transform',`translate(0, ${h})`)

        svg.append('g')
            .call(yAxis)

        // color palette = one color per subgroup
        const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#15a374','#339c45'])

        var dataNormalized = []
        data.forEach(function (d) {
            // Compute the total
            let tot = 0
            let name
            for (var i in subgroups) { name = subgroups[i]; tot += +d[name] }
            // Now normalize
            for (var i in subgroups) { name = subgroups[i]; d[name] = d[name] / tot * 100 }
        })

        //stack the data? --> stack per subgroup
        const stackedData = d3.stack()
            .keys(subgroups)
            (data)

            const rx = 12;
const ry = 12;
        //setting the svg data
        svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
      .attr("fill", d => color(d.key))
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(d => d)
    //   .join("rect")
    //     .attr("x", d => xScale(d.data.group))
    //     .attr("y", d => yScale(d[1]))
    //     .attr("height", d => yScale(d[0]) - yScale(d[1]))
    //     .attr("width",xScale.bandwidth())

    .attr("d", d => `
        M${d => xScale(d.data.group)},${d => yScale(d[1]) + ry}
        a${rx},${ry} 0 0 1 ${rx},${-ry}
        h${xScale.bandwidth() - 2 * rx}
        a${rx},${ry} 0 0 1 ${rx},${ry}
        v${d => yScale(d[0]) - yScale(d[1]) - ry}
        h${-(xScale.bandwidth())}Z
      `);
       
    },[data])


    return(
        <>
         <svg ref={svgRef}></svg>
        </>
    )
}

export default StackedBarChart;