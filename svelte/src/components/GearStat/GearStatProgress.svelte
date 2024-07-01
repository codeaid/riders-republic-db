<script lang="ts">
  import { onMount } from 'svelte';
  import { expoOut } from 'svelte/easing';
  import { scaleX } from '$lib/transitions';

  export let percBonus: number = 0;
  export let value: number;

  // Toggle animations on component mount
  let mounted = false;
  onMount(() => (mounted = true));
</script>

{#if mounted}
  <div
    class="h-[9px] w-full relative rounded-sm overflow-hidden after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-tiling after:bg-[length:150px]"
  >
    <div
      class="relative h-full w-full flex justify-end bg-gear-stat-progress rounded-r-sm transition-all duration-200 origin-left overflow-hidden z-10"
      in:scaleX={{ delay: 25, duration: 150, easing: expoOut }}
      style="width: {value}%"
    >
      <div class="h-full bg-brand transition-all duration-150" style="width: {percBonus}%"></div>
    </div>
  </div>
{/if}
