function compareTriplets(a, b) {
let aliceScore = 0;
let bobScore = 0;
let i=0;

for(i=0;i<a.length;i++){
  if(a[i]>b[i]){
    aliceScore = aliceScore +1;
  }else if(a[i]<b[i]){
    bobScore = bobScore +1;
  }else{
    continue
  }
}

return[aliceScore,bobScore];
}
