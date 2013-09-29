// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone-localstorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:
function transitionPages()
{
  $('.goal-statement-container').addClass('animated fadeOutUp');
  transitiontoPage1();
  console.log('transition');
}

function transitiontoPage1()
{
  $('.step1').removeClass('hidden');
  $('.step1').addClass('visible animated fadeInUp');
}

function transitiontoPage2()
{
  $('.step2').removeClass('hidden');
  $('.step1').removeClass('visible');
  $('.step1').addClass('hidden');
  $('.step2').addClass('visible animated ');
}

function transitiontoPage3()
{
  $('.step3').removeClass('hidden');
  $('.step2').removeClass('visible');
  $('.step2').addClass('hidden');
  $('.step3').addClass('visible animated ');
}

function transitiontoPage4()
{
  $('.step4').removeClass('hidden');
  $('.step3').removeClass('visible');
  $('.step3').addClass('hidden');
  $('.step4').addClass('visible animated ');
}

function transitiontoPage5()
{
  $('.step5').removeClass('hidden');
  $('.step4').removeClass('visible');
  $('.step4').addClass('hidden');
  $('.step5').addClass('visible animated ');
}

function transitiontoPage6()
{
  $('.step6').removeClass('hidden');
  $('.step5').removeClass('visible');
  $('.step5').addClass('hidden');
  $('.step6').addClass('visible animated ');
}

$('#goal').typeahead([
{
	name: 'availableGoals',
	local: [ "Run a marathon", "Learn to play the ukelele", "Plan a wedding", "Quit smoking cigarettes", "Learn to speak Chinese this year"]
}
]);

$('#goal').keypress(function (e)
{
  if (e.which == 13)
  {
    transitionPages();
  }
});

$("#Start").click(function()
{
	transitionPages();
});

//-----------------------
var countdown = 0;

onload = function(){
	
	var total = 0;
	var	div		=	$('#content div')[0]
	,	paper	=	$(div).raphael()
	,	width	=	600
	,	height	=	600
	,	scale	=	2

	,	treeNode		=	function(depth){
								var that = this;
								this.age  = 5;
								this.children = [];
								this.width = .3;
								this.angle = 0;
								this.distance = 1;
								this.depth = depth;
								this.extend = function(){
									
									var n = Math.round(Math.random() * (2 - 1) + 1);
									for(var i=0 ; i<n ; i++){
										this.children.push(new treeNode(depth+1));
									}
								};
								total++;
								this.grow = function(){
									
	if(countdown >=0){
									that.width		= that.width + Math.pow(that.age,1.4) * .01;
									that.distance	= that.distance + (Math.random() * (12 - 5) + 5) / that.age;
									that.angle		= that.angle + (Math.random()-.5) * 230 / Math.pow(that.age,4.1) * Math.sqrt(that.depth+1) * (1+that.children.length/4);
									that.age++;
									if(that.children.length==0 && Math.random()<1/Math.E){
										that.extend();
									}
								};
							}
	}
	,	treeBase		=	new treeNode(0)
	,	iterationNb		=	0
	,	ageMax	=	50

	,	recurseNode = function(node, x1, y1, angle, z){
			angle += node.angle;
			var	x2 = x1 + scale * node.distance * Math.cos(angle)
			,	y2 = y1 + scale * node.distance * Math.sin(angle)
			;
			paper.path('M '+x1+' '+y1+' '+x2+' '+y2).attr({
				'stroke'		:	'hsl('	+	(node.depth/200 - node.age/treeBase.age/200 + 1.08)%1
								+	','		+	(z+4)/5
								+	', ' + (.1 +node.depth/150 ) + ')'
			,	'stroke-width'	:	Math.ceil(scale * node.width)
			,	'stroke-linecap':	'round'
			});
			$(node.children).each(function(i,child){
				recurseNode(child, x2, y2, angle, i/node.children.length);
			});
			node.grow();
		}
	,	iteration = function(){
		
			countdown--;
			paper.clear();
			recurseNode(treeBase, width/2, height, -Math.PI/2, 0, 1);
			
	
			if(total<800){
				setTimeout(iteration, 100);
			}else{
			}
		}
	;
	iteration();
}

$(".advance").click( function () {
	countdown = 7;
	});



