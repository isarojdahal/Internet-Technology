function add(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let result = num1 + num2;

    // document.write("result  is "+result);

    document.getElementById("result").innerHTML = `<b>Result is ${result}</b>`;
}