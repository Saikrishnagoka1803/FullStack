/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let PositiveNums = [1,2,3,4,5]
console.log(PositiveNums)

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
console.log("----------------next exercise---------------------")
let PersonalDetails = {
    Name: "sai Krishna Reddy",
    Surname: "Goka",
    email: "gskr1803@gmail.com",
    age: 25
}
console.log(PersonalDetails)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("----------------next exercise---------------------")
PersonalDetails.DrivingLicence=true
console.log(PersonalDetails)


/* EXERCISE 4
Remove from the previously created object the age property.
*/
console.log("----------------next exercise---------------------")
delete PersonalDetails.age
console.log(PersonalDetails)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("----------------next exercise---------------------")
let pd2 = {
    name: "Sai Krishna ",
    Surname: "Goka",
    email: "saikrishnareddygoka18@gmail.com"}
    console.log(pd2)
    console.log(PersonalDetails.email===pd2.email)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("----------------next exercise---------------------")
let totalShoppingCart = 40
if (totalShoppingCart > 50) {
    console.log("user is eligible for free shipping")
    Totalcost = totalShoppingCart
    console.log("your bill to pay after applying free shipping is:",Totalcost)
}
else {
console.log("10 for shipping")
    Totalcost = totalShoppingCart + 10
    console.log("your bill to pay with shipping cost is:",Totalcost)
}




/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log("----------------next exercise---------------------")
let TotalShoppingCart = 40
if (TotalShoppingCart > 50) {
    console.log("user is eligible for free shipping")
    Totalcost = TotalShoppingCart
    ApplyBlackfridayDiscount = Totalcost - (Totalcost*0.2)
    console.log("your bill to pay after BF discount and free shipping is:",ApplyBlackfridayDiscount)
}
else {
console.log("10 for shipping")
    Totalcost = TotalShoppingCart + 10
    ApplyBlackfridayDiscount = Totalcost - (Totalcost*0.2)
    console.log("your bill to pay after BF discount is:",ApplyBlackfridayDiscount)
}


/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
 let Car= {
    Brand: "BMW",
    Model: 2021,
    LicensePlate : "TS01EJ4315"
    }
    console.log(Car)
    Car1={}
   Object.assign(Car1,Car)
    Car1.LicensePlate="AP01"
    Car2={}
    Object.assign(Car2,Car)
    Car2.LicensePlate="BP01"
    Car3={}
    Object.assign(Car3,Car)
    Car3.LicensePlate="CP01"
    Car4={}
    Object.assign(Car4,Car)
    Car4.LicensePlate="DP01"
    Car5={}
    Object.assign(Car5,Car)
    Car5.LicensePlate="EP01"
    console.log(Car1)
    console.log(Car2)
    console.log(Car3)
    console.log(Car4)
    console.log(Car5)
    



/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [Car,Car1,Car2,Car3,Car4,Car5]
console.log("cars available for rent are:",carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop() //removing last car #Car5
carsForRent.splice(0,1) //removing first car #Car
console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

for(let i=0 ;i<=(carsForRent.length-1); i++)
{
    console.log(carsForRent[i])
    console.log(carsForRent[i].Brand)
    console.log(carsForRent[i].LicensePlate)
}

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let  carsForSale = [Benz={
    colour: "red",
    seats: 4
},
Audi={
    colour: "white",
    seats: 5
},
Hyundai={
    colour: "Blue",
    seats : 4
}]
console.log(carsForSale)
totalcars = carsForSale.length+carsForRent.length
console.log(totalcars)


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

for(i=0;i<carsForSale.length;i++)
{
    console.log(carsForSale[i])
}

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
