
// You should implement your task here.


module.exports = function towelSort (matrix) {
    try {

        let b = matrix[0];
      
      } catch (err) {
      
        return [];
      
      }
    function resort(arr) {
        let newArr = [];
        for (let i = arr.length-1; i >= 0; i-- ) newArr.push(arr[i]);
        return newArr;
    }

    let otvet = [];
    let stroka = '';

    for (let i = 0; i < matrix.length; i++) {
        if(i%2==0) {otvet.push(matrix[i]);} else {
            otvet.push(resort(matrix[i]));
        }

    }
    otvet.forEach(element => {
      stroka = stroka  + element.join(',') + ',';
  });
   let a = stroka.split(',');
   a.pop();
   return a;
}


