function getInputFieldById(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputString = inputField.value;
    const input = parseFloat(inputString);
    return input;
}
function setValueById(elementId, area){
    const setOutput = document.getElementById(elementId);
    setOutput.innerText = area;
}


function calcTriangleArea(){
    const base = getInputFieldById('triangle-base');
    const height = getInputFieldById('triangle-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number');
    }else{
        const area = 0.5 * base * height;
        setValueById('triangle-area', area);
    }

}
function calcRectangleArea(){
    const width = getInputFieldById('rectangle-width');
    const length = getInputFieldById('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('Please enter a number');
    }else{
        const area = width * length;
        setValueById('rectangle-area', area);
    }
}
function calcParallelogramArea(){
    const base = getInputFieldById('parallelogram-base');
    const height = getInputFieldById('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number');
    }else{
        const area = base * height;
        setValueById('parallelogram-area', area);
    }
}