<template>
  <div class="page_1">
    <div class="msg">
      <canvas id="myCanvas" width="900" height="570"></canvas>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      // Y轴高度
      height:[6000,5000,4000,3000,2000,"起始",],
      // X轴时间
      time:["8:10","9:10","10:10","11:10","12:10","13:10","14:10","15:10","16:10","17:10","18:10","19:10",],
    }
  },
  mounted(){
      this.show()
  },
  methods:{
    show(){
        //2.获取canvas元素
        var canvas = document.getElementById("myCanvas");
        //3.获取绘制对象
        var ctx = canvas.getContext("2d");
        //4.通过绘制对象的方法和属性绘图

        //绘制网格
        var step = 10;
        var row = canvas.height / step;
        var col = canvas.width / step;

        for (var i = 0; i < row; i++) {
            ctx.moveTo(0, i * step);
            ctx.lineTo(900, i * step);
        }

        for (var j = 0; j < col; j++) {
            ctx.moveTo(j * step, 0);
            ctx.lineTo(j * step, 600);
        }
        ctx.strokeStyle = '#ccc'
        ctx.stroke();

        var distance = 10;
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        //起点
        ctx.moveTo(distance, distance);
        //坐标原点
        ctx.lineTo(distance, canvas.height - distance);
        //终点
        ctx.lineTo(canvas.width - distance, canvas.height - distance);

        //y轴箭头
        ctx.moveTo(distance - 0.5 * step, distance + step);
        ctx.lineTo(distance, distance);
        ctx.lineTo(distance + 0.5 * step, distance + step);

        //x轴箭头
        ctx.moveTo(canvas.width - distance - step, canvas.height - distance - 0.5 * step);
        ctx.lineTo(canvas.width - distance, canvas.height - distance);
        ctx.lineTo(canvas.width - distance - step, canvas.height - distance + 0.5 * step);

        ctx.stroke();
        for (let i = 30; i < 540; i += 30) {
          for (var k = 20; k < 800; k += 30)
            if(Math.random() > 0.75){
              var box = canvas.getContext("2d");
              box.fillStyle = 'yellow';
              box.fillRect(k, i, 20, 20);
            }else if(Math.random() > 0.5 && Math.random() < 0.75){
              var box1 = canvas.getContext("2d");
              box1.fillStyle = 'red';
              box1.fillRect(k, i, 20, 20);
            }else if(Math.random() > 0.25 && Math.random() < 0.5){
              var box2 = canvas.getContext("2d");
              box2.fillStyle = 'green';
              box2.fillRect(k, i, 20, 20);
            }else{
              var box3 = canvas.getContext("2d");
              box3.fillStyle = 'black';
              box3.fillRect(k, i, 20, 20);
            }
        }
    },
  }
}
</script>
<style>
  .page_1{
    width: 940px;
    height: 570px;
    display: flex;
    align-items: flex-end;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: #eee;
  }
  #myCanvas{
    background: rgba(0, 0, 0, 0.5);
  }
</style>

