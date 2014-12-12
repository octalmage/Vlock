var gui = require('nw.gui');
var win = gui.Window.get();
var moment = require('moment');
var time;
var t;

if (process.platform === "darwin")
{
	var mb = new gui.Menu(
	{
		type: "menubar"
	});
	mb.createMacBuiltin("Marknote");
	win.menu = mb;
}

$(document).on("ready",function()
{

	//win.showDevTools();

	$("#startButton").on("click", function()
	{
		today=moment().format("YYYY-M-D");  
		time=moment(today + " " + $("#time").val());

		checkTime();

		win.hide();

		t=setInterval(function()
		{
			checkTime();
		},10000);
	})
    
 })  

function checkTime()
{
	console.log(moment().format("HHmm") + " = " + time.format("HHmm"));
	if (moment().format("HHmm")==time.format("HHmm"))
	{
		clearTimeout(t);
		$("#controls").hide();
		win.show();
		win.enterFullscreen();

		loadvideoplayer($("#video").val());
	}
}