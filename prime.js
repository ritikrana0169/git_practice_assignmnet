function prime(n){
    if(n<2 || n==undefined){
        return false;
    }else{
        for(let i=2; i<=n**0.5; i++){
            if(n%i==0){
                return false;
            }
        }
    }
    return true;
}

prime(5);