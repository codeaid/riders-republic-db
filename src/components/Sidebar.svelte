<script lang="ts">
  import Navigation from './Navigation.svelte';
  import { page } from '$app/stores';
  import type { NavigationEntry } from '@/types/navigation';

  $: pathname = $page.url.pathname;

  export let navigationEntries: NavigationEntry[];
</script>

<aside class="bg-nav md:px-2 md:py-2 px-1 shadow-md z-[9] md:w-52">
  <Navigation {pathname} entries={navigationEntries} />
</aside>
