<template>
        <main>
                <h1 class="main-title">Oops ! 🫢</h1>
                <h2 class="secondary-title">La page que vous cherchez n'existe pas...</h2>
        
                <font-awesome-icon :icon="['fas', 'arrow-pointer']" class="click-icon" />
                <router-link to="/" class="back-link">Retourner sur la liste</router-link>
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

        .back-link {
        color: white;
        font-size: 1.5rem;
        }

        .click-icon {
                color: white;
                font-size: 1.5rem;
                margin-right: 1rem;
                position: relative;
                top: 5px;
                transform: rotate(55deg);
        }
}
</style>