

//Array stores the position each player selects
var box = new Array();
box[0] = "0";
box[1] = "0"; 
box[2] = "0";
box[3] = "0";
box[4] = "0"; 
box[5] = "0";
box[6] = "0";
box[7] = "0"; 
box[8] = "0";

//counter for the turn varaible.
var counter = 0;


//Start a new game
function newGame()
{
  document.reload();
}

//Exit game
function exit()
{
  document.close();

}


//gets player's turn and returns it.
function getPlayersTurn()
{

var turn = new Array();
turn[0] = "1";
turn[1] = "2"; 
turn[2] = "1";
turn[3] = "2";
turn[4] = "1"; 
turn[5] = "2";
turn[6] = "1";
turn[7] = "2"; 
turn[8] = "1";

//get the current player.
player = turn[counter];

//increase counter for the next player
counter++;
	
return player;
}

function play(number, boxName)
{

  
 try
  {
     //get current player
      var p = getPlayersTurn();
      
	  //check for player, if player1, insert 'O' in the selected box.
	  if(p == 1)
	  {
	  //alert(number+" "+boxName);
      //box[number] = "";
      document.getElementById(boxName).src="o.jpg";
	  box[number] = 1;
	  
	  }
	  
	  //check for player, if player2, insert 'X' in the selected box.
	  if(p == 2)
	  {
	   document.getElementById(boxName).src="x.jpg";
	   box[number] = 2;
	  }
	     
		 //if boxes 0, 1 and 2, are selected by player1, then player1 wins
	     if(box[0] == 1 && box[1] == 1 && box[2] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 //if boxes 3, 4 and 5, are selected by player1, then player1 wins
	     if(box[3] == 1 && box[4] == 1 && box[5] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 //if boxes 6, 7 and 8, are selected by player1, then player1 wins
	     if(box[6] == 1 && box[7] == 1 && box[8] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		 //if boxes 0, 3 and 6, are selected by player1, then player1 wins
	     if(box[0] == 1 && box[3] == 1 && box[6] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		  //if boxes 1, 4 and 7, are selected by player1, then player1 wins
	     if(box[1] == 1 && box[4] == 1 && box[7] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		 //if boxes 2, 5 and 8, are selected by player1, then player1 wins
	     if(box[2] == 1 && box[5] == 1 && box[8] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		 //if boxes 0, 4 and 8, are selected by player1, then player1 wins
	     if(box[0] == 1 && box[4] == 1 && box[8] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		  //if boxes 2, 4 and 6, are selected by player1, then player1 wins
	     if(box[2] == 1 && box[4] == 1 && box[6] == 1)
		 {
		    
		    if(confirm("Player1 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
      
	  
	  //////Player2
	   	
		 //if boxes 0, 1 and 2, are selected by player2, then player2 wins
	     if(box[0] == 2 && box[1] == 2 && box[2] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 //if boxes 3, 4 and 5, are selected by player2, then player2 wins
	     if(box[3] == 2 && box[4] == 2 && box[5] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 //if boxes 6, 7 and 8, are selected by player2, then player2 wins
	     if(box[6] == 2 && box[7] == 2 && box[8] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		 //if boxes 0, 3 and 6, are selected by player2, then player2 wins
	     if(box[0] == 2 && box[3] == 2 && box[6] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		  //if boxes 1, 4 and 7, are selected by player2, then player2 wins
	     if(box[1] == 2 && box[4] == 2 && box[7] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		 //if boxes 2, 5 and 8, is selected by player2, then player2 wins
	     if(box[2] == 2 && box[5] == 2 && box[8] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		 //if box 0, 4 and 8, are selected by player2, then player2 wins
	     if(box[0] == 2 && box[4] == 2 && box[8] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
		 
		 
		  //if boxes 2, 4 and 6, are selected by player2, then player2 wins
	     if(box[2] == 2 && box[4] == 2 && box[6] == 2)
		 {
		    
		    if(confirm("Player2 wins, Play again?"))  
       		 window.location.reload();
      		else
	    	alert("Bye, thanks for playing");
			  window.location.reload();
		 }
	   
	  
	  
  }
  catch(e)
   {
	alert("Exception occured " + e);
	}
	
}