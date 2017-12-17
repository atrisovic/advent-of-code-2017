function passphrase1(s) {
    var a = s.split("\n");
    var sum = 0;
    var arr = [];
    a.forEach(function (value) {
        arr = value.split(" ");
        arr.sort();
        for(var i=0; i<arr.length-1; i++){
            if(arr[i]===arr[i+1]) {sum-=1; break;}
        }
        sum += 1;
    })
    return sum;
}

function passphrase2(s) {
    var a = s.split("\n");
    var sum = 0;
    var arr = [];
    a.forEach(function (value) {
        arr = value.split(" ");
        for (var i=0; i<arr.length; i++){
            arr[i]=arr[i].split('').sort().join('');
        }
        arr.sort();
        for(var i=0; i<arr.length-1; i++){
            if(arr[i]===arr[i+1]) {sum-=1; break;}
        }
        sum += 1;
    })
    return sum;
}

var k="aa bb cc dd ee\n" +
    "aa bb cc dd aa\n" +
    "aa bb cc dd aaa";

var in2= "abcde fghij\n" +
    "abcde xyz ecdab\n" +
    "a ab abc abd abf abj\n" +
    "iiii oiii ooii oooi oooo\n" +
    "oiii ioii iioi iiio";

console.log(passphrase1(k));
console.log(passphrase2(in2));
// test 2,3
