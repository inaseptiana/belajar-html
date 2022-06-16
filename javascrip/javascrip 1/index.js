
String.prototype.repeatString = function (n) {

    return this.repeat (n);
}
console.log("skilvul".repeatString(5));


String.prototype.reverseSring = function () {
    const splitString = this.split("");
    console.log(splitString);

    const reverseArray = splitString.reverse();
    console.log(reverseArray);

    const joinArray = reverseArray.join("");
    console.log(joinArray);
    return joinArray;
}
console.log("skilvul".reverseSring());

let buah = ["apel", "mangga", "pisang"]

function printArrya (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArrya(buah)