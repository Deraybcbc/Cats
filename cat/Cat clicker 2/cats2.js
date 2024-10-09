let cont1 = 0;
let cont2 = 0;
const ele1 = document.getElementById('gato1');
const ele2 = document.getElementById('gato2');

ele1.addEventListener('click', clickGato1);
ele2.addEventListener('click', clickGato2);

function clickGato1() {
    cont1++
    document.getElementById('cont1').innerHTML = cont1;
}
function clickGato2() {
    cont2++
    document.getElementById('cont2').innerHTML = cont2;
}