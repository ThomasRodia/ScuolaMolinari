const pos_1 = document.getElementById('Posizione1');
const pos_2 = document.getElementById('Posizione2');
const listaDisplay = document.getElementById('listaDisplay');
const button = document.getElementById('buttonInsert');
let lista = [1, 2, 3, 4, 5];
console.log(lista);
Array.prototype.swap = function (lista, pos1, pos2) {
  let a = lista[pos1];
  lista[pos1] = lista[pos2];
  lista[pos2];
};

button.onclick = () => {
  render();
};

const render = () => {
  divElemento.innerText = value;
  listaDisplay.innerText = '[' + lista.join(',') + ']';
  inputInsert.value = '';
};
