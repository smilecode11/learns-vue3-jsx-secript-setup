import { defineComponent, ref, reactive } from 'vue'
import SubComponent from './Demo2SubComponent.jsx'
export default defineComponent({
    setup() {
        // iNumber
        const iNumber = ref(0);
        iNumber.value = 450;
        setTimeout(() => { iNumber.value = 250 }, 1500)
        //  iInfo
        const iInfo = reactive({
            name: "Chen xin",
            age: 26
        })
        // changeFlag 
        const flag = ref(true)
        function changeFlag() {
            flag.value = !flag.value
        }
        //  list
        const iTodos = reactive({
            list: ["写作", "编程", "变魔术"]
        })
        const render = () => {
            return (
                <>
                    <div>iNumber {iNumber.value}</div>
                    {/* 条件支持 */}
                    {flag.value &&
                        <div>
                            <div>info name: {iInfo.name}</div>
                            <div>info age: {iInfo.age}</div>
                        </div> 
                    }
                    {/* 事件支持 */}
                    <button onClick={changeFlag}>change flag: {flag.value.toString()}</button>
                    {/* 循环支持 */}
                    <ul>
                        {iTodos.list.map(item => <li style="list-style:none">{item}</li>)}
                    </ul>
                    {/* 组件支持 */}
                    <SubComponent a={iNumber.value} />
                </>
            )
        };
        return render;
    },
    components: {
        SubComponent
    }
})