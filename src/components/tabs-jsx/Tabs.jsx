import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: ['defaultActiveKey'],
  emits: ['change'],
  setup(props, context) {
    //  获取 slots VNode
    const childsVnode = context.slots.default()
    //  处理 buttons
    const titles = childsVnode.map(panel => {
      const { key, title } = panel.props
      return {
        key,
        title
      }
    })

    //  处理选择 key
    const activeKey = ref(props.defaultActiveKey)
    //  事件
    const handleClick = (key) => {
      if (key === activeKey.value) return;
      activeKey.value = key
      context.emit('change', key)
    }

    const render = () => (
      <>
        <div>
          {/* 渲染 button */}
          {titles.length &&
            titles.map(tabInfo => (
              <>
                <button
                  style={{ color: activeKey.value === tabInfo.key ? 'blue' : '#333' }}
                  // 事件注册
                  onClick={() => handleClick(tabInfo.key)}
                >{tabInfo.title}</button>&nbsp;
              </>
            ))
          }
        </div>
        <div>
          {/* 渲染 tab-panel */}
          {childsVnode.filter(child => child.props.key === activeKey.value)}
        </div>
      </>
    )

    return render
  }
})