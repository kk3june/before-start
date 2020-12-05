const container = document.querySelector('.container');
const color = document.querySelector('.colorInfo');
const hex = color.querySelector('.hex');
const chgBtn = document.querySelector('.clickBtn');

function hexchange() {
    const hexCompo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b','c','d','e','f'];
    // console.log(hexCompo[`${Math.floor(Math.random()*17)}`]);
    let hexInfo = "#" + hexCompo[(Math.floor(Math.random()*17))] + hexCompo[(Math.floor(Math.random()*17))] + hexCompo[(Math.floor(Math.random()*17))] + hexCompo[(Math.floor(Math.random()*17))] + hexCompo[(Math.floor(Math.random()*17))] + hexCompo[(Math.floor(Math.random()*17))];
    console.log(hexInfo);
    console.log(hexInfo[0]);
    console.log(hexInfo[16]);

    hex.innerHTML = hexInfo;
    container.style.background = hexInfo;
}


chgBtn.addEventListener('click', () => {
    hexchange();
})
