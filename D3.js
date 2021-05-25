// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/
let isMale=true
let newVariable= isMale ? 'male':'female'
console.log(newVariable)
/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/
let x = 4
let y=4
if(x||y==8)
{
  console.log("one of them is 8")
} 
else if((x+y)==8)
{
  console.log("sum is 8 ")
}
else if(x-y ==8)
{
  console.log("difference equals to 8")
}
else{
  console.log("neither of the conditions is satisfied")
}
/*
  3. Create a variable which concatenates two strings.
*/
let k = 'strive'+'school'
console.log(k)
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
let a=10,b=12,c=15
if ((a>b)&&(a>c))
{
  if(b>c)
  {
    console.log(a,b,c)
  }
  else
  {
    console.log(a,c,b)
  }
}
else if ((b>a)&&(b>c))
{
  if(a>c)
  {
    console.log(b,a,c)
  }
  else
  {
    console.log(b,c,a)
  }
}else if((c>b)&&(c>a)){
  if(b>a)
  {
    console.log(c,b,a)
  }
  else
  {
    console.log(c,a,b)
  }
}


/*
 5. Write code to find the average of two given integers.
*/
let num1=10
let num2=20
let num3=(num1+num2)/2
console.log(num3)
/* 
  6. Find the longest of two given strings
*/
let s1="sai krishna"
let s2="Reddy"
let l=s1.length
let m=s2.length
if(l>m)
{
  console.log("s1 is longest")
} 
else if(m>l)
{
  console.log("s2 is longest")
} 
else
{
  console.log("s1 == s2")
}
/*
 7. Write code to check whether a value is an integer or not.
*/
let val1=2,val2="hey"
console.log(typeof val1)
console.log(typeof val2)
/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80 */
let number=230
let p=30
let percent=(number*p)/100
console.log(percent)
     

/* 9. Write code to check if a given number is even or odd.*/

let n=23
if(n%2==0){
  console.log("no is even")
}
else{
  console.log("no. is odd")
}