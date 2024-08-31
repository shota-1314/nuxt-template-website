<template>
  <v-container class="fill-height">
    <v-row class="tw-text-center tw-justify-center">
      <span class="tw-text-xl">Hello World</span>
    </v-row>
    <v-row class="tw-text-center tw-justify-center">
      <v-btn @click=getDataTest()>API接続テスト</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// サンプル取得用
import type { GenericObject } from '~/types'
const sampleList = ref<GenericObject[]>([])
const getDataTest = async () => {
    const responce = await fetch('/api/sample-api')
    sampleList.value = await responce.json()
}
definePageMeta({
  auth: false
});
</script>
 
<style scoped>
</style>
