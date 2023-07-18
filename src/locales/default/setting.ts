export default {
  danger: {
    clear: {
      action: '立即清除',
      confirm: '确认清除所有聊天、设置数据？',
      desc: '清除所有聊天、设置数据',
      title: '清除所有数据',
    },
    reset: {
      action: '立即重置',
      confirm: '确认重置所有设置？',
      currentVersion: '当前版本',
      desc: '重置所有设置项回默认值',
      title: '重置所有设置',
    },
  },
  header: '设置',
  settingChat: {
    compressThreshold: {
      desc: '当未压缩的历史消息超过该值时，将进行压缩',
      title: '历史消息长度压缩阈值',
    },
    historyCount: {
      desc: '每次请求携带的历史消息数',
      title: '附带历史消息数',
    },
    inputTemplate: {
      desc: '用户最新的一条消息会填充到此模板',
      title: '用户输入预处理',
    },
    maxTokens: {
      desc: '单次交互所用的最大 Token 数',
      title: '单次回复限制 (max_tokens)',
    },
    sendKey: {
      title: '发送键',
    },
    title: '聊天设置',
  },
  settingModel: {
    frequencyPenalty: {
      desc: '值越大，越有可能降低重复字词',
      title: '频率惩罚度 (frequency_penalty)',
    },
    model: {
      title: '模型',
    },
    presencePenalty: {
      desc: '值越大，越有可能扩展到新话题',
      title: '话题新鲜度 (presence_penalty)',
    },
    temperature: {
      desc: '值越大，回复越随机',
      title: '随机性 (temperature)',
    },
    title: '模型设置',
    topP: {
      desc: '与随机性类似，但不要和随机性一起更改',
      title: '核采样 (top_p)',
    },
  },
  settingOpenAI: {
    endpoint: {
      desc: '除默认地址外，必须包含 http(s)://',
      title: '接口地址',
    },
    title: 'OpenAI 设置',
    token: {
      desc: '使用自己的 Key 可绕过密码访问限制',
      placeholder: 'OpenAI API Key',
      title: 'API Key',
    },
  },
  settingSystem: {
    accessCode: {
      desc: '管理员已开启加密访问',
      placeholder: '请输入访问密码',
      title: '访问密码',
    },
    title: '系统设置',
  },
  settingTheme: {
    avatar: {
      title: '头像',
    },
    fontSize: {
      desc: '聊天内容的字体大小',
      title: '字体大小',
    },
    lang: {
      title: '语言设置',
    },
    neutralColor: {
      desc: '不同色彩倾向的灰阶自定义',
      title: '中性色',
    },
    primaryColor: {
      desc: '自定义主题色',
      title: '主题色',
    },
    themeMode: {
      auto: '自动',
      dark: '深色',
      light: '浅色',
      title: '主题',
    },
    title: '主题设置',
  },
};
