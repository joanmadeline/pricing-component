const basic = document.getElementById('basic');
const professional = document.getElementById('professional');
const master = document.getElementById('master');
let switchBtn = document.getElementById('switchBtn');

const changePrice = () => { 
    // if (basic.innerHTML === '$19.99') {
        basic.innerHTML = '$199.99';
        professional.innerHTML = '$249.99';
        master.innerHTML = '$399.99';
    // }
    // else {
    //     basic.innerHTML = '$19.99';
    //     professional.innerHTML = '$24.99';
    //     master.innerHTML = '$39.99';
    // }
}

switchBtn.addEventListener('click', changePrice);

// let annual = false;

// switchBtn.addEventListener('click', function() {
    // basic.innerHTML = annual ? '$19.99' : '$199.99';
    // professional.innerHTML = annual ? '$24.99' : '$249.99';
    // master.innerHTML = annual ? '$39.99' : '$399.99';
    // annual = !annual;
    // if (basic.innerHTML === '$19.99') {
    //     basic.innerHTML = '$199.99';
    //     professional.innerHTML = '$249.99';
    //     master.innerHTML = '$399.99';
    // }
    // else {
    //     basic.innerHTML = '$19.99';
    //     professional.innerHTML = '$24.99';
    //     master.innerHTML = '$39.99';
    // }
// });