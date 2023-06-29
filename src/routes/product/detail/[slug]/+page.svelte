<script>
  import { formatCurrencyStore } from "$lib/stores/formatCurrency.js";
  export let data;
  let formatCurrency;

  formatCurrencyStore.subscribe((value) => {
    formatCurrency = value;
  });

  const { ProductsID, ProductName, Description, Price, createdAt } =
    data.product[0];
</script>

<article class="text-align-center">
  <h1>Detail Produk</h1>
  <div class="headings">
    <h2>{ProductName}</h2>
    <h4>{formatCurrency(Price)}</h4>
    <h5>{createdAt}</h5>
  </div>
  <p>
    {Description}
  </p>
</article>
