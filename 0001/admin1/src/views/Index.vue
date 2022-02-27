
<template>
    <el-card class="box-card" shadow="hover">
        <template #header>
            <div class="card-header">
                <span>今日累计销售</span>
                <el-tooltip
                        class="item"
                        effect="dark"
                        content="统计今日零售和销售单据数据"
                        placement="top"
                >
<el-icon :size="20" :key="5">
                        <warning-filled color="grey" />
</el-icon>
                </el-tooltip>
            </div>
        </template>
        <span style="font-weight: 500;font-size: 30px;">￥0</span>
    </el-card>
    <el-card class="box-card" shadow="hover">
        <template #header>
            <div class="card-header">
                <span>本月累计销售</span>
                <el-tooltip
                        class="item"
                        effect="dark"
                        content="统计本月零售和销售单据数据"
                        placement="top"
                >
                    <el-icon :size="20" :key="3">
                        <warning-filled color="grey" />
                    </el-icon>
                </el-tooltip>
            </div>
        </template>
        <span style="font-weight: 500;font-size: 30px;">￥0</span>
    </el-card>
    <el-card class="box-card" shadow="hover">
        <template #header>
            <div class="card-header">
                <span>今日累计采购</span>
                <el-tooltip
                        class="item"
                        effect="dark"
                        content="统计今日采购单据数据"
                        placement="top"
                >
                    <el-icon :size="20" :key="2">
                        <warning-filled color="grey" />
                    </el-icon>
                </el-tooltip>
            </div>
        </template>
        <span style="font-weight: 500;font-size: 30px;">￥0</span>
    </el-card>
    <el-card class="box-card" shadow="hover">
        <template #header>
            <div class="card-header">
                <span>本月累计采购</span>
                <el-tooltip
                        class="item"
                        effect="dark"
                        content="统计本月采购单据数据"
                        placement="top"
                >
                    <el-icon :size="20" :key="1">
                        <warning-filled color="grey" />
                    </el-icon>
                </el-tooltip>
            </div>
        </template>
        <span style="font-weight: 500;font-size: 30px;">￥0</span>
    </el-card>
<el-col :span="10" style="margin-left: 1rem;margin-top: 1rem;">
    <el-card shadow="never">
        <div id="main" ref="chart1" style="width: 600px;height:400px;" v-if="true">
        </div>
    </el-card></el-col>
    <el-col :span="10" style="margin-left: 1rem;margin-top: 1rem;">
        <el-card shadow="never">
            <div id="right" ref="chart1" style="width: 600px;height:400px;" v-if="true">
            </div>
        </el-card></el-col>
</template>
<script>
    import { Edit,WarningFilled } from '@element-plus/icons'
    import * as echarts from 'echarts';
    export default {
        name: "chart1",
        components: {
            // 全名
            [Edit.name]: Edit,
            // 或者以缩写的方式,
            Edit,
            WarningFilled
        },
        mounted() {
            var chartDom = document.getElementById('main');
            var chartDom1=document.getElementById('right');
            var myChart = echarts.init(chartDom);
            var myChart1 = echarts.init(chartDom1);
            var option;

            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                color:['red'],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: 'y',
                        type: 'bar',
                        barWidth: '60%',
                        data: [0, 0, 0, 0, 0, 0]
                    }
                ]
            };
            option && myChart1.setOption(option);
            option && myChart.setOption(option);
    }}
</script>
<style>
    .echart1{
        width:70rem;
        height:10rem;
        margin-top: 2rem;
        margin-left: 0.4rem;
    }
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 18.5rem;
        float:left;
        margin-top:3rem;
        margin-left:1rem;
        z-index: 100;
    }
    .iconn{
        width:1rem;
        height:1rem;

    }

</style>
