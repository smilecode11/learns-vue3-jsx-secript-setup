import { defineComponent, ref } from "vue";

export default defineComponent({
    props: ['render'],
    setup(props, context) {
        // 获取 slots vnode
        console.log('Child slots', context.slots.default())

        const msg = ref("Hello, template scopedSlot");

        return () => (
            <>
                <div>Child JSX</div>
                {/* 直接调用父组件传递的 render 函数, 传入当前子组件的 msg 数据, 由父组件进行渲染工作 */}
                {props.render(msg.value)}
            </>
        )
    }
})