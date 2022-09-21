function countingValleys(steps, path) {
    // Write your code here
  let str = path.split('')
    let count = 0
    let bag = 0
    for(let p=0; p<steps; p++){
        if(count == 0 && str[p].toLowerCase() == 'd'){
            count=count-1
            bag =bag+1
        } else if(str[p].toLowerCase() == 'd'){
            count =count-1
        } else {
            count =count+1
        }
    }
    return bag
 
}