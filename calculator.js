function calculate() {  
    // 获取输入的值  
    let num1 = document.getElementById('num1').value;  
    let num2 = document.getElementById('num2').value;  

    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {  
        console.error("请确保输入的是有效的数字。");  
        alert("输入无效，请输入有效的数字！");  
        return; 
    }  

    let result = parseFloat(num1) + parseFloat(num2);  

    alert('结果是: ' + result);  
}