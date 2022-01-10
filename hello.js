//I'm new on Javascript, so I've try this project in this way :) //
function insertionSort(Arr) {
    let n = Arr.length;
        for (let i = 1; i < n; i++) {
            let current = Arr[i];
            let j = i-1; 
            while ((j > -1) && (current < Arr[j])) {
                Arr[j+1] = Arr[j];
                j--;
            }
            Arr[j+1] = current;
            
            console.log(Arr);
        }
    return Arr;
}
let Arr = [22, 27, 16, 2, 18, 6];
console.log("The number we are looking for is in the middle :)\nBig-O shown is => O(n^2)");
insertionSort(Arr);
console.log("End of sorting, Best Case is 2 \nAvarage Case is 16 or 18 \nWorst case is 27");
//4. step;
function newinsertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < 5; i++) {
            let current = arr[i];
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
            
            console.log(arr);
        }
    return arr;
}
let arr = [7, 3, 5, 8, 2, 9, 4, 15, 6];
console.log("Last Situation : \n");
newinsertionSort(arr);

