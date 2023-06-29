<script>
  export let data;
  console.log(data);
</script>

<article>
  <h1>List Customer</h1>
  <a role="button" href="/customer/add">Tambah Customer</a>

  <figure>
    <table>
      <thead>
        <th scope="col">Nama Depan</th>
        <th scope="col">Nama Belakang</th>
        <th scope="col">No Telp</th>
        <th scope="col">Aksi</th>
      </thead>
      <tbody>
        {#each data.customers as customer}
          <tr>
            <td>{customer.FirstName}</td>
            <td>{customer.LastName}</td>
            <td>{customer.Phone}</td>
            <td>
              <a href="/customer/edit/{data.ProductsID}">Edit</a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </figure>
</article>
