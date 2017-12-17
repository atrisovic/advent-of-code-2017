function checksum1() {
    var s= "5 1 9 5\n" +
        "7 5 3\n" +
        "2 4 6 8";
    var a = s.split("\n");
    var sum = 0;
    var arr = [];
    a.forEach(function (value) {
        arr = value.split(" ");
        for (var i=0; i<arr.length; i++){
            arr[i]=parseInt(arr[i], 10);
        }
        arr.sort(sortNumber);
        sum += arr[arr.length-1]-arr[0];
    })
    return sum;
}
function sortNumber(a,b) {
    return a - b;
}
function checksum2() {
    var s= "5 9 2 8\n" +
        "9 4 7 3\n" +
        "3 8 6 5";
    var a = s.split("\n");
    var sum = 0;
    var arr = [];
    a.forEach(function (value) {
        arr = value.split(" ").map( Number );
        for (var i=0; i<arr.length; i++){
            for (var j=0; j<arr.length; j++){
                if (arr[i]%arr[j]===0 && arr[i]!=arr[j]){
                    sum+=arr[i]/arr[j];
                    break;
                }
            }
        }
    })
    return sum;
}
console.log(checksum1());
console.log(checksum2());
// test 18, 9
