// Hàm lấy mảng string nhập vào
function getInputValue() {
    return document.querySelector('input[name="inputData"]').value;
}

const submitBtn = document.getElementById('sumbitBtn');

submitBtn.addEventListener('click', () => {
    let inputData;
    let maxValue;
    let minValue;
    let maxSumValue = 0;
    let minSumValue = 0;

    // Loại bỏ khoảng trắng giữa các kí tự
    inputData = getInputValue().split(' ');
    
    // Chuyển mảng string sang mảng interger
    for(let i = 0; i < inputData.length; i++){
        inputData[i] = parseInt(inputData[i]);
    }

    // Tìm min, max
    minValue = Math.min(...inputData);
    maxValue = Math.max(...inputData);

    // Tính toán tổng lớn nhất và nhở nhất
    inputData.forEach(value => {
        maxSumValue += value;
    });

    maxSumValue -= minValue; 

    inputData.forEach(value => {
        minSumValue += value;
    });
    minSumValue -= maxValue;

    // Xuất kết quả
    console.log('Mảng đã nhập:', inputData);
    console.log('Giá trị lớn nhỏ nhất, lớn nhất trong mảng:', minValue, maxValue);
    console.log('Giá trị tổng nhỏ nhất và lớn nhất là:',minSumValue, maxSumValue);
    alert(`
        Giá trị tổng nhỏ nhất và lớn nhất là: ${minSumValue}, ${maxSumValue}.
    `);
});