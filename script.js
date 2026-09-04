const sizes = [
  "90x150",
  "75x215",
  "75x305",
  "150x215",
  "185x275",
  "305x245",
  "330x245",
];
const types = ["flat", "wool", "outdoor"];
const sku = ["b-147", "b-123", "b-14", "b-56", "b-90", "b-63"];

function alegeRandom(lista) {
  const indexAleatoriu = Math.floor(Math.random() * lista.length);
  return lista[indexAleatoriu];
}

function genereazaCele20deComenzi() {
  const treiNumereRandom = Math.floor(100 + Math.random() * 900);
  let numarCurentComanda = Number(`48${treiNumereRandom}`);

  const corpTabel = document.getElementById("corp-tabel");
  corpTabel.innerHTML = "";

  const rânduriHTML = Array.from({ length: 20 })
    .map(() => {
      const orderId = `r${numarCurentComanda}`;
      numarCurentComanda++;

      return `
        <tr>
          <td>${orderId}</td>
          <td>${alegeRandom(sku)}</td>
          <td>${alegeRandom(sizes)}</td>
          <td>${alegeRandom(types)}</td>
        </tr>
      `;
    })
    .join("");

  corpTabel.innerHTML = rânduriHTML;
}

document
  .getElementById("btn-random")
  .addEventListener("click", genereazaCele20deComenzi);
