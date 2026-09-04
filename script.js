let ordersJson = [];
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

let orderDin = true;

fetch("./orders/fakeOrders.json")
  .then((response) => response.json())
  .then((data) => {
    ordersJson = data;
    genereazaCele20deComenzi();
  })
  .catch((err) => {
    console.error("Eroare la încărcarea JSON-ului:", err);
    genereazaCele20deComenzi();
  });

function alegeRandom(lista) {
  const indexAleatoriu = Math.floor(Math.random() * lista.length);
  return lista[indexAleatoriu];
}

function genereazaCele20deComenzi() {
  const treiNumereRandom = Math.floor(100 + Math.random() * 900);
  let numarCurentComanda = Number(`48${treiNumereRandom}`);

  const corpTabel = document.getElementById("corp-tabel");

  const randuriHTML = Array.from({ length: 20 })
    .map((_, index) => {
      const orderIdRandom = `r${numarCurentComanda}`;
      numarCurentComanda++;

      const comandaDinJson =
        ordersJson && ordersJson.length > 0
          ? ordersJson[index % ordersJson.length]
          : null;

      if (orderDin && comandaDinJson) {
        return `
          <tr>
            <td>${comandaDinJson.orderId}</td>
            <td>${comandaDinJson.SKU}</td>
            <td>${comandaDinJson.rugSize}</td>
            <td>${comandaDinJson.rugType}</td>
          </tr>
        `;
      } else {
        return `
          <tr>
            <td>${orderIdRandom}</td>
            <td>${alegeRandom(sku)}</td>
            <td>${alegeRandom(sizes)}</td>
            <td>${alegeRandom(types)}</td>
          </tr>
        `;
      }
    })
    .join("");

  corpTabel.innerHTML = randuriHTML;
}

document.getElementById("btn-random").addEventListener("click", () => {
  orderDin = false;
  genereazaCele20deComenzi();
});

document.getElementById("btn-static").addEventListener("click", () => {
  orderDin = true;
  genereazaCele20deComenzi();
});
