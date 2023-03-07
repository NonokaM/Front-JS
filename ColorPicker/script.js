// console.log(document.querySelector('#colorPicker').value);
// document.querySelector('#colorText').textContent = `ColorCode:${document.querySelector('#colorPicker').value}`;

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// アロー関数
const colorBg = () => {
    text.textContent = `カラーコード:${color.value}`;
}

color.addEventListener('input', colorBg);
