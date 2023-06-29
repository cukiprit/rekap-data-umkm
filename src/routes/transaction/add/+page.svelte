<script>
  import { formatCurrencyStore } from "$lib/stores/formatCurrency.js";

  export let data;
  let selectedIDCus;
  let selectedIDProduct;
  let quantity = 1;
  let totalAmount;
  let restore;
  console.log(data);

  $: {
    const selectedProduct = data.dataProd.find(
      (d) => d.ProductsID === selectedIDProduct
    );
    totalAmount = selectedProduct
      ? $formatCurrencyStore(selectedProduct.Price * quantity)
      : $formatCurrencyStore(0);
  }
</script>

<h1>Tambah Transaksi</h1>

<article>
  <form method="post">
    <div class="grid">
      <label for="Order Date">Order Date</label>
      <input type="date" name="OrderDate" />
    </div>

    <div class="grid">
      <label for="Customer ID">Nama Customer</label>
      <select name="CustomersID" bind:value={selectedIDCus}>
        <option value="">Pilih Customer</option>
        {#each data.dataCus as cusID}
          <option value={cusID.CustomersID}>{cusID.FirstName}</option>
        {/each}
      </select>
    </div>

    <div class="grid">
      <label for="Customer ID">Nama Product</label>
      <select name="CustomersID" bind:value={selectedIDProduct}>
        <option value="">Pilih Product</option>
        {#each data.dataProd as prodID}
          <option value={prodID.ProductsID}>{prodID.ProductName}</option>
        {/each}
      </select>
    </div>

    <div class="grid">
      <label for="Customer ID">Jumlah Product</label>
      <input
        type="number"
        bind:value={quantity}
        name="Quantity"
        placeholder="Jumlah Produk"
      />
    </div>

    <div class="grid">
      <label for="Customer ID">Total</label>
      <input type="text" bind:value={totalAmount} name="TotalAmount" disabled />
    </div>

    <button type="submit">Upload</button>
  </form>
</article>
