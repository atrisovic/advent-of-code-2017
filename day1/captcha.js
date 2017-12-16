function inverseCaptcha2(seq) {
    var sum = 0;
    var rest = 0;
    var half = seq.length / 2;
    for (var i=0; i < seq.length; i++){
        rest = 0;
        if (seq.length <= i+half){
            rest = (i+half)-seq.length;
            if (seq[i]==seq[rest]) sum += parseInt(seq[i]);
        }
        else {
            if (seq[i] == seq[i+half]) sum += parseInt(seq[i]);
        }
    }
    return sum;
}

function inverseCaptcha1(seq) {
   var sum = 0;
   for (var i=0; i<seq.length-1; i++){
       if(seq[i]==seq[i+1]) sum +=parseInt(seq[i]);
   }
   if (seq[0]==seq[seq.length-1]) sum +=parseInt(seq[0]);
   return sum;
}

