function diagonalDifference(arr) {
    // Write your code here
    var one = 0; 
    var two = 0;
    for(let p=0; p<arr.length; p++){
        for(let q=0; q<arr.length; q++){
    if(p==q){
        one=one+arr[p][q];
    //     console.log(one);
     }
    if(p+q == arr.length-1){
        two= two +arr[p][q];
    }
        }
    }

    return Math.abs(one - two);

}