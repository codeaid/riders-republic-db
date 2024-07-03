<script lang="ts">
  import type { PageData } from './$types';
  import CategoryTabs from '@/components/CategoryTabs.svelte';
  import GearGridSkateboard from '@/components/GearGrid/GearGridSkateboard.svelte';

  export let data: PageData;
</script>

<CategoryTabs category={data.category} specialization={data.specialization} />

<GearGridSkateboard specialization={data.specialization} />
