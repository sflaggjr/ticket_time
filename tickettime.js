//Time per ticket calculator
//Written by Steve Flagg

//Variables
var techs;
var total_time;
var ticket_amount;
var time_per_ticket;

techs = prompt("How many techs worked on this issue?");
total_time = prompt("How long did the issue last?");
ticket_amount = prompt("How many tickets were created as a result of the issue?");

time_per_ticket = total_time * techs / ticket_amount;

alert(Math.floor(time_per_ticket) + " minutes per ticket.");

