import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DependencyGraph = ({ tasks }) => {
  const svgRef = useRef();

  useEffect(() => {
    const graph = {
      nodes: tasks.map(task => ({ id: task.name })),
      links: tasks.flatMap(task =>
        task.dependencies.map(dep => ({ source: dep, target: task.name }))
      )
    };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(graph.nodes)
      .force("link", d3.forceLink(graph.links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(300, 300));

    svg.append("g")
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("line");

    svg.append("g")
      .selectAll("circle")
      .data(graph.nodes)
      .enter()
      .append("circle")
      .attr("r", 5);
  }, [tasks]);

  return <svg ref={svgRef} width="600" height="400"></svg>;
};

export default DependencyGraph;
