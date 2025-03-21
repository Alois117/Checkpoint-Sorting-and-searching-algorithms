function insertionSort(arr) {
    const length = arr.length;
    
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = current;
    }
    
    return arr;
}

const arr = [120, 101, 113, 50, 69];
console.log("Original Array:", arr);
console.log("Sorted Array:", insertionSort(arr.slice())); 