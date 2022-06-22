const analyzeArray = (arr) => {
    const isNumArray = (arr) => {
        if (Array.isArray(arr)) {
          for (let item of arr) {
            if (typeof item !== 'number') {
              return false;
            }
          }
        } else {
          return false;
        }
        return true;
      }

    if(!isNumArray(arr)){
        return 'Array contains a non number'
        }else{
        let max = arr[0]
        let min = arr[0]
        let sum = 0
        length = arr.length


        for( let i = 0; i < arr.length; i++){
            if(arr[i] > max){
            max = arr[i]
            }
            if (arr[i] < min){
                min = arr[i]
            }
            sum = sum + arr[i];
        }
        let average = sum / arr.length
        const analyzedArray = {
            average: average,
            min: min,
            max: max,
            length: length,      
        }
        return analyzedArray
        } 

}

module.exports = analyzeArray