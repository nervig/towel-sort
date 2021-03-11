
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined){
        let arr = [];
        return arr;
    }
    else if (matrix.length === 0){
        let arr = [];
        return arr;
    } else {
        let arr = [];
        let new_arrey = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                new_arrey.push(matrix[i]);
            } else {
                new_arrey.push(matrix[i].reverse())
            }
        }
        new_arrey = new_arrey.join()
        arr = new_arrey.split(',').map((new_arrey) => {
            return Number(new_arrey)
        })
        return arr;
    }
}
