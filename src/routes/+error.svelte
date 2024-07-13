<script>
  import { page } from '$app/stores';
  import Placeholder from '@/components/Placeholder.svelte';
</script>

{#if $page.error}
  <Placeholder>{$page.error?.message}</Placeholder>
{:else}
  <Placeholder>Page not found</Placeholder>
{/if}
