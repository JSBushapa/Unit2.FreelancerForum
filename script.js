const main = document.querySelector("main");
const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");





const h1 = document.createElement("h1");
const p = document.createElement("p");
const h2 = document.createElement("h2");

const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");

h1.textContent = "Freelancer Forum";
p.textContent = "The average starting price is $40";
h2.textContent = "Available Freelancer";

th1.textContent = "Name";
th2.textContent = "Occupation";
th3.textContent = "Starting Price";

td1.textContent = "Alice";
td2.textContent = "Writer";
td3.textContent = "$30";

td1.textContent = "Bob";
td2.textContent = "teacher";
td3.textContent = "$50";

td1.textContent = "Carol";
td2.textContent = "Programmer";
td3.textContent = "$70";



tableHead.append(th1);
tableHead.append(th2);
tableHead.append(th3);

tableBody.append(td1);
tableBody.append(td2);
tableBody.append(td3);

main.append(h1);
main.append(p);
main.append(h2);





// random average price 
// random freelancer list