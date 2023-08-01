<template>
        <header>
                <h1>Vue3 To Do List</h1>
        </header>

        <section>
                <TodoForm />
                <TodoList />
                <TodoArchive />
        </section>
</template>

<script setup>
        import TodoForm from '@/components/TodoForm.vue';
        import TodoList from '@/components/TodoList.vue';
        import TodoArchive from '@/components/TodoArchive.vue';

</script>

<style lang="scss" scoped>

</style>