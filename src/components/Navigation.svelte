<script lang="ts">
  import NavigationItem from './Navigation/NavigationItem.svelte';
  import { base } from '$app/paths';
  import type { NavigationEntry } from '@/types/navigation';

  export let entries: NavigationEntry[] = [];
  export let pathname: string;
</script>

<ul class="list-none select-none space-y-0.5 md:space-y-1">
  {#each entries as entry}
    <NavigationItem active={pathname.startsWith(base + entry.path)} {entry} />
  {/each}
</ul>
