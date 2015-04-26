var w = 400,
	h = 400;

var colorscale = d3.scale.category10();

//Legend titles
// var LegendOptions = ['2 Years Ago'];

//Data
var d = [
		  [
			{axis:"HTML",value:0.59},
			{axis:"Semantic Markup",value:0.48},
			{axis:"CSS",value:0.56},
			{axis:"Grid Frameworks",value:0.11},
			{axis:"Javascript",value:0.42},
			{axis:"MVC",value:0.34},
			{axis:"Progressive Enhancement",value:0.14},
			{axis:"Site Performance",value:0.05},
		  ],[
			{axis:"HTML",value:0.66},
			{axis:"Semantic Markup",value:0.50},
			{axis:"CSS",value:0.64},
			{axis:"Grid Frameworks",value:0.27},
			{axis:"Javascript",value:0.45},
			{axis:"MVC",value:0.48},
			{axis:"Progressive Enhancement",value:0.27},
			{axis:"Site Performance",value:0.34},
		  ],[
			{axis:"HTML",value:0.67},
			{axis:"Semantic Markup",value:0.52},
			{axis:"CSS",value:0.64},
			{axis:"Grid Frameworks",value:0.32},
			{axis:"Javascript",value:0.50},
			{axis:"MVC",value:0.49},
			{axis:"Progressive Enhancement",value:0.52},
			{axis:"Site Performance",value:0.36},
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

$( document ).ready(function() {
    $(".current").click(function(){
    	data = [d[2], d[1], d[0]];
    	
		RadarChart.draw("#chart", data, mycfg);
    });
    $(".one-year").click(function(){
    	data = [d[1], d[0]];
		RadarChart.draw("#chart", data, mycfg);
    });
    $(".two-years").click(function(){
    	data = [d[0]];
		RadarChart.draw("#chart", data, mycfg);
    });
});