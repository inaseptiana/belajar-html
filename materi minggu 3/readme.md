# materi minggu ke 3

---

## _MODULES_

modules adalah membuat codigan menjadi reusable. Reusable adalah code atau codingan yang dapat di gunakan berulang kali. code Reusable yang padat di export dan import ke file javascrip yang lain. di sini bisa mengexport atau mengimport semua data apa pun.

cara membuatnya di dalam html ditambahkan module

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="index.js" type="module"></script>
  </body>
</html>
```

contoh export dan import
javascrip export

```js
let hewan = { gajah, jerapah, harimau };

export { hewan };
```

javascrip import

```js
import { hewan } from "./namaModul.js";
console.log(hewan);
```

## _Recursive_

Recursive adalah function yang memanggil dirinya sendiri sampai kondisi tertentu

ciri dari recursive

1. Fungsi rekursif selalu memiliki kondisi yang menyatakan kapan fungsi tersebut berhenti.
2. Fungsi rekursif selalu memanggil dirinya sendiri sambil mengurangi atau memecahkan data masukan setiap panggilannya. Hal ini penting diingat, karena tujuan utama dari rekursif ialah memecahkan masalah dengan mengurangi masalah tersebut menjadi masalah-masalah kecil.

contoh recursive

```js
function countDown(number) {
  console.log("number rekursif", number);
  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(5);
```
