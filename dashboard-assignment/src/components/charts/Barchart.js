import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import ChatWrapper from "./ChartWrapper";

const Barchart=()=>{
    const [data]=useState([200,250,60,150,100,175]);
    const svgRef = useRef()

    useEffect(()=>{
        //setting up svg container
        const w=400
        const h=100
        const svg=d3.select(svgRef.current)
                    .attr('width',w)
                    .attr('height',h+20)

        //setting the scaling
        const xScale = d3.scaleBand()
                        .domain(data.map((val,i)=>i))
                        .range([0,w])
                        .padding(0.5)
        const yScale = d3.scaleLinear()
                         .domain([0,h])
                         .range([h,0])
        //setting the axes
        const xAxis = d3.axisBottom(xScale)
                        .ticks(data.length)
        const yAxis = d3.axisLeft(yScale)
                        .ticks(5)
        
        svg.append('g')
            .call(xAxis)
            .attr('transform',`translate(0, ${h})`)

        svg.append('g')
            .call(yAxis)

        //setting the svg data
        svg.selectAll('.bar')
            .data(data)
            .join('rect')
            .attr('x',(v,i)=>xScale(i))
            .attr('y',yScale)
            .attr('width',xScale.bandwidth())
            .attr('height',val=>h-yScale(val))
    },[data])

    return(
        <>
        <svg ref={svgRef}></svg>
        </>
    )
}
// const Barchart=()=>{
//     const [isGraphPresent,setIsGraphPresent]=useState(false)
//     const [data]=useState([25])
//     const  drawChart= ()=>{
//         setIsGraphPresent(true)
//         const data = [12, 5, 6, 6, 9, 10];

//         const svg = d3.select("#my_dataviz")
//                     .append("svg")
//                     .attr("width", 700)
//                     .attr("height", 100);
        
//         const xScale=d3.scaleLinear()
//         .domain([0,data.length])
//         .range([50,400])

//      const xAxis = d3.axisBottom(xScale)
//         .ticks(data.length)
//         .tickFormat(i=>data[i+1])
        
        

//     svg.append('g') 
//         .call(xAxis)
//         // .attr('transform',`translate(0,${150})`)
//         .attr("class", "x-axis")

//         svg.selectAll("rect")
//             .data(data)
//             .enter()
//             .append("rect")
//             .attr("x", (d, i) => i * 90)
//             .attr("y", (d, i) => 100 - 5 * d)
//             .attr("width", 10)
//             .attr("height", (d, i) => d *10)
//             .attr("fill", "green")
//             .style("margin-bottom",'100px')
//     }

//     useEffect(()=>{
//         if(!isGraphPresent){
//             drawChart()
//        console.log("calling this why")
//         }
        
//     },[data])
//     return(
//         <ChatWrapper>
//         <h2>Total cash flow</h2>
//         <div id="my_dataviz"></div>
//         </ChatWrapper>
//     )
// } 

export default Barchart;