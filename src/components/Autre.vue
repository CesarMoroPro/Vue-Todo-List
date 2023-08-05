<template>
        <ChildComponent @my-first-custom-event="handleCustomEvent" />

</template>

<script setup>
        import ChildComponent from "@/.../.../ChildComponent.vue";

        function handleCustomeEvent(data) {
                console.log("Voici les données du CHILD récupérées dans le PARENT grâce à $emit : " + data)
        }
</script>