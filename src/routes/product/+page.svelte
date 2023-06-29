<script>
  import { formatCurrencyStore } from "$lib/stores/formatCurrency.js";

  export let data;
</script>

<article>
  <h1>List Produk</h1>
  <a role="button" href="/product/add">Tambah Produk</a>

  <figure>
    <table>
      <thead>
        <th scope="col"> Nama Produk </th>
        <th scope="col"> Harga Produk </th>
        <th scope="col"> Aksi </th>
      </thead>
      <tbody>
        {#each data.products as product}
          <tr>
            <td>{product.ProductName}</td>
            <td>{$formatCurrencyStore(product.Price)}</td>
            <td>
              <a href="/product/detail/{product.ProductsID}">Detail</a>
              <a href="/product/edit/{product.ProductsID}">Edit</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </figure>
</article>
