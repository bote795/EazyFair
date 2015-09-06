var DrawingManager = function() {
	//key for storing tasks
    this.key = "key";
 };       

//{IMAGE, SHAPE, X, Y, Radiuss, COLOR , LINEWEIGHT}
DrawingManager.prototype.save = function(drawingObject){
	var server=45.79.154.181:3000;
	$.ajax({
	type: 'POST' // added,
	url: server,
	data: JSON.stringify(drawingObject),
	success: function (data) {
	    var ret = jQuery.parseJSON(data);
	    console.log(ret);
	},
	error: function (xhr, status, error) {
	    console.log('Error: ' + error.message);
	    $('#lblResponse').html('Error connecting to the server.');
	}
	});
});
DrawingManager.prototype.load = function(){
});