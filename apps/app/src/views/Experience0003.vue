<script setup lang="ts">
import { useStore } from '../../stores/experience0003/store'

const store = useStore();

</script>

<template>
    <div>Count: {{ store.count }}</div>
    <div>Double count: {{ store.double }}</div>
    <button @click="store.$patch({ count: store.count + 1})">Increment</button>
    <div>Double + 2: {{ store.whatever(2) }}</div>
</template>