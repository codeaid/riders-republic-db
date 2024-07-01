<script lang="ts">
  import type { PageData } from './$types';
  import CategoryTabs from '@/components/CategoryTabs.svelte';
  import GearGridBike from '@/components/GearGrid/GearGridBike.svelte';

  export let data: PageData;
</script>

<CategoryTabs category={data.category} parent={data.parent} specialization={data.specialization} />

<GearGridBike specialization={data.specialization} />
