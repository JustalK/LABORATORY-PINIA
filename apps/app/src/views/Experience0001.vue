<script setup lang="ts">
import { useCounterStore } from '../../stores/experience0001/counter'

const store = useCounterStore();
</script>

<template>
    <div>Counter: {{ store.count }}</div>
    <div>
        <button @click="store.increment()">Increment</button>
        <button @click="store.change(12)">Set to 12</button>
        <button @click="store.$reset()">Reset using $ functions</button>
    </div>
    <div>Counter: {{ store.getCount }}</div>
</template>