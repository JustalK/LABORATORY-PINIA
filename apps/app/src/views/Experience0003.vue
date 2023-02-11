<script setup lang="ts">
import { useStore } from '../../stores/experience0002/store'
import { useCountStore } from '../../stores/experience0003/store'

const store = useStore();
const storeCount = useCountStore();

store.$subscribe((mutation, state) => {
    storeCount.add()
})
</script>

<template>
    <div>Count: {{ storeCount.count }}</div>
</template>