<template>
  <a-form-item
    field="config.endpoint"
    :label="t('page.dashboard.editModal.label.endpoint')"
    :rules="[{ required: true, type: 'url' }]"
  >
    <a-input v-model="config.endpoint" allow-clear></a-input>
  </a-form-item>
  <a-form-item
    field="config.password"
    :label="t('page.dashboard.editModal.label.password')"
    required
  >
    <a-input v-model="config.password" allow-clear></a-input>
  </a-form-item>
  <a-form-item field="config.rpcUrl" label="RPC URL" required>
    <a-input v-model="config.rpcUrl" allow-clear placeholder="/json"></a-input>
  </a-form-item>
  <a-form-item
    field="config.incrementBan"
    default-checked
    :label="t('page.dashboard.editModal.label.incrementBan')"
  >
    <a-switch v-model="config.incrementBan" />
    <template #extra> {{ t('page.dashboard.editModal.label.incrementBan.description') }}</template>
  </a-form-item>
  <a-form-item field="config.httpVersion" :label="t('page.dashboard.editModal.label.httpVersion')">
    <a-radio-group v-model="config.httpVersion">
      <a-radio value="HTTP_1_1">1.1</a-radio>
      <a-radio value="HTTP_2_0">2.0</a-radio>
    </a-radio-group>
    <template #extra>{{ t('page.dashboard.editModal.label.httpVersion.description') }} </template>
  </a-form-item>
  <a-form-item
    field="config.verifySsl"
    default-checked
    :label="t('page.dashboard.editModal.label.verifySsl')"
  >
    <a-switch v-model="config.verifySsl" />
  </a-form-item>
</template>
<script setup lang="ts">
import type { delugeConfig } from '@/api/model/clientStatus'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const config = defineModel<delugeConfig>({ required: true })
</script>
