var square = document.getElementsByClassName('square');

for(var i = 0; i<square.length; i++){
  square[i].addEventListener('mouseenter', function(){
    this.classList.add("rubberBand");
    this.addEventListener("animationend", function(){
      this.classList.remove("rubberBand");
    }, false);
  })
}

var menu = document.getElementById('menu');
var secondcontainer = document.getElementById('secondcontainer');
var scposition = secondcontainer.getBoundingClientRect();
var profilepicture = document.getElementById('profilpicture');

document.addEventlistener("scroll", function(event) {
    if(window.pageYOffset >= scposition.top-150){
        menu.style.opacity="0";
    }
    if(window.pageYOffset <= scposition.top-150){
        menu.style.opacity="1";
    }
    if(window.pageYoffset >= scposition.top-100){
        profilpicture.classList.add('profilpicture-animation');
    }
    if(window.pageYoffset <= scposition.top-600){
        profilpicture.classList.remove('profilpicture-animation');
    }
});
// (function()){
//     var width = 900;
//     var height = 540;
//
//     var projection = d3.geo.albersUsa();
//
//     var color = d3.scale.linear()
//         .domain([0, 15])
//         .range(['#5b5858', '#4f4d4d', '#454444', '#323131']);
//
//     var svg = d3.select('#map').append('svg')
//         .attr('width', width)
//         .attr('height', height);
//
//     var path = d3.geo.path()
//         .projection(projection);
//
//     var g = svg.append('g');
//
//     d3.json('https://gist.githubusercontent.com/girliemac/b2fdcd10a5a76d87bef3/raw/698891c4e260e3501ecf235205ce87e2dd20467e/us-states.json', function(error, topology) {
// 	    g.selectAll('path')
// 			.data(topojson.feature(topology, topology.objects.usStates).features)
// 			.enter()
// 			.append('path')
// 			.attr('class', function(d){ return 'states ' + d.properties.STATE_ABBR;} )
// 			.attr('d', path)
// 			.attr('fill', function(d, i) { return color(i); })
// 	});
//
//     //San Francisco
//     var position = projection([-122.25, 37.47]);
//
//     //Baltimore
//     var position2 = projection([-76.6122, 39.2904]);
//
//     var heart = svg.selectAll('text').data([0]);
//     heart.enter()
//         .append('text')
//         .text('❤')
//         .attr('font-size', 34)
//         .attr('fill', '#CE1126')
//         .attr('transform', function(d) {return 'translate(' + position + ')';})
//         .attr('transform', function(d) {return 'translate(' + position2 + ')';})
// })();
