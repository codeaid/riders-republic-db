<script>
  import Footer from '@/components/Footer.svelte';
  import PageContent from '@/components/PageContent.svelte';
</script>

<main class="flex flex-col flex-1">
  <PageContent>
    <slot />
  </PageContent>

  <Footer />
</main>
