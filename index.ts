const output: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
const valBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.val');
const opBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.op');
const clearBtn: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
const deleteBtn: HTMLButtonElement = document.getElementById('delete') as HTMLButtonElement;
const equationBtn: HTMLButtonElement = document.getElementById('equation') as HTMLButtonElement;

valBtn.forEach((val) => {
    val.addEventListener('click', () => {
        output.value += val.value;
    })
});

opBtn.forEach((val) => {
    val.addEventListener('click', () => {
        if(output.value !== "") {
            output.value += val.value;
        } else {
            return;
        }
    })
})

equationBtn.addEventListener('click', () => {
    if(output.value === "") return;
    output.value = eval(output.value.replace("%", "/100"));
})

clearBtn.addEventListener('click', () => {
    output.value = "";
})

deleteBtn.addEventListener('click', () => {
    output.value = output.value.slice(0, -1);
})