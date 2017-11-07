var tab = [33, 28, 90, 20, 95, 34, 91, 56, 4, 63, 19, 73, 15, 70, 94, 9, 35, 64, 53, 43, 13, 74, 23, 49, 76, 84, 88, 45, 69, 98, 25, 100, 22, 21, 57, 83, 38, 36, 61, 99, 54, 5, 52, 32, 7, 75, 44, 51, 71, 67, 31, 42, 79, 60, 14];


function triDeMerde(okay) {
    var trans;
    for (var i = 0; i < okay.length; i++) {
        for (var j = i + 1; j < okay.length; j++) {
            if (okay[i] > okay[j]) {
                trans = okay[i];
                okay[i] = okay[j];
                okay[j] = trans;
            }
        }
    }
    return okay;
}
console.log(triDeMerde(tab));