//Time per ticket calculator
//Written by Steve Flagg
var ticketTime;
function timeCalc()
	{
		var time_per_ticket;
		var total_time;
		var total_tickets;
		
		total_time = prompt("Enter the total time between all techs in minutes: ");
		total_tickets = prompt("Enter the total amount of tickets created by the Outage: ");
		
		time_per_ticket = total_time / total_tickets;
		console.log(time_per_ticket);
		return time_per_ticket;
	}

ticketTime = timeCalc();
alert("There are " + ticketTime + " minutes per ticket");


		