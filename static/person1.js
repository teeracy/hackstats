var w = 400,
	h = 400;

var colorscale = d3.scale.category10();

//Legend titles
// var LegendOptions = ['2 Years Ago'];

//Data
var d = [
		  [
			{axis:"HTML",value:0.27},
			{axis:"Semantic Markup",value:0.82},
			{axis:"CSS",value:0.44},
			{axis:"Grid Frameworks",value:0.62},
			{axis:"Javascript",value:0.40},
			{axis:"MVC",value:0.4349},
			{axis:"Progressive Enhancement",value:0.152},
			{axis:"Site Performance",value:0.336},
		  ],[
			{axis:"HTML",value:0.643257},
			{axis:"Semantic Markup",value:0.23452},
			{axis:"CSS",value:0.4564},
			{axis:"Grid Frameworks",value:0.54632},
			{axis:"Javascript",value:0.34550},
			{axis:"MVC",value:0.3449},
			{axis:"Progressive Enhancement",value:0.34552},
			{axis:"Site Performance",value:0.5636},
		  ],[
			{axis:"HTML",value:0.345667},
			{axis:"Semantic Markup",value:0.234552},
			{axis:"CSS",value:0.34564},
			{axis:"Grid Frameworks",value:0.5632},
			{axis:"Javascript",value:0.34250},
			{axis:"MVC",value:0.676749},
			{axis:"Progressive Enhancement",value:0.34552},
			{axis:"Site Performance",value:0.34536},
		  ],[
			{axis:"HTML",value:0.12367},
			{axis:"Semantic Markup",value:0.32452},
			{axis:"CSS",value:0.3264},
			{axis:"Grid Frameworks",value:0.34532},
			{axis:"Javascript",value:0.54650},
			{axis:"MVC",value:0.45649},
			{axis:"Progressive Enhancement",value:0.45652},
			{axis:"Site Performance",value:0.45636},
		  ]
];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 10,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s

data = [d[0]];
RadarChart.draw("#chart", data, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

// var svg = d3.select('#body')
// 	.selectAll('svg')
// 	.append('svg')
// 	.attr("width", w+300)
// 	.attr("height", h)

// //Create the title for the legend
// var text = svg.append("text")
// 	.attr("class", "title")
// 	.attr('transform', 'translate(90,0)') 
// 	.attr("x", w - 70)
// 	.attr("y", 10)
// 	.attr("font-size", "12px")
// 	.attr("fill", "#404040")
		
// //Initiate Legend	
// var legend = svg.append("g")
// 	.attr("class", "legend")
// 	.attr("height", 100)
// 	.attr("width", 200)
// 	.attr('transform', 'translate(90,20)') 
// 	;
// 	//Create colour squares
// 	legend.selectAll('rect')
// 	  .data(LegendOptions)
// 	  .enter()
// 	  .append("rect")
// 	  .attr("x", w - 65)
// 	  .attr("y", function(d, i){ return i * 20;})
// 	  .attr("width", 10)
// 	  .attr("height", 10)
// 	  .style("fill", function(d, i){ return colorscale(i);})
// 	  ;
// 	//Create text next to squares
// 	legend.selectAll('text')
// 	  .data(LegendOptions)
// 	  .enter()
// 	  .append("text")
// 	  .attr("x", w - 52)
// 	  .attr("y", function(d, i){ return i * 20 + 9;})
// 	  .attr("font-size", "11px")
// 	  .attr("fill", "#737373")
// 	  .text(function(d) { return d; })
	  ;	

data = [d[0]];
RadarChart.draw("#chart", data, mycfg);