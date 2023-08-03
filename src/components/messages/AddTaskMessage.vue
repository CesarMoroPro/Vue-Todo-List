<template>
                <p v-show="success">La tâche a été ajoutée à la liste.</p>
</template>

<script>
export default {
        setup() {
                const success = false;

                return { success };
        }
}

</script>

<style lang="scss" scoped>


</style>