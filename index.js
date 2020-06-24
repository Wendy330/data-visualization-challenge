d3.csv("data/flights_2015_sample.csv").then(function(data) {
	drawChart(parseData(data));
});

// Prepare data by grouping and filtering
function parseData(data) {
	return d3.nest()
		.key(function (d) { return d.CANCELLATION_REASON; })
		.key(function (d) { return d.MONTH; })
		.rollup(function (v) { return v.length;})
		.entries(data.filter(function (d) { return +d.CANCELLED === 1; }));
}

function drawChart(data) {
	var svg = d3.select("#chart"),
		margin = {top: 15, right: 35, bottom: 15, left: 35},
		width = +svg.attr("width") - margin.left - margin.right,
		height = +svg.attr("height") - margin.top - margin.bottom;

	var xScale = d3.scaleLinear()
		.domain(d3.extent(data, d => d.values.length))
		.rangeRound([margin.left, width - margin.right]);

	var yScale = d3.scaleLinear()
		.domain([0, findMaxValue(data)])
		.rangeRound([height - margin.bottom, margin.top]);

	var line = d3.line()
		.curve(d3.curveMonotoneX)
		.x(d => xScale(d.key))
		.y(d => yScale(d.value));

	let id = 0;
	const ids = function () { return "line-"+id++; }

	svg.append("g")
		.attr("class","x-axis")
		.attr("transform", "translate(0," + (height - margin.bottom) + ")")
		.call(d3.axisBottom(xScale));

	svg.append("g")
		.attr("class", "y-axis")
		.attr("transform", "translate(" + margin.left + ",0)")
		.call(d3.axisLeft(yScale));

	const lines = svg.selectAll("lines")
		.data(data)
		.enter()
		.append("g");

	lines.append("path")
		.attr("class", ids)
		.attr("d", function(d) { return line(d.values); });

	lines.append("text")
		.attr("class","label")
		.datum(function(d) {
			return {
				key: d.key,
				value: d.values[d.values.length - 1]
			};
		})
		.attr("transform", function(d) {
			return "translate(" + (xScale(d.value.key) + 10) + "," + (yScale(d.value.value) + 5) + ")";
		})
		.attr("x", 5)
		.text(function(d) { return d.key; });
}

// Round up to hundred for y axis
function findMaxValue(data) {
	return Math.round((d3.max(data[0].values, d => d.value) + 99) / 100) * 100;
}
