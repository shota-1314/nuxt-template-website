<template>
  <v-container class="tw-mt-10">
    <v-row class="tw-flex tw-flex-col tw-justify-center tw-content-center">
      <div class="tw-text-start tw-text-xl tw-font-bold">WELCOME</div>
      <div class="">認証ステータス:{{ status }}</div>
      <div class=""><v-btn @click="logout">ログアウト</v-btn></div>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  const { status, signOut } = useAuth();
  const logout = () => {
    signOut({ callbackUrl: '/login' })
  }
</script>