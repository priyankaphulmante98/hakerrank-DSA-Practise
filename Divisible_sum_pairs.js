function divisibleSumPairs(n, k, ar) {
    // Write your code here
     let count=0;
    for(let p=0; p<n; p++){
        for(let q=p+1; q<n; q++){
            if((ar[p]+ar[q])% k==0){
                count++;
            }
        }
        }
   return count;
}