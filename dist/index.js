"use strict";
const output = document.getElementById('display');
const valBtn = document.querySelectorAll('.val');
const opBtn = document.querySelectorAll('.op');
const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const equationBtn = document.getElementById('equation');
valBtn.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
    });
});
opBtn.forEach((val) => {
    val.addEventListener('click', () => {
        if (output.value !== "") {
            output.value += val.value;
        }
        else {
            return;
        }
    });
});
equationBtn.addEventListener('click', () => {
    if (output.value === "")
        return;
    output.value = eval(output.value.replace("%", "/100"));
});
clearBtn.addEventListener('click', () => {
    output.value = "";
});
deleteBtn.addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
});
