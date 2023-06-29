<script>
  import { jsPDF } from "jspdf";
  import { formatCurrencyStore } from "$lib/stores/formatCurrency.js";
  import "jspdf-autotable";

  export let data;
  let tableRef;
  let formatCurrency;

  formatCurrencyStore.subscribe((value) => {
    formatCurrency = value;
  });

  // console.log(data.reports);

  const printPdf = () => {
    const doc = new jsPDF();
    doc.setFont("roboto");
    doc.setFontSize(20);

    doc.text(
      `Laba UMKM ${data.reports[0].reportDate} - ${
        data.reports[data.reports.length - 1].reportDate
      }`,
      15,
      20
    );
    doc.autoTable({ html: tableRef });

    doc.save("table_report.pdf");
  };
</script>

<article>
  <figure>
    <div class="grid">
      <div />
      <div />
      <div />
      <div />
      <button on:click={printPdf}>Export as pdf</button>
    </div>
    <table bind:this={tableRef}>
      <thead>
        <th scope="col">Tanggal Laporan</th>
        <th scope="col">Saldo</th>
        <th scope="col">Penjualan</th>
        <th scope="col">Inventaris Toko</th>
        <th scope="col">Gaji Karyawan</th>
        <th scope="col">Laba</th>
        <th>Detail</th>
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
            <td>
              <a role="button" href="/list-report/{penjualan.reportId}"
                >Detail</a
              >
            </td>
          </tr>
        </tbody>
      {/each}
    </table>
  </figure>
</article>
