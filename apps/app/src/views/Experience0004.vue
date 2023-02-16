<script setup lang="ts">
import { useStore } from '../../stores/experience0004/store'

const store = useStore();

const tryToPromiseAction = async () => {
    const data = await store.getPromise()
    const response = await data.json();
    console.log(response);
}

const unsubscribe = store.$onAction(({ name }) => {
    console.log(name)
})
</script>

<template>
    <div>Count: {{ store.count }}</div>
    <button @click="tryToPromiseAction">tryToPromiseAction</button>
    <button @click="unsubscribe()">Unsubscription</button>
</template>