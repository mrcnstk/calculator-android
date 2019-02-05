var bracketsIteration=0;

function insert(num) {
    document.form.textbox.value = document.form.textbox.value+num;
}

function equal() {
    var result = document.form.textbox.value;
    if(result){
    document.form.textbox.value = eval(result);
    }
}

function c() {
    document.form.textbox.value = '';
}
function percen() {
    document.form.textbox.value = document.form.textbox.value*0.01;
}
function brackets() {
    if(bracketsIteration%2 === 0)
    document.form.textbox.value = document.form.textbox.value +"(";
    else
    document.form.textbox.value = document.form.textbox.value +")";
    bracketsIteration++;
}

function neg() {
    if(document.form.textbox.value) {
        document.form.textbox.value = document.form.textbox.value*(-1);
    }
}
