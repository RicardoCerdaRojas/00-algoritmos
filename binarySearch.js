'use strict'

function binarySearch(arr, value, since = 0, until){
    until = arr.length

    function _binarySearch(arr, value, since, until){

        let index = Math.floor((since + until) / 2)
        let middleValue = arr[index]

        console.log({index, since, until, value})

        if(middleValue === value){
            return 'Esta en la posición [' + index + ']'
        }

        if(! index || index === (arr.length-1))
            return 'No esta en el areglo [' + -1 + ']'

        if(index === since || index === until)
            return 'No esta en el areglo [' + -1 + ']'

        if(value < middleValue)
            return _binarySearch(arr, value, since, index)
        else
            return _binarySearch(arr, value, index, until)
    }
    return _binarySearch(arr, value, since, until)

}

console.log('inicio secuencia...')
const arr = []
const valuesToAdd = 22
const binarySearchalue = 100//Math.floor(valuesToAdd * Math.random()) + 1
const indexOfValue = Math.floor(valuesToAdd * Math.random()) + 1
//console.time('FillArray')


let _valuesToAdd = valuesToAdd

for(let i = 1; i < valuesToAdd + 1; i++)
{
    if (i == 15){
        arr.push(99)
    }
    else
        arr.push(i)
}
/*

while(_valuesToAdd){
    arr.push(_valuesToAdd)
    _valuesToAdd--
}
*/

// Otro comentario

console.log('arr.length: ' + arr.length)
console.log(arr)
console.log('resultado: ', binarySearch(arr, binarySearchalue))
process.exit()


console.log({binarSearchValue, indexOfValue})
console.time('binarySearch')
binarySearch(arr, binarySearchalue)
console.timeEnd('binarySearch')

console.time('indexOf')
arr.indexOf(indexOfValue)
console.timeEnd('indexOf')

