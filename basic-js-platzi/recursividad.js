function divisionEntera(dividendo, divisor){
    if(dividendo < divisor){
        return 0;
    }else{
        return 1 + divisionEntera(dividendo - divisor, divisor);
    }
}

function factorial(n){
    if(!this.cache) this.cache = {};
    debugger;
    if (this.cache[n]) this.cache[n];

    if (n === 1 || n === 0) return 1;
    this.cache[n] = n * factorial( n -1);
    debugger;
    return this.cache[n];

}