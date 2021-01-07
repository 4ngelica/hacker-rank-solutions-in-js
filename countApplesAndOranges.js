var applePosition = [];
var orangePosition = [];
var numOfApples = 0;
var numOfOranges = 0;

for(var i=0;i<apples.length; i++){
	applePosition.push(a+apples[i]);
}

for(var j=0;j<oranges.length; j++){
	orangePosition.push(b+oranges[j]);
}

for(var k=0;k<applePosition.length; k++){
	if(applePosition[k]>=s && applePosition[k]<=t){
  numOfApples++;
  }
}

for(var l=0;l<orangePosition.length; l++){
	if(orangePosition[l]>=s && orangePosition[l]<=t){
  numOfOranges++;
  }
}

console.log(numOfApples)
console.log(numOfOranges)
