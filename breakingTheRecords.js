function breakingRecords(scores) {
    let i=0;
    let bestRecord = scores[0];
    let worstRecord = scores[0];
    let numberOfBestRecords=0;
    let numberOfWorstRecords=0;

        for(i=1;i<scores.length;i++){

            if(scores[i] > bestRecord){
                bestRecord=scores[i];
                numberOfBestRecords= numberOfBestRecords+1;
            }
            if(scores[i] < worstRecord){
                worstRecord=scores[i];
                numberOfWorstRecords=  numberOfWorstRecords+1;
            }
         }
    return [numberOfBestRecords, numberOfWorstRecords];

}
