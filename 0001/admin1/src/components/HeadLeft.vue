<!--
bgcolor是颜色参数，有color1~7,light,dark
msg参数是内容
-->
<template>
    <div :class="[state.othersize,this.bgcolor]">
        <div
style="position: relative;top: 2rem;
    right: 0;"
        > &nbsp;{{msg}}&nbsp;</div>
    </div>
</template>
<script setup>
    import { defineProps, reactive } from 'vue'
    const state = reactive({
        othersize:'font',
    })
    defineProps({
        msg:{
            type:String,
            required:true,
            default:'测试'
        },
        bgcolor:{
            type:String,
            required:true,
            default:'light'
        }
    })

</script>
<style scoped>
.color1{
    background-color:rgb(245, 33, 45);
}
.color2{
    background-color:rgb(249, 88, 33);
}
.color3{
    background-color:rgb(249, 174, 21);
}
.color4{
    background-color:rgb(55, 203, 203);
}
.color5{
    background-color:rgb(108, 206, 61);
}
.color6{
    background-color:rgb(108, 206, 61);
}
.purple{
    background-color:#884ed8;
}
.light{
    background-color:dodgerblue;
}
.dark{
    background-color:rgb(0, 33, 64);
}


    .font{
        font-size: 34px;
        color: white;
        font-weight: 600;
        height:5rem;width:12rem;
        position: relative;
        top:-4rem;
        left:0;
    }

    
</style>