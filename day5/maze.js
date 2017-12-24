function maze1(array){
    var pos = 0;
    var offset=0;
    var c = 0;
    while (pos >= 0 && pos < array.length){
        offset = array[pos];
        array[pos] = array[pos]+1;
        c+=1;
        pos = pos + offset;
    }
    return c;
}


function maze2(array){
    var pos = 0;
    var offset=0;
    var c = 0;
    while (pos >= 0 && pos < array.length){
        offset = array[pos];
        if(offset >= 3){
            array[pos] = array[pos]-1;
        }
        else {
        array[pos] = array[pos]+1;}
        c+=1;
        pos = pos + offset;
    }
    return c;
}


var array = [0,3,0,1,-3];
console.log(maze2(array)); // 10