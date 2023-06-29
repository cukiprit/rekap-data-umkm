<script>
  export let data;
  console.log(data);
</script>

<div>
  <h1>Laporan Laba Rugi</h1>

  <form method="post">
    <div class="grid">
      <label for="saldo"> Saldo </label>
      <input type="number" name="balance" placeholder="Masukkan jumlah saldo" />
    </div>

    <div class="grid">
      <label for="date">Tanggal Laporan</label>
      <input type="date" name="reportDate" />
    </div>

    <div class="grid">
      <label for="title">Penjualan</label>
      <input
        name="sales"
        type="number"
        placeholder="Masukkan jumlah penjualan"
      />
    </div>

    <div class="grid">
      <label for="title">Inventaris Toko</label>
      <input
        name="inventory"
        type="number"
        placeholder="Masukkan jumlah inventaris toko"
      />
    </div>

    <div class="grid">
      <label for="title">Gaji Karyawan</label>
      <input
        name="salary"
        type="number"
        placeholder="Masukkan jumlah gaji karyawan"
      />
    </div>

    <div class="grid">
      <label for="keterangan">Keterangan</label>
      <textarea rows="7" placeholder="Masukkan keterangan" />
    </div>

    <div class="grid">
      <button type="submit">Input</button>
    </div>
  </form>
</div>
