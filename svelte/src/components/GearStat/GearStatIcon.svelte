<script lang="ts">
  import { statIconMap } from '@/config/gear';
  import type { GearStatType } from '@/types/stats';

  export let type: GearStatType;

  $: iconClass = statIconMap.get(type);
</script>

<div
  class="h-9 w-9 aspect-square bg-white bg-no-repeat bg-center bg-contain rounded-px {iconClass} {$$restProps.class}"
></div>
