<template>
  <a-modal
    hide-cancel
    closable
    v-model:visible="visible"
    @ok="handleOk"
    draggable
    :modal-style="{ 'max-width': '100vw' }"
  >
    <template #title> {{ t('page.dashboard.torrentList.title') }} </template>
    <a-table
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="{ pageSize: 5, baseSize: 4, bufferSize: 1 }"
    >
      <template #name="{ record }">
        <a-typography-text bold style="margin-bottom: 0" :ellipsis="{ showTooltip: true }">
          {{ record.name }}
        </a-typography-text>
      </template>
      <template #size="{ record }">
        <a-typography-text>{{ formatFileSize(record.size) }}</a-typography-text>
      </template>
      <template #hash="{ record }">
        <a-typography-text copyable code>{{ record.hash }}</a-typography-text>
      </template>
      <template #progress="{ record }">
        <a-space>
          <a-progress :percent="record.progress" size="mini" />
          <a-typography-text>
            {{ (record.progress * 100).toFixed(2) + '%' }}
          </a-typography-text>
        </a-space>
      </template>
    </a-table>
  </a-modal>
</template>
<script setup lang="ts">
import { getTorrents } from '@/service/downloaders'
import { ref } from 'vue'
import { useRequest } from 'vue-request'
import { formatFileSize } from '@/utils/file'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const visible = ref(false)
const downloader = ref('')
defineExpose({
  showModal: (downloaderName: string) => {
    downloader.value = downloaderName
    visible.value = true
    run(downloaderName)
  }
})
const handleOk = () => {
  visible.value = false
  downloader.value = ''
}
const { data, loading, run } = useRequest(getTorrents, {
  manual: true
})
const columns = [
  {
    title: () => t('page.dashboard.torrentList.column.name'),
    slotName: 'name'
  },
  {
    title: () => t('page.dashboard.torrentList.column.size'),
    slotName: 'size'
  },
  {
    title: () => t('page.dashboard.torrentList.column.hash'),
    slotName: 'hash'
  },
  {
    title: () => t('page.dashboard.torrentList.column.progress'),
    slotName: 'progress'
  }
]
</script>
