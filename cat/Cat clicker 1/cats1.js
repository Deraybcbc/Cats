let cont = 0;
const ele = document.getElementById('gato');
ele.addEventListener('click', clickGato);

function clickGato() {
    cont++
    document.getElementById('cont').innerHTML = cont;
}