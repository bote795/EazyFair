var ShapesHistoryManager = function() {
	this.queue = [];
 };       
 //adds item to history
ShapesHistoryManager.prototype.add = function(item){
	this.queue.push(item); 
 }

//pop item from histroy
ShapesHistoryManager.prototype.pop = function(){
 	return this.queue.shift(); // queue is now [5]
}

//saves to db
ShapesHistoryManager.prototype.save = function(){
	var databaseManager = new DatabaseManager();
	while(this.queue.length != 0)
	{
		var temp = this.queue.shift();
		switch(temp.length)
		{
			case 3:
				databaseManager.shapeSave(temp[0], temp[1], temp[2]); break;
			case 4:
				databaseManager.shapeSave(temp[0], temp[1], temp[2], temp[3]); break;
		}
	}	
}
