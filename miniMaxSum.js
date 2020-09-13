function miniMaxSum(arr) {

let i=0; let minimun = 0; let maximum = 0;

let maxValue = Math.max(...arr)
let minValue = Math.min(...arr)

for(i=0;i<arr.length;i++){
 if(arr[i] < maxValue){
   minimun=minimun+arr[i];
 } else if(arr[i]==maxValue && arr[i]==minValue){
    minimun=minimun+arr[i]-1
    maximum=maximum+arr[i]-1
 }
 if(arr[i] > minValue){
  maximum=maximum+arr[i]
  }
}
return console.log(minimun + " " + maximum)

}
