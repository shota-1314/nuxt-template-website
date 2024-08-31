<template>
  <h1>ログイン</h1>
  <button @click="signIn('google')" type="submit">Googleでログイン</button>
  <p>Status: {{ status }}</p>
</template>

<script lang="ts" setup>
  const { status, data, signIn } = useAuth();
  definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/admin", // 認証済みのリダイレクト先
  },
});
</script>