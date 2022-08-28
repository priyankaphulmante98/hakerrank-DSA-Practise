function staircase(n) {
    // Write your code 
for(let p=0; p<n; p++){
    const bag=Array(p+1).fill("#").join("").padStart(n);     
    console.log(bag);
     }
   }


//   'abc'.padStart(10, "foo");  // "foofoofabc"
// 'abc'.padStart(6,"123465"); // "123abc"