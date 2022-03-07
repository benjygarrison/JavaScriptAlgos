//--ALGO Problem-solving patterns--

//Frequency counters [O(n)] / replaces nested for loop [O(n)2]:
//Useful when comparing two structures against each other to see if
//matching in some way. Create empty objects and compare counts within.

//Ex (comparing square of arr1 in arr2):

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

// function anagram(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     } //mismatched length = false
//
//     let freqCount1 = {}
//     let freqCount2 = {}
//
//     //add empty objects to compare
//     for(let val of arr1){
//         freqCount1[val] = (freqCount1[val] || 0) + 1
//     }
//     for(let val of freqCount2){
//         freqCount2[val] = (freqCount2[val] || 0) + 1
//     }
//
//     console.log(freqCount1);
//     console.log(freqCount2);
//
//     //compare
//     for(let key in freqCount1){
//         if(!(key ** 2 in freqCount2)){
//             return false //make sure a corresponding value exists
//         }
//         if(freqCount2[key ** 2] !== freqCount1[key])
//         return false //make sure correct no. of corresponding values exist
//     }
//
//     return true
//
// }
//
// anagram('aaz', 'zza')
// anagram('anagram', 'nagaram')
// anagram('rat', 'car')
// anagram('awesome', 'awsseom')
