function uniTotal(str){
 let sum = 0;
    if (!str || str.length < 1) return sum;

    for (let i=0; i < str.length; ++i) {
        sum += str.charCodeAt(i);
    }

    return sum;
}