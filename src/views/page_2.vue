<template>
  <div class="page_2">
    <div id="myChart" :style="{width: '1400px', height: '800px'}"></div>
  </div>
</template>
<script>

export default {
  data(){
      return {
        
      }
  },
  mounted(){
    this.drawLine();
  },
  methods:{
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '统计图' },
          tooltip: {},
          xAxis: {
          type: 'category',
          data: ["8:10","9:10","10:10","11:10","12:10","13:10","14:10","15:10","16:10","17:10","18:10","19:10",]
          },
          yAxis: {
              type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320, 1000, 19, 100, 2, 2000],
              type: 'effectScatter'
            },
            {
              data: [520, 632, 1201, 634, 190, 330, 220, 100, 100, 10, 100, 100],
              type: 'effectScatter'
            },
            {
              data: [20, 22, 101, 434, 390, 730, 920, 400, 300, 90, 300, 200],
              type: 'effectScatter'
            },
            {
              data: [200, 232, 601, 134, 690, 530, 720, 600, 700, 800, 400, 800],
              type: 'effectScatter'
            },
          ]
        });
    }
  }
}
</script>
<style>
.page_2 {
          width: 1400px;
          height: 800px;
          display: block;
          border: 1px solid #ccc;
          margin: 50px auto;
          background: rgba(0, 0, 0, 0.5);
        }
</style>


