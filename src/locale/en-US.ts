import settingsLocale from './en-US/settings'
import dashboardPageLocale from '@/views/dashboard/locale/en-US'
import banListPageLocale from '@/views/banlist/locale/en-US'
import banLogPageLocale from '@/views/banlog/locale/en-US'
import topBanPageLocale from '@/views/top-ban/locale/en-US'
import ruleMetricsLocale from '@/views/rule-metrics/locale/en-US'
import serviceLocale from '@/service/locale/en-US'
export default {
  'navbar.action.locale': 'Switch to English',
  'navbar.action.autoUpdate': 'Auto Update',
  'navbar.action.autoUpdate.lastUpdate': 'Last updated at: ',
  'main.workInProgressTips':
    'This feature is still working in progress, and the data currently recorded and displayed is relatively limited',

  'router.dashboard': 'Status',
  'router.banlist': 'Ban List',
  'router.banlogs': 'Ban Logs',
  'router.topban': 'Top Bans',
  'router.ruleMetrics': 'Rule Metrics',

  ...settingsLocale,
  ...dashboardPageLocale,
  ...banListPageLocale,
  ...banLogPageLocale,
  ...topBanPageLocale,
  ...ruleMetricsLocale,
  ...serviceLocale
}