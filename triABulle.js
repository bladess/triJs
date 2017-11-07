var tab = [33, 28, 90, 20, 95, 34, 91, 56, 4, 63, 19, 73, 15, 70, 94, 9, 35, 64, 53, 43, 13, 74, 23, 49, 76, 84, 88, 45, 69, 98, 25, 100, 22, 21, 57, 83, 38, 36, 61, 99, 54, 5, 52, 32, 7, 75, 44, 51, 71, 67, 31, 42, 79, 60, 14];


function triABulle(array){

    var checkMove = true;
    var transi = 0;
    while(checkMove){
        checkMove = false;
        for(var i = 0; i < array.length-1 ;i++){
            if(array[i] > array[i+1]){
                transi = array[i];
                array[i] = array[i+1];
                array[i+1] = transi;
                checkMove = true;
            }
        }

   }
   return array;
}

console.log(triABulle(tab));