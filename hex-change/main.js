const container = document.querySelector('.container');
const color = document.querySelector('.colorInfo');
const hex = color.querySelector('.hex');
const chgBtn = document.querySelector('.clickBtn');


// function hexGenerator() {
  //     const hexCompo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b','c','d','e','f'];
  //     // console.log(hexCompo[`${Math.floor(Math.random()*16)}`]);
  //     let hexInfo = "#" + hexCompo[(Math.floor(Math.random()*16))] + hexCompo[(Math.floor(Math.random()*16))] + hexCompo[(Math.floor(Math.random()*16))] + hexCompo[(Math.floor(Math.random()*16))] + hexCompo[(Math.floor(Math.random()*16))] + hexCompo[(Math.floor(Math.random()*16))];
  
  //     hex.innerHTML = hexInfo;
  //     container.style.background = hexInfo;
  // }
  
  function hexGenerator(length) {
    let hexCompo = '0123456789ABCDEF';
    let randomHex = '';
  
    for ( let i = 0; i < 6; i++) {
      randomHex += hexCompo.charAt(Math.floor(Math.random()*16));
    }
    
    let hexInfo = '#' + randomHex
    hex.innerHTML = hexInfo;
    container.style.background = hexInfo;
  }


  chgBtn.addEventListener('click', () => {
    hexGenerator();
  })
  