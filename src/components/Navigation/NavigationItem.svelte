<script lang="ts">
  import NavigationIcon from './NavigationIcon.svelte';
  import NavigationLabel from './NavigationLabel.svelte';
  import { base } from '$app/paths';
  import type { NavigationEntry } from '@/types/navigation';

  export let active: boolean;
  export let entry: NavigationEntry;
</script>

<li>
  <a
    class="text-nav-item text-xl p-1 rounded-sm cursor-pointer flex items-center overflow-hidden no-underline transition-colors group hover:bg-brand hover:text-nav-item-active md:p-1.5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-brand"
    class:bg-brand={active}
    class:md:bg-nav-item={!active}
    class:text-nav-item-active={active}
    href={base + entry.path}
    tabindex="0"
    title={entry.name}
  >
    <NavigationIcon colorClass={entry.colorClass} iconClass={entry.iconClass} />
    <NavigationLabel>{entry.name}</NavigationLabel>
  </a>
</li>
