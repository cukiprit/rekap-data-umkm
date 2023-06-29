<script>
  import { page } from "$app/stores";
</script>

<article style="text-align: center;">
  <h1>{$page.status}</h1>
  <h1>{$page.error.message}</h1>
  <a href="/">Back to home</a>
</article>
