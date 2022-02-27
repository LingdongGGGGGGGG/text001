<template>
    <div :class="this.bgcolor">
        <el-button icon="el-icon-monitor" circle style="position: absolute;top: 1.5rem;
    right: 26rem;"   @click="goto(this.url1)" :class="this.bgcolor"></el-button>
        <el-popover
                placement="bottom"
                title="通知"
                :width="200"
                trigger="click"
                content="暂无通知"
        >
            <template #reference>
                <el-button icon="el-icon-dish-1" circle style="position: absolute;right:23rem;top:1.5rem;" :class="this.bgcolor"></el-button>
            </template>
        </el-popover>



    </div>
</template>
<script>
    import { defineComponent } from 'vue';
    import { ElMessageBox } from 'element-plus';
    import { ElMessage } from 'element-plus';
    import { defineProps, reactive } from 'vue'
    defineProps({
        bgcolor:{
            type:String,
            required:true,
            default:'light'
        },
    })
    export default({
        data(){
            return{
                username:'user001',
                url1:'http://47.116.69.14/dashboard/analysis'
            }
        },
        methods:{
        goto:function (url) {
            window.location.href = url
        }},

    });
</script>
<style scoped>
  .hah{

  }
  .color1{
      background-color:rgb(245, 33, 45);
      width: 95rem;
      height: 5rem;
  }
  .color2{
      background-color:rgb(249, 88, 33);
      width: 95rem;
      height: 5rem;
  }
  .color3{
      background-color:rgb(249, 174, 21);
      width: 95rem;
      height: 5rem;
  }
  .color4{
      background-color:rgb(55, 203, 203);
      width: 95rem;
      height: 5rem;
  }
  .color5{
      background-color:rgb(108, 206, 61);
      width: 95rem;
      height: 5rem;
  }
  .color6{
      background-color:rgb(108, 206, 61);
      width: 95rem;
      height: 5rem;
  }
  .purple{
      background-color:rebeccapurple;
      width: 95rem;
      height: 5rem;
  }
  .light{
      background-color:dodgerblue; width: 95rem;
      height: 5rem;
  }
  .dark{
      background-color:rgb(0, 33, 64);
      --el-button-background-color:rgb(0, 33, 64);
      width: 95rem;
      height: 5rem;
  }
  .el-icon-arrow-down {
      font-size: 12px;
  }
  .el-dropdown-menu {
      width: 9rem;}
  .el-dropdown-link{
      color: white;
  }

</style>