const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const bpi = document.querySelector(".bpi");
(async () => {
  const res = await fetch(url);
  const data = await res.json();
  const bpis = Object.values(data.bpi);
  const html = bpis
    .map(
      (bpi) => `
   <div class="card">
    <p>${bpi.code}</p>
    <h1>${bpi.symbol}${bpi.rate}</h1>
    <p>${bpi.description}</p>
  </div>
  `
    )
    .join("");
  bpi.innerHTML = "<h2>BPI</h2>".concat(html);
})();
