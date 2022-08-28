function miniMaxSum(arr) {
    // Write your code here
let sum=arr.reduce((a,b) => {
    return a+b;
});
const min=sum-Math.max(...arr);
const max=sum-Math.min(...arr);

console.log(min+" "+max);

}
