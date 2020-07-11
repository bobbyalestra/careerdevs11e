/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

let array = [2, 3, 6, 6, 5]

function getSecondLargest(nums) {

    let largestNumber = nums[0];
    let secondLargest = nums[0];

    for (let i = 0; i < largestNumber.length; i++) {
        if (largestNumber < nums[i]){
            secondLargest = largestNumber;
            largestNumber = nums[i]

           
        }else if (nums[i]){

        }

        
    }

}
getSecondLargest(array)
