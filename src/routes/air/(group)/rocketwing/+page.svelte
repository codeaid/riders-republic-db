<script lang="ts">
  import type { PageData } from './$types';
  import GearGridAirRocketwing from '@/components/GearGrid/GearGridAirRocketwing.svelte';
  import type { AirRocketwingSpecialization } from '@/types/specializations';

  export let data: PageData;

  const specialization = data.specialization as AirRocketwingSpecialization;
</script>

<GearGridAirRocketwing {specialization} />
