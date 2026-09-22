function riordina(array) {
    return array.sort((a, b) => b - a);
}

function riordina_crescente(array) {
    return array.sort((a, b) => a - b);
}

let numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4, 12, 25];

console.log(riordina([...numeri]));
console.log(riordina_crescente([...numeri]));