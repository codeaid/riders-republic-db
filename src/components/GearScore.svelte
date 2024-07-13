<script lang="ts">
  import { base } from '$app/paths';

  export let code: string;
  export let score: number;
</script>

<div class="ml-2 bg-brand flex leading-4 select-none rounded-px overflow-hidden z-10">
  <div class="px-1.5 flex items-center bg-gear-score-icon">
    <img alt="" class="h-4" src="{base}/images/gear-score.png" />
  </div>

  <div class="flex flex-1 items-center p-[3px]">
    <div class="px-1 mr-1 text-base font-bold leading-none">{code}</div>
    <div
      class="px-2 py-[3px] flex-1 bg-white text-xl font-bold leading-none text-center rounded-px"
    >
      {score}
    </div>
  </div>
</div>
