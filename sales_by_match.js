function sockMerchant(n, ar) {
    let count=0;
    ar.sort();
   //  console.log(ar);
   for(let p=0; p<n; p++){
       if(ar[p]==ar[p+1]){
            p++;
            count++;
       }
   }
   return count;
   }
   