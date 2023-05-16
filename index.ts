const output: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
const valE1: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.val');
const clear: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
const deleteE: HTMLButtonElement = document.getElementById('delete') as HTMLButtonElement;
const equation: HTMLButtonElement = document.getElementById('equation') as HTMLButtonElement;

valE1.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
    })
});

equation.addEventListener('click', () => {
    output.value = eval(output.value.replace("%", "/1"));
})

clear.addEventListener('click', () => {
    output.value = "";
})

deleteE.addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
})