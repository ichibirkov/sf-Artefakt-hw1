//сортируем массивы по возрастанию
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);


//выводим данные из массива заглавными буквами
array = ["Один", "Два", "Три", "Четыре"];

array.forEach(function(element, index, array) {
    array[index] = element.toUpperCase();
});

console.log(array);