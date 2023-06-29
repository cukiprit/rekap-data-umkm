<script>
  import { jsPDF } from "jspdf";
  import { onMount } from "svelte";
  import { formatCurrencyStore } from "$lib/stores/formatCurrency.js";
  import Chart from "chart.js/auto";
  import "jspdf-autotable";

  export let data;
  let tableRef;
  let chartgraph;
  let formatCurrency;
  let reportDate = data.reports.map((item) => item.reportDate);
  let sales = data.reports.map((item) => item.sales);
  let balance = data.reports.map((item) => item.balance);

  console.log(sales);

  formatCurrencyStore.subscribe((value) => {
    formatCurrency = value;
  });

  const exportTableAsPDF = () => {
    const doc = new jsPDF();
    const chartImg = chartgraph.toDataURL("image/png");
    doc.setFont("roboto", "bold");

    doc.setFontSize(20);
    doc.text("Laba UMKM", 15, 10);
    doc.autoTable({ html: tableRef });
    doc.addImage(chartImg, "PNG", 15, 80, 180, 80);
    doc.text("Grafik Laba UMKM", 15, 70);

    doc.save("table_report.pdf");
  };

  onMount(async () => {
    let ctx = chartgraph.getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: reportDate,
        datasets: [
          {
            label: "Penjualan",
            data: sales,
          },
          {
            label: "Saldo",
            data: balance,
          },
        ],
      },
    });
  });
</script>

<div class="grid">
  <article>
    <div>
      <h5>Profit</h5>
    </div>
  </article>

  <article>
    <div>
      <h5>Pengunjung</h5>
    </div>
  </article>

  <article>
    <div>
      <h5>Pesanan</h5>
    </div>
  </article>
</div>

<article>
  <div class="grid">
    <div>
      <h1>Data Laba</h1>
    </div>
    <div />
    <div />
    <div>
      <button on:click={exportTableAsPDF}>Print as pdf</button>
    </div>
  </div>

  <figure>
    <table bind:this={tableRef}>
      <thead>
        <tr>
          <th scope="col">Tanggal Laporan</th>
          <th scope="col">Saldo</th>
          <th scope="col">Penjualan</th>
          <th scope="col">Inventaris Toko</th>
          <th scope="col">Gaji Karyawan</th>
          <th scope="col">Laba</th>
        </tr>
      </thead>
      {#each data.reports as penjualan}
        <tbody>
          <tr>
            <th scope="row">{penjualan.reportDate}</th>
            <td>{formatCurrency(penjualan.balance)}</td>
            <td>{formatCurrency(penjualan.sales)}</td>
            <td>{formatCurrency(penjualan.inventory)}</td>
            <td>{formatCurrency(penjualan.salary)}</td>
            <td
              >{formatCurrency(
                penjualan.balance +
                  penjualan.sales -
                  (penjualan.inventory + penjualan.salary)
              )}</td
            >
          </tr>
        </tbody>
      {/each}
    </table>
  </figure>
</article>

<article>
  <canvas bind:this={chartgraph} />
</article>
