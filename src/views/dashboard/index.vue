<script setup lang="ts">
import ClientStatus from './components/clientStatus.vue'
import StatisticInfo from './components/statisticInfo.vue'
</script>

<template>
  <a-space direction="vertical" fill>
    <a-typography-text style="font-size: 1.2em">
      {{ $t('page.dashboard.description') }}
    </a-typography-text>
    <ClientStatus />
    <br />
    <StatisticInfo />
  </a-space>
</template>
