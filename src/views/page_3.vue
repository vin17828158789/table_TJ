<template>
    <div>
        <el-dialog
            title="查看图片"
            :visible.sync="dialogJPG"
            append-to-body>
            <canvas id="mycanvas" width="940" height="570"></canvas>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        mounted(){
            this.doDraw();
        },
        methods:{
            //  imageUrl为后台提供图片地址
            doDraw(){
                //  获取canvas
                var canvas = document.getElementById("mycanvas")
                // var ctx = canvas.getContext("2d");
                for (var i = 30; i < 500; i += 30) {
                    for (var k = 30; k < 570; k += 30)
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

<style scoped>
#mycanvas {
    border: 1px solid rgb(199, 198, 198);
    background: rgba(0, 0, 0, 0.5);
}
</style>