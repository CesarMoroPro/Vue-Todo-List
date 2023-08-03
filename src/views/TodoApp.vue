<template>
        <Header />

        <main>
                <TodoList />
                <TodoArchive />
        </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import TodoList from '@/components/TodoList.vue';
import TodoArchive from '@/components/TodoArchive.vue';

</script>

<style lang="scss" scoped>
main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
}
</style>