var addTwoNumbers = function(l1, l2) {
    let twoD = new Array(l1, l2);
    let twoDsort = twoD.sort((l1, l2) => l1.length - l2.length);
    let finSort;
    console.log(twoDsort);
    if (twoDsort[0].length != twoDsort[1].length) {
        while (twoDsort[0].length != twoDsort[1].length) {
            twoDsort[0].push(0);
        }
        finSort = twoDsort[0].reverse();
    }
    console.log(finSort);
   
    let sum = finSort.map((e, i) => Number(e.join(','))).
    reduce((a, c) => a + c);
    console.log(sum);

    return Array.from(sum + '').
    map(e => Number(e)).reverse();

    //console.log(twoSum);
};

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]);