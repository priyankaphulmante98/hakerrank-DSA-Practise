function compareTriplets(a, b) {
    // Write your code here\
   
    let alice = 0; 
    let bob = 0;
for(let p=0; p<a.length; p++){
    if(a[p] > b[p]){
        alice=alice+1;
    }else if(a[p] < b[p]){
        bob= bob+1;
    }else{
        alice = alice;
        bob=bob;
    }
}
   return [alice, bob];
           
}