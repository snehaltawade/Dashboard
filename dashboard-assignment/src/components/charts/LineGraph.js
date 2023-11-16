import { useEffect, useRef, useState } from "react";
import * as d3 from 'd3';
import ChatWrapper from "./ChartWrapper";

const LineGraph=({data})=>{

    // const [data] = useState([10,30,85,105,90,50,25,75,90,80,20,47,55,45,10,40])
    const svgRef=useRef()

    useEffect(()=>{
        //setting p svg
        d3.selectAll("svg > *").remove();
        const w=500
        const h=150
        const svg=d3.select(svgRef.current)
                    .attr('width',w)
                    .attr('height',h)
                    .attr('margin-top','50')
                    .attr('margin-left','20')
                    .style('overflow','visible')

        //setting the scaling
        const xScale=d3.scaleLinear()
                    .domain([0,data.length-1])
                    .range([0,w])

        const yScale=d3.scaleLinear()
                    .domain([0,h])
                    .range([h,0])
        
        const generateScaledLine=d3.line()
            .x((d,i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal)

        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i=>i+1)
            

        svg.append('g') 
            .call(xAxis)
            .attr('transform',`translate(0,${h})`)
            .attr("class", "x-axis")

        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d',d=>generateScaledLine(d))
            .attr('fill','none')
            .attr('stroke','#55BC55')
            .style('stroke-width', '1.5px' )

    },[data])

    return(
        <ChatWrapper>
        <div className="linegraph">
            <svg ref={svgRef}></svg>
        </div>
        </ChatWrapper>
    )

}
export default LineGraph;