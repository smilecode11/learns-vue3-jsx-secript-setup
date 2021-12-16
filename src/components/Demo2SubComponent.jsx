import { defineComponent, ref } from 'vue'
export default defineComponent({
    props: ['a'],
    setup(props) {
        const subContent = ref("Sub Component")
        setTimeout(() => {
            subContent.value = "sub component"
        }, (1500));

        const render = () => {
            return (
                <>
                    <div>{subContent.value} - 1.5s 左右变更</div>
                    <span>{props.a}</span>
                </>
            )
        };
        return render;
    }
})