<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { flyDown } from '$lib/transitions';
</script>

<div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-50">
  <div
    class="h-full w-full flex flex-1 items-center justify-center"
    out:flyDown={{ duration: 300, easing: cubicOut }}
  >
    <img
      alt="Logo"
      class="animate-wiggle drop-shadow-md select-none"
      draggable="false"
      height="100"
      src="/images/logo.png"
      width="100"
    />
  </div>
</div>
