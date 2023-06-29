<script>
  import "$lib/css/app.css";
  import Navbar from "$lib/components/navbar.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<main class="container">
  <Navbar />
  <slot />
  <Footer />
</main>
