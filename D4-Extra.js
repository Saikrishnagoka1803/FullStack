/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:

*/

let arr=[1,2,3,4,5,"sai"]
let rev=[]
for(let i=0; i<=arr.length-1;i++){
     rev[i]= arr[(arr.length-1)-i] 
     }
console.log(arr)
console.log(rev)


/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
let a=[12,34,567,78,"reddy"]
let b=[]
for(let i=0; i<=a.length-1;i++){
     c=typeof(a[i])
     if(c === 'number')
     {
          b[i]=a[i]
     }
     
}
console.log(a)
console.log(b)
let maxval = b.sort(function(k, l){return k-l})
console.log(maxval)
console.log("Maximum value in the array is:",maxval[maxval.length-1])


/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
let newa=[23,4,56,7,8,89,23,54]
let sortedarray = newa.sort(function(m,n){return n-m})
console.log(sortedarray)
console.log("Minimum value in the given array is:",sortedarray[sortedarray.length-1])

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
let numreicals = [2,3,4,5,6,7,8]
let even =[]
let odd=[]
for (let i=0;i<=numreicals.length-1;i++)
{
     if((numreicals[i]%2)==0)
     {
          even.push(numreicals[i])
     }
     else
     {
          odd.push(numreicals[i])
     }
}
console.log(even)
console.log(odd)

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write the code to delete even entries from an array.
*/
let nums=[1,2,3,4,5,6,7,8,9]
for (let i=0;i<=nums.length-1;i++)
{
     if(nums[i]%2 == 0)
     {
          delete nums[i]
     }
}
console.log(nums)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
let s1 = "Hey strive!, thanks for teaching us"
let vowelsremoved = " "
s = s1.toLowerCase()
for(let i=0;i<=s.length-1; i++)
{
if(s[i] != 'a' && s[i] != 'e' && s[i] != 'i' && s[i] != 'o' &&  s[i] != 'u' )
vowelsremoved+=s[i]
}
console.log(vowelsremoved)

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
let n=[1,2,3,4,5,6]
for (let i=0;i<=n.length-1;i++)
{
     n[i]=n[i]+1
}
console.log(n)

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let str = ["strive", "is", "Great"]
for (let i=0;i<=str.length-1;i++)
{
str[i] = str[i].length
}
console.log(str)
/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/