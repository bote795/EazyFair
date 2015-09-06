var DatabaseManager = function() {
 };       

//{IMAGE, SHAPE, X, Y, Radiuss, COLOR , LINEWEIGHT}
DatabaseManager.prototype.save = function(drawingObject){
	var server= "45.79.154.181:3000/add";
	$.ajax({
	type: 'POST', // added,
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
};
DatabaseManager.prototype.load = function(){
};
DatabaseManager.prototype.shapeSave = function(num,image, x, y, color, w, h){
	var temp = {};
	temp.image=image;
	temp.x=x;
	temp.y=y;
	temp.color= color;
	var databaseManager = new DatabaseManager();	
	switch(num)
	{
		// The drawing pencil.
		case 0: 
			temp.shape="pencil";
			databaseManager.save(temp);
			break;
		case 1: 
			temp.shape="rect";
			temp.w=w;
			temp.h=h;
			databaseManager.save(temp);
			break;
		case 2: 
			temp.shape="line";
			databaseManager.save(temp);
			break;

	}
};
