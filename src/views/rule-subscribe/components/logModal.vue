<template>
  <a-modal
    v-model:visible="showModal"
    :title="t('page.ruleSubscribe.updateLog')"
    unmountOnClose
    :modal-style="{ 'max-width': '100vw' }"
  >
    <a-table
      :stripe="true"
      :columns="columns"
      :data="list"
      :loading="tableLoading"
      :pagination="{
        total,
        current,
        pageSize,
        showPageSize: true,
        baseSize: 4,
        bufferSize: 1
      }"
      size="medium"
      @page-change="changeCurrent"
      class="banlog-table"
    >
      <template #ruleId="{ record }">
        <a-tag :color="getColor(record.ruleId)">{{ record.ruleId }}</a-tag>
      </template>
      <template #updateTime="{ record }">
        <a-typography-text>{{ d(record.updateTime, 'long') }}</a-typography-text>
      </template>
      <template #updateType="{ record }">
        <a-tag :color="record.updateType === updateType.MANUAL ? 'green' : 'blue'">
          {{
            t(
              updateTypeMap[record.updateType as updateType] ??
                'page.ruleSubscribe.updateLog.updateType.unknown'
            )
          }}
        </a-tag>
      </template>
    </a-table>
  </a-modal>
</template>
<script setup lang="ts">
import { GetUpdateLogs } from '@/service/ruleSubscribe'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePagination } from 'vue-request'
import { getColor } from '@/utils/color'
import { updateType } from '@/api/model/ruleSubscribe'
const { t, d } = useI18n()
const showModal = ref(false)
defineExpose({
  showModal: () => {
    showModal.value = true
  }
})

const columns = [
  {
    title: 'ID',
    slotName: 'ruleId'
  },
  {
    title: () => t('page.ruleSubscribe.updateLog.updateTime'),
    slotName: 'updateTime'
  },
  {
    title: () => t('page.ruleSubscribe.updateLog.ruleCount'),
    dataIndex: 'count'
  },
  {
    title: () => t('page.ruleSubscribe.updateLog.updateType'),
    slotName: 'updateType'
  }
]
const forceLoading = ref(true)

const updateTypeMap = {
  [updateType.MANUAL]: 'page.ruleSubscribe.updateLog.updateType.manual',
  [updateType.AUTO]: 'page.ruleSubscribe.updateLog.updateType.auto'
}

const tableLoading = computed(() => {
  return forceLoading.value || loading.value || !list.value
})

const { data, total, current, loading, pageSize, changeCurrent } = usePagination(GetUpdateLogs, {
  defaultParams: [
    {
      pageIndex: 1,
      pageSize: 5
    }
  ],
  pagination: {
    currentKey: 'pageIndex',
    pageSizeKey: 'pageSize',
    totalKey: 'total'
  },
  onAfter: () => {
    forceLoading.value = false
  }
})
watch([pageSize, current], () => {
  forceLoading.value = true
})
const list = computed(() => data.value?.results)
</script>
