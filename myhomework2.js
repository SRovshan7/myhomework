//2function ascDesNone(a, b){
    if(b === 'Asc'){
        total = a.sort(function(a,b){return a-b})
    }else if(b === 'Des'){
        total = a.sort(function(a,b){return b-a})
    }else if(b === 'None'){
        total = a
    }else{
        total = 'Incorrect Command'
    }
    return total
}
console.log(ascDesNone([4, 3, 2, 1], 'Asc')) //[1, 2, 3, 4]
console.log(ascDesNone([4, 56, 23], 'Des')) //[56, 23, 4]
console.log(ascDesNone([8, 6, 9], 'None')) //[8, 6, 9]

//4 function isSpecialArray(a){
    total = true
    for(let i in a){
        if(i%2 != a[i]%2){
            total = false
        }
    }
    return total
}
console.log(isSpecialArray([2, 3, 4, 7])) //true
console.log(isSpecialArray([2, 3, 4, 8, 6])) //false







