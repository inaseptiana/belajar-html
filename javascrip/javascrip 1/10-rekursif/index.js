function fungsiPangkat(number, pangkat){
    if (pangkat === 1){
        return number;
    } else {
        const hasil = number * fungsiPangkat(number, pangkat - 1);
        console.log("dalam rekursi", hasil);
        return hasil;
    }
}
console.log("fungsi",fungsiPangkat(2,5));