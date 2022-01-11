let addTwoNumbers = function(l1, l2) {
    let twoD = new Array(l1, l2);
    let twoDsort = twoD.sort((l1, l2) => l1.length - l2.length);
    
    if (twoDsort[0].length != twoDsort[1].length) {
        while (twoDsort[0].length != twoDsort[1].length) {
            twoDsort[0].push(0);
        }
        twoDsort[0].reverse();
    }
    
    let sum = twoDsort.map(e => Number(e.join(''))).
    reduce((a, c) => a + c);

    return Array.from(sum + '').
    map(e => Number(e)).reverse();
};

addTwoNumbers([2,4,3], [5,6,4]);