function plusMinus(arr) {
    let positive =0;
    let negative = 0;
    let zero =0;
    let length = arr.length;
   // Write your code here
  
    for(let p=0; p<arr.length; p++){
        if(arr[p]>0)
           positive+=1;
        else if(arr[p]<0)
          negative+=1;
        else
           zero++;
    }
   console.log((positive /length).toFixed(6));
   console.log((negative /length).toFixed(6));
   console.log((zero /length).toFixed(6));
}