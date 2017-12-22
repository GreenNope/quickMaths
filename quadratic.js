function getFactors(n) {
    factorArray = []
    n % 2 == 0 ? interval = 1 : interval = 2;
    for (i = 1; i <= n^0.5; i = i + interval) {
        if (n % i == 0) {
            factorArray.push([i, n/i])
            
        }
    
    
    
    
    }
}