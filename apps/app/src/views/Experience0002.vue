<script setup lang="ts">
import { useStore } from '../../stores/experience0002/store'

const store = useStore();

store.$subscribe((mutation, state) => {
    console.log(state)
})
</script>

<template>
    <div>Name: {{ store.currentUser?.name }}</div>
    <div>Age: {{ store.currentUser?.age }}</div>
    <div>
        <button @click="store.$patch({
            currentUser: {
                name: 'kevin',
                age: 16
            }
        })">Add kevin user</button>
        <button @click="store.$reset()">Reset</button>
    </div>
    <div>Nbr user: {{ store.users.length }}</div>
    <button @click="store.$patch((state) => {
        state.users.push({
            name: 'random',
            age: 22
        })
    })">Add user</button>
</template>