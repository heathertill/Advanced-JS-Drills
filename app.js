let fruits = ['apple', 'orange', 'banana'];

function printFruit() {
    let favFruit = fruits[1];

    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        let leastFav = fruits[2];
    }
    printFavFruit();
}

printFruit();

hello();
function hello() {
    console.log('Hello');
}


let ohNo = function() {
    alert('Did this work?');
};
ohNo();