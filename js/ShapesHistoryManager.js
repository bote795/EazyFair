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

		databaseManager.shapeSave(temp);
	}	
}
