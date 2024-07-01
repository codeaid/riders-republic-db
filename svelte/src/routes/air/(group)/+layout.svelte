<script lang="ts">
  import type { LayoutData } from './$types';
  import CategoryTabs from '@/components/CategoryTabs.svelte';

  export let data: LayoutData;
</script>

<CategoryTabs category={data.category} specialization={data.specialization} />

<slot />
