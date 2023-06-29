<script>
  export let data;
  const { ProductName, Description, Price } = data.product[0];
</script>

<h1>Edit Product</h1>

<article>
  <form method="post">
    <div class="grid">
      <label for="Product Name">Product Name </label>
      <input type="text" name="ProductName" value={ProductName} />
    </div>

    <div class="grid">
      <label for="Price">Product Price</label>
      <input type="number" name="Price" value={Price} />
    </div>

    <div class="grid">
      <label for="Description">Product Description</label>
      <textarea name="Description">{Description}</textarea>
    </div>

    <div class="grid">
      <button formaction="?/delete" type="submit">Delete</button>
      <button type="submit">Update</button>
    </div>
  </form>
</article>
