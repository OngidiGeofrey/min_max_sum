// Javascript program to count pairs whose sum divisible by 'K'

// define a function min_max_sum
function minMaxSum(array) {
// declare and initialize variables sum, minimum_value, maximum_value

    var sum = array[0],
        min = array[0],
        max = array[0];
        
//iterate through each element of the array from index 1 to index array.length-1
    for (let i = 1; i < array.length; i++) {

        // find new value of sum by adding element at index array[i] to sum
        sum += array[i];

        /*Test if minimum_value is greater than element at index array[i], 
        assign element array[i] as the new minimum value */
        if (min > array[i]) 
            min = array[i];

        /*Test if minimum_value is greater than element at index array[i], 
        assign element array[i] as the new minimum value */
        if (max < array[i]) 
            max = array[i];
    }

    
// output the message to the web console
    console.log(`${sum-max} ${sum-min}`);


}
// call function MinMAxSum
minMaxSum([1, 3, 5, 7, 9]);
