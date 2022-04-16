// initial state
const state = {
  user: {
    sexEnum: [{ key: 1, value: '男' }, { key: 2, value: '女' }],
    levelEnum: [{ key: 1, value: '物联网工程1班' }, { key: 2, value: '物联网工程2班' }, { key: 3, value: '计算机科学与技术1班' }, { key: 4, value: '计算机科学与技术2班' }, { key: 5, value: '计算机科学与技术3班' }, { key: 6, value: '计算机科学与技术4班' },
      { key: 7, value: '计算机科学与技术5班' }],
    roleEnum: [{ key: 1, value: '学生' }, { key: 2, value: '教师' }, { key: 3, value: '管理员' }],
    message: {
      readTag: [{ key: true, value: 'success' }, { key: false, value: 'warning' }],
      readText: [{ key: true, value: '已读' }, { key: false, value: '未读' }]
    }
  },
  exam: {
    examPaper: {
      paperTypeEnum: [{ key: 1, value: '自测试卷' }, { key: 4, value: '限时自测试卷' }]
    },
    examPaperAnswer: {
      statusEnum: [{ key: 1, value: '待批改' }, { key: 2, value: '完成' }],
      statusTag: [{ key: 1, value: 'warning' }, { key: 2, value: 'success' }]
    },
    question: {
      typeEnum: [{ key: 1, value: '单选题' }, { key: 2, value: '多选题' }, { key: 3, value: '判断题' }, { key: 4, value: '填空题' }, { key: 5, value: '简答题' }],
      answer: {
        doRightTag: [{ key: true, value: 'success' }, { key: false, value: 'danger' }, { key: null, value: 'warning' }],
        doRightEnum: [{ key: true, value: '正确' }, { key: false, value: '错误' }, { key: null, value: '待批改' }],
        doCompletedTag: [{ key: false, value: 'info' }, { key: true, value: 'success' }]
      }
    }
  }
}

// getters
const getters = {
  enumFormat: (state) => (arrary, key) => {
    return format(arrary, key)
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

const format = function (array, key) {
  for (let item of array) {
    if (item.key === key) {
      return item.value
    }
  }
  return null
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
