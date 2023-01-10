const array = [1, 2, 3, 4, 5];
console.log(array.map((data) => data + "등"));
console.log(array.filter((data) => !(data % 2)));
console.log(array.filter((data) => !(data % 2)).map((data) => data + "등"));
