const fullBorder = document.getElementById('full-border');
const rightTop = document.getElementById('right-top');
const leftTop = document.getElementById('left-top');
const rightBottom = document.getElementById('right-bottom');
const leftBottom = document.getElementById('left-bottom');
const button = document.getElementById('button');
const border = document.getElementById('border');
const ary = [rightTop, rightBottom, leftTop, leftBottom];
const display = document.getElementById('display');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if(fullBorder.value != '') {
        border.style.borderRadius = fullBorder.value;
        display.innerText = `border-radius: ${ fullBorder.value }`;
    }
    else {
        border.style.borderTopLeftRadius = leftTop.value;
        border.style.borderTopRightRadius = rightTop.value;
        border.style.borderBottomLeftRadius = leftBottom.value;
        border.style.borderBottomRightRadius = rightBottom.value;
        
        display.innerHTML = `border-top-left-radius: ${ (leftTop.value == '') ? "0px" : leftTop.value } <br><br>
                            border-top-right-radius: ${ (rightTop.value) == '' ? "0px" : rightTop.value } <br><br>
                            border-bottom-left-radius: ${ (leftBottom.value) == '' ? "0px" : leftBottom.value } <br><br>
                            border-bottom-right-radius: ${ (rightBottom.value) == '' ? "0px" : rightBottom.value }`;
    }
});

ary.forEach(items => {
    items.addEventListener('focusin', () => {
        fullBorder.value = '';
    });
    fullBorder.addEventListener('focusin', () => {
        items.value = '';
    });
});
