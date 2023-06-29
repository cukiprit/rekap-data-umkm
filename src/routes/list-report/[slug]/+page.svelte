<script>
  // import { page } from "$app/stores";
  // const params = $page.url.pathname.substr(13);

  // console.log(params);
  export let data;

  const {
    balance,
    createdAt,
    inventory,
    reportDate,
    reportId,
    salary,
    sales,
    keterangan,
    updateAt,
  } = data.reports[0];
  // console.log(data.reports[0].balance);
</script>

<article>
  <h1>{reportId}</h1>
  <h5>Created at: {reportDate}</h5>

  <form method="post">
    <div class="grid">
      <label for="saldo">Saldo</label>
      <input type="number" name="balance" value={balance} />
    </div>

    <div class="grid">
      <label for="date">Tanggal Laporan</label>
      <input type="date" name="reportDate" value={reportDate} />
    </div>

    <div class="grid">
      <label for="penjualan">Penjualan</label>
      <input type="number" name="sales" value={sales} />
    </div>

    <div class="grid">
      <label for="inventaris">Inventaris Toko</label>
      <input type="number" name="inventory" value={inventory} />
    </div>

    <div class="grid">
      <label for="Gaji">Gaji Karyawan</label>
      <input type="number" name="salary" value={salary} />
    </div>

    <div class="grid">
      <label for="keterangan">Keterangan</label>
      <textarea rows="7"
        >{keterangan !== "" ? "Tidak ada keterangan" : keterangan}</textarea
      >
    </div>

    <div class="grid">
      <button formaction="?/delete" type="submit">Delete</button>
      <button formaction="?/update" type="submit">Update</button>
    </div>
  </form>
</article>
