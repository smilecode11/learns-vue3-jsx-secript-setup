<script lang="jsx">
import { ref } from "vue";
export default {
  setup() {
    const iNumber = ref(0);
    iNumber.value = 250;

    const render = () => {
      return (
        <>
          <div>jsx demo {iNumber.value}</div>
        </>
      )
    };
    return render;
  },
};
</script>