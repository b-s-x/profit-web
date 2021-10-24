<template>
  <div class="main">
    <div class="content">
      <div>
          {{part1}}
          {{part2}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Data, SetupContext } from '@/interface/default'
// import ChartBar from '@/components/d3/ChartBar.vue';

export default defineComponent({
  name: 'Main',
  props: {
    msg: String,
  },
  components: {
    // ChartBar,
  },

  setup (props: Data, context: SetupContext): Data {
    const part1 = ref(0);
    const part2 = ref(0);
    const total = (): number => part1.value + part2.value;
    const percent = (total: number, part: number): number => (part / total) * 100;
    const getValue = (total: number, percent: number): void => {
      part2.value = total * (percent / 100);
      part1.value = total - part2.value;
      return;
    }

    // const totalPrev = total();
    // console.log('totalPrev', totalPrev);

    // const percentNow = percent(totalPrev, part2.value);
    // console.log('percentNow', percentNow);
    // part1.value += 134
    // const newTotal = total();
    // console.log('newTotal', newTotal);
    // console.log(1, part1.value);
    // console.log(2, part2.value);
    // console.log('-----------');
    // const newPercent = percent(newTotal, part2.value)
    // console.log('newPercent', newPercent);
    // const value = 9190;
    // getValue(value, newPercent);
    // console.log(1, part1.value);
    // console.log(2, part2.value);
    // console.log(3, total());
    return {
      part1,
      part2,
    }
  },
});
</script>

<style lang="scss" scoped>
@import '@/theme/common';

.red {
  background: $color-red;
}
</style>