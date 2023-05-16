"use strict";
const output = document.getElementById('display');
const valE1 = document.querySelectorAll('.val');
const clear = document.getElementById('clear');
const deleteE = document.getElementById('delete');
const equation = document.getElementById('equation');
valE1.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
    });
});
equation.addEventListener('click', () => {
    output.value = eval(output.value.replace("%", "/1"));
});
clear.addEventListener('click', () => {
    output.value = "";
});
deleteE.addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
});
