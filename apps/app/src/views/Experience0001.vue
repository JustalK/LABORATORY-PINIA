<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const store = useCounterStore();
</script>

<template>
    <div>Counter: {{ store.count }}</div>
    <div>
        <button @click="store.increment()">Increment</button>
        <button @click="store.change(12)">Set to 12</button>
    </div>
    <div>Counter: {{ store.getCount }}</div>
</template>