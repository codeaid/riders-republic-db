<script lang="ts">
  import type { PageData } from './$types';
  import CategoryTabs from '@/components/CategoryTabs.svelte';
  import GearGridSnow from '@/components/GearGrid/GearGridSnow.svelte';

  export let data: PageData;
</script>

<CategoryTabs category={data.category} parent={data.parent} specialization={data.specialization} />

<GearGridSnow category={data.category} specialization={data.specialization} />
