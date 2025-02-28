<script setup lang="ts">

const props = defineProps<{
  date: string | Date;
}>();

const formattedDate = computed(() => {
  return props.date instanceof Date ? props.date.toISOString() : props.date;
});
</script>

<template>
  <time :datetime="formattedDate">
    {{ formatDate(formattedDate) }}
  </time>
</template>