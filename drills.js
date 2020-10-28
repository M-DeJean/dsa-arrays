const array = {
    URLify(string) {
        console.log(string.trim().replace(/\s/g, '%20'))
        return;
    },

    filter(array, num) {
        arr = []
        for (let i = 0; i < array.length; i++) {
            if (array[i] > num) {
                arr.push(array[i])
            }
        }
        console.log(arr)
        return;
    },

    maxSum(arr) {
        if (arr.length === 0)
            return 'length cannot be zero';

        let max = arr[0];
        let total = arr[0];
        for (let i = 1; i < arr.length; i++) {
            total += arr[i];
            if (total > max)
                max = total;

        }
        console.log(max)
        return;
    },

    merge(array1, array2) {
        let result = [...array1, ...array2];
        result.sort();
        console.log(result);
        return

    },

    remove(string, chars) {
        let newString = '';
        for (let i = 0; i < string.length; i++) {
            let counter = 0;
            for (let j = 0; j < chars.length; j++) {
                if(chars[j] !== string[i]) {
                    counter++;
                }
            }
            if(counter === chars.length)
                newString += string[i]
        }
        console.log(newString)
        return;
    },

    multiplyNonIndex(nums) {
        let output = [...nums]
        output.fill(1)
        console.log(output);
        let ticks = 0;  
        for (let i = 0; i < output.length; i++) {
            //console.log('OUTER')
            for (let j = 0; j < nums.length; j++){
                //console.log('INNER')
                if(i !== j)
                    output[i] *= nums[j];
            }  
        }

        console.log(output)
        return;
    }

}

// let myArray = [5, 1, 3]
// //array.filter(myArray, 5)
// // array.URLify('malik was here')
// let test = [4, 6, -3, 5, -2, 1];
// array.maxSum(test);
// array.merge(myArray, test);
// let removeString = 'Battle of the Vowels: Hawaii vs. Groznys'
// let removeChars = 'aeiou'
// array.remove(removeString, removeChars)
let mult = [1, 3, 9, 4];
array.multiplyNonIndex(mult);