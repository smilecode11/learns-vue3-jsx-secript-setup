import { defineComponent } from "vue";
import Child from "./Child";

export default defineComponent({
    setup() {
        // 定义 renderVNode 函数, 作为 render 属性交给子组件, 子组件携带数据返回进行渲染工作
        const renderVNode = (msg) => (<>scopedSlot jsx demo - {msg}</>)

        return () => (
            <>
                <div>ScopedSlotJSX</div>
                <Child render={renderVNode}>
                    child slot content
                </Child>
            </>
        )
    }
})