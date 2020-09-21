function bonAppetit(bill, k, b) {

  let i=0; let result=0;
  let remove = bill.splice(k,1);
  
    for(i=0;i<bill.length;i++){
        result=result+bill[i]
    }

  let actual = result/2;
    if((actual - b )==0){
        console.log("Bon Appetit");
    }else{
        console.log((Math.abs(actual-b)))
    }
}
