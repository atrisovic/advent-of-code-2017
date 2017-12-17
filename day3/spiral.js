function spiral(num) {
    var k = 0;
    var sum = 1;
    while(sum <= num){
        sum += 8*k;
        k++;
    }
    k=k-1;
    var n = k*8; // number of el in the ring
    var len = Math.floor((n/4)/2); // column length/2
    var p = sum; // last number in the ring
    var c = p - len;
    var r = c - 2*len;
    var o = r - 2*len;
    var s = o - 2*len;
    var ad = Math.min(Math.abs(c-num), Math.abs(r-num), Math.abs(o-num), Math.abs(s-num));
    return ad+k;
}

//test 552
console.log(spiral(325489));