const maca = {
    value: 2,
}

const laranja = { 
    value: 3,
}


function mapComThis(arr, thisArg)
{
    return arr.map(function(item)
    {
       return item * this.value;
    }, thisArg);
}


const nuns = [1, 2];

console.log('this -> maçã', mapComThis(nuns, maca));

console.log('this -> laranja',mapComThis(nuns, laranja));