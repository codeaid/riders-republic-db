<script lang="ts">
  import type { PageData } from './$types';
  import GearGridAirWingsuit from '@/components/GearGrid/GearGridAirWingsuit.svelte';
  import type { AirWingsuitSpecialization } from '@/types/specializations';

  export let data: PageData;

  const specialization = data.specialization as AirWingsuitSpecialization;
</script>

<GearGridAirWingsuit {specialization} />
