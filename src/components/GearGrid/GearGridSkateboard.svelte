<script lang="ts">
  import { getSortedGear } from '$lib/gear';
  import { getGearStatInfoMap } from '$lib/stats';
  import GearGrid from '@/components/GearGrid.svelte';
  import GearItemSkateboard from '@/components/GearItem/GearItemSkateboard.svelte';
  import type { SkateboardCategory } from '@/types/categories';
  import type { GetCategorySpecializations } from '@/types/utils';

  export let specialization: GetCategorySpecializations<SkateboardCategory>;

  $: stats = getGearStatInfoMap(specialization.gear);
</script>

<GearGrid>
  {#each getSortedGear(specialization.gear) as gear}
    <GearItemSkateboard {gear} {specialization} {stats} />
  {/each}
</GearGrid>
