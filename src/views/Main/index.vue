<template>
  <div class="main">
    <div class="content">
      <div class="">
        <div class="user_box">
          <div> Общий счет: </div>
          <div class="user_number"> {{total()}} </div>
        </div>
        <div class="user_box">
          <div> Счет 1: </div>
          <div class="user_number"> {{part1}} </div>
          <div class="user_number"> {{percent1}}% </div>
        </div>
        <div class="user_box">
          <div> Счет 2: </div>
          <div class="user_number"> {{part2}} </div>
          <div class="user_number"> {{percent2}}% </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Data, SetupContext } from '@/interface/default/index.ts'
// import ChartBar from '@/components/d3/ChartBar.vue';

export interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void
  expose: (exposed?: Record<string, any>) => void
}

console.log(Data);


export default defineComponent({
  name: 'Main',
  props: {
    msg: String,
  },
  components: {
    // ChartBar,
  },

  setup (props: Data, context: SetupContext): Data {
    const part1: Ref<number> = ref<number>(2);
    const part2: Ref<number> = ref<number>(8);
    const percent1: Ref<number> = ref<number>(0);
    const percent2: Ref<number> = ref<number>(0);

    const total = (): number => part1.value + part2.value;
    const percent = (total: number, part: number): number => (part / total) * 100;

    const getValue = (total: number, percent: number): void => {
      part2.value = total * (percent / 100);
      part1.value = total - part2.value;
      return;
    }

    const getPercent = (total: number, part: number, part2?: number): void => {
      const percentOfTotal = (part / total) * 100;
      percent1.value = percentOfTotal
      percent2.value = 100 - percentOfTotal;
      return;
    }

    getPercent(total(), part1.value);


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
      total,
      percent1,
      percent2,
    }
  },
});
</script>

<style lang="scss" scoped>
@import '@/theme/common';

.user {
  &_box {
    display: flex;
  }

  &_number {
    padding: 0 1rem;
  }
}

</style>