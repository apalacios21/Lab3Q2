function splitCost(){
    let numOfTopping = parseInt(prompt("How many topping are on the pizza? "));

//Calculate total cost of toppings
    let totalTopCost = numOfTopping * 1.25;

    let numOfPpl = parseInt(prompt("How many people are splitting the pizza? "));

//Calculate cost for each person
    let costPerPerson = (totalTopCost + 15) / numOfPpl;

    alert(`Each person will pay ${costPerPerson}`);


}