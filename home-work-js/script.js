import { concatStrings } from "./script/task5.js";
import { calculateAverage } from "./script/task4.js";
import { calculateFallDistance } from "./script/task3.js";
import { greet } from "./script/hello.js";
import {celsiusToFahrenheit} from "./script/converter.js";

// 1-е задание
let myName = "Ruslan";
greet(myName);

// 2-е задание
let celsius = prompt("Введите градусы Цельсия: ");
celsiusToFahrenheit(celsius);

// 3-е задание
let time = prompt("Введите время за которое упал объект(сек): ");
calculateFallDistance(time);

// 4-е задание
let result = calculateAverage(5, 6, 11);
alert(`Среднее значение введённых чисел равно: ${result}`);

// 5-е задание
let resultat = concatStrings("Умпа", "Лумпа");
alert(resultat);