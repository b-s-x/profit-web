<template>
  <div class="donut">
      3333
  </div>
</template>

<script lang="js">
import * as d3 from "d3";
import { ref, defineComponent, onMounted } from "vue";

// interface Margin {
//   top: number
//   right: number
//   bottom: number
//   left: number
// };

// interface DataField {
//   id: number;
//   title: string;
//   value: number;
// };

// interface Ref<T> {
//   value: T
// }

export default defineComponent({
  name: 'ChartBar',

  setup(props, context) {


    const run = () => {
      const data = [20, 100, 60, 40, 70];
      const barWidth = 20;
      d3.select('svg')
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('height', d => d)
        .attr('x', (d, i) => barWidth * 1)

      const x = d3.scaleTime()
        .domain([new Date(2017, 0, 1), new Date(2017, 0, 9)])
        .range([0, 1000])

      x(new Date(2017, 0, 5))

      const y = d3.scaleLinear()
        .domain([1000000, 13000000])
        .range([0, 480]);

      y(2000000)
    }

    return {
      run,
    }
  },

  created () {
    this.run()
  }
});
</script>

<style scoped>

</style>