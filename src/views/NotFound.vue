<template>
        <main>
                <h1 class="main-title">Oops ! 🫢</h1>
                <h2 class="secondary-title">La page que vous cherchez n'existe pas...</h2>
        
                <router-link to="/">Retourner sur la liste</router-link>
        </main>
</template>

<style scoped lang="scss">
main {
        text-align: center;
        .main-title {
                color: white;
                margin: 1.2rem;
        }

        .secondary-title {
                margin-bottom: 1.5rem;
        }
}
</style>