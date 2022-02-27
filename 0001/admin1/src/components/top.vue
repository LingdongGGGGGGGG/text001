<template>
    <div style="  height:85vh;
  overflow: auto;float:left;">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
            active-text-color="RGB(24, 144, 255)"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :unique-opened="true"
            text-color="grey"
            :router="true"
            :background-color="back"
    >
        <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <template #title>首页</template>
        </el-menu-item>
        <el-sub-menu index="11">
            <template #title>
                <i class="el-icon-goods"></i>
                <span>零售管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/retail_out" @click="addit('零售出库','/retail_out')" :key="301"><i class="el-icon-document"/>零售出库</el-menu-item>
                <el-menu-item index="/retail_back" @click="addit('零售退货','/retail_back')" :key="302" ><i class="el-icon-document" />零售退货</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
            <template #title>
                <i class="el-icon-bangzhu"></i>
                <span>盘点业务</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/stockCheck" @click="addit('盘点录入','/stockCheck')" :key="101"><i class="el-icon-document"/>盘点录入</el-menu-item>
                <el-menu-item index="/stockCheck" @click="addit('盘点复盘','/stockCheck')" :key="102"><i class="el-icon-document"/>盘点复盘</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="900">
            <template #title>
                <i class="el-icon-first-aid-kit"></i>
                <span>财务管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/item_in" :key="36" @click="addit('收入单','/other_in')"><i class="el-icon-document" />收入单</el-menu-item>
                <el-menu-item index="/item_out" :key="37" @click="addit('支出单','/other_out')"><i class="el-icon-document" />支出单</el-menu-item>
                <el-menu-item index="/money_in" :key="38" @click="addit('收款单','/allocation_out')"><i class="el-icon-document" />收款单</el-menu-item>
                <el-menu-item index="/money_in" :key="39" @click="addit('付款单','/assemble')"><i class="el-icon-document" />付款单</el-menu-item>
                <el-menu-item index="/financial" :key="33" @click="addit('转账单','/allocation_out')"><i class="el-icon-document" />转账单</el-menu-item>
                <el-menu-item index="/financial" :key="60" @click="addit('收预付款','/allocation_out')"><i class="el-icon-document" />收预付款</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="902">
            <template #title>
                <i class="el-icon-shopping-cart-2"></i>
                <span>采购管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/purchase_order" :key="104" @click="addit('采购订单','/purchase_order')"><i class="el-icon-document" />采购订单</el-menu-item>
                <el-menu-item index="/purchase_in" :key="105" @click="addit('采购入库','/purchase_in')"><i class="el-icon-document" />采购入库</el-menu-item>
                <el-menu-item index="/purchase_back" :key="106" @click="addit('采购退货','/purchase_back')"><i class="el-icon-document" />采购退货</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <i class="el-icon-box"></i>
                <span>仓库管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item  index="/other_in" :key="12" @click="addit('其他入库','/other_in')"><i class="el-icon-document" />其他入库</el-menu-item>
                <el-menu-item index="/other_out" :key="13" @click="addit('其他出库','/other_out')"><i class="el-icon-document" />其他出库</el-menu-item>
                <el-menu-item index="/allocation_out" :key="14" @click="addit('调拨出库','/allocation_out')"><i class="el-icon-document" />调拨出库</el-menu-item>
                <el-menu-item index="/assemble" :key="15" @click="addit('组装单','/assemble')"><i class="el-icon-document" />组装单</el-menu-item>
                <el-menu-item index="/disassemble" :key="16" @click="addit('拆卸单','/disassemble')"><i class="el-icon-document" />拆卸单</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="901">
            <template #title>
                <i class="el-icon-edit"></i>
                <span>生产管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/produce" :key="591" @click="addit('生产任务','/other_in')"><i class="el-icon-document" />生产任务</el-menu-item>
                <el-menu-item index="/produce" :key="581" @click="addit('BOM管理','/other_out')"><i class="el-icon-document" />BOM管理</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
            <template #title>
                <i class="el-icon-folder"></i>
                <span>报表查询</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/material_stock" :key="57" @click="addit('商品库存','/other_in')"><i class="el-icon-document" />商品库存</el-menu-item>
                <el-menu-item index="/account_report" :key="56" @click="addit('账户统计','/other_out')"><i class="el-icon-document" />账户统计</el-menu-item>
                <el-menu-item index="/buy_in_report" :key="55" @click="addit('进货统计','/allocation_out')"><i class="el-icon-document" />进货统计</el-menu-item>
                <el-menu-item index="/sale_out_report" :key="54" @click="addit('销售统计','/assemble')"><i class="el-icon-document" />销售统计</el-menu-item>
                <el-menu-item index="/in_detail" :key="34" @click="addit('入库明细','/assemble')"><i class="el-icon-document" />入库明细</el-menu-item>
                <el-menu-item index="/out_detail" :key="35" @click="addit('出库明细','/disassemble')"><i class="el-icon-document" />出库明细</el-menu-item>
                <el-menu-item index="/allocation_detail" :key="53" @click="addit('挑拨明细','/assemble')"><i class="el-icon-document" />调拨明细</el-menu-item>
                <el-menu-item index="/in_material_count" :key="52" @click="addit('入库汇总','/disassemble')"><i class="el-icon-document" />入库汇总</el-menu-item>
                <el-menu-item index="/out_material_count" :key="40" @click="addit('出库汇总','/disassemble')"><i class="el-icon-document" />出库汇总</el-menu-item>
                <el-menu-item index="/in_out_stock_report" :key="51" @click="addit('进销存统计','/disassemble')"><i class="el-icon-document" />进销存统计</el-menu-item>
                <el-menu-item index="/customer_account" :key="61" @click="addit('客户对账','/allocation_out')"><i class="el-icon-document" />客户对账</el-menu-item>
                <el-menu-item index="/vendor_account" :key="62" @click="addit('供应商对账','/assemble')"><i class="el-icon-document" />供应商对账</el-menu-item>
                <el-menu-item index="/stock_warning_report" :key="63" @click="addit('库存预警','/assemble')"><i class="el-icon-document" />库存预警</el-menu-item>
                <el-menu-item index="/saleRatioStatistics" :key="64" @click="addit('销售占比','/disassemble')"><i class="el-icon-document" />销售占比</el-menu-item>
                <el-menu-item index="/saleSort" :key="65" @click="addit('销售排行','/assemble')"><i class="el-icon-document" />销售排行</el-menu-item>
                <el-menu-item index="/minusStockStatistics" :key="66" @click="addit('负库存统计','/disassemble')"><i class="el-icon-document" />负库存统计</el-menu-item>
                <el-menu-item index="/profitReport" :key="67" @click="addit('利润报表','/disassemble')"><i class="el-icon-document" />利润报表</el-menu-item>
                <el-menu-item index="/attributeStock" :key="68" @click="addit('多属性库存','/disassemble')"><i class="el-icon-document" />多属性库存</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
            <template #title>
                <i class="el-icon-shopping-cart-full"></i>
                <span>商品管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="material_category"><i class="el-icon-document" />商品类别</el-menu-item>
                <el-menu-item index="material"><i class="el-icon-document" />商品信息</el-menu-item>
                <el-menu-item index="unit"><i class="el-icon-document" />计量单位</el-menu-item>
                <el-menu-item index="serial_number"><i class="el-icon-document" />序列号</el-menu-item>
                <el-menu-item index="material_attribute"><i class="el-icon-document" />多属性</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
            <template #title>
                <i class="el-icon-user"></i>
                <span>基本资料</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/vendor" :key="74" @click="addit('供应商信息','/vendor')"><i class="el-icon-document" />供应商信息</el-menu-item>
                <el-menu-item index="/customer" :key="75" @click="addit('客户信息','/customer')"><i class="el-icon-document" />客户信息</el-menu-item>
                <el-menu-item index="/member" :key="76" @click="addit('会员信息','/member')"><i class="el-icon-document" />会员信息</el-menu-item>
                <el-menu-item index="/depot" :key="77" @click="addit('仓库信息','/depot')"><i class="el-icon-document" />仓库信息</el-menu-item>
                <el-menu-item index="/in_out_item" :key="78" @click="addit('收支项目','/in_out_item')"><i class="el-icon-document" />收支项目</el-menu-item>
                <el-menu-item index="/account" :key="79" @click="addit('结算账户','/account')"><i class="el-icon-document" />结算账户</el-menu-item>
                <el-menu-item index="/person" :key="999" @click="addit('结算账户','/person')"><i class="el-icon-document" />经手人管理</el-menu-item>
                <el-menu-item index="/car" :key="80" @click="addit('车辆管理','/car')"><i class="el-icon-document" />车辆管理</el-menu-item>
                <el-menu-item index="/customerFollow" :key="81" @click="addit('客户跟进','/customerFollow')"><i class="el-icon-document" />客户跟进</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="7">
            <template #title>
                <i class="el-icon-location"></i>
                <span>系统管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/role" :key="82" @click="addit('角色管理','/role')"><i class="el-icon-document" />角色管理</el-menu-item>
                <el-menu-item index="/user" :key="83" @click="addit('用户管理','/user')"><i class="el-icon-document" />用户管理</el-menu-item>
                <el-menu-item index="/organization" :key="84" @click="addit('机构管理','/organization')"><i class="el-icon-document" />机构管理</el-menu-item>
                <el-menu-item index="/log" :key="85" @click="addit('日志管理','/log')"><i class="el-icon-document" />日志管理</el-menu-item>
                <el-menu-item index="/system_config" :key="86" @click="addit('系统配置','/system_config')"><i class="el-icon-document" />系统配置</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
    </div>
    <router-view style="z-index: 200;float: left;margin-top: 2.5rem;"></router-view>
    <div style="background-color:#fff;
    width: 62rem;
    height: 78vh;
    position: absolute;
    top: 7rem;
    right: 19rem;
    z-index: -1;"></div>
    <div class="component1" v-if="this.show">
        <div class="top" :key="123"><!--一值，二值，计数-->
            <div style="border-bottom: dodgerblue solid 5px;float: left;">&nbsp;&nbsp;
                <span @click="turnit('/')">首页&nbsp;&nbsp;</span></div><div style="float: left;height: 2rem;width: 0.2rem;"></div>
        </div>
        <div class="top" v-for="(value,key,index)  in listObject" :key="key+index"><!--一值，二值，计数-->
            <div style="border-bottom: dodgerblue solid 5px;float: left;">&nbsp;&nbsp;
                <span @click="turnit(value)">{{key}}&nbsp;&nbsp;</span><span @click="closeit(key,value)">×</span></div><div style="float: left;height: 2rem;width: 0.2rem;"></div></div>
        </div>
</template>
<script>

    export default {
        name:"top",
        props:{
            back:{
                type:String,
                required:true,
                default:'dark'
            },
            show:{
                type:Boolean,
                required:true,
                default:'true'
            }
        },
        data(){
            return{
                listObject:{
                    /*零售出库:'/retail_out',
                    零售退货:'/retail_back',
                    采购订单:'/purchase_order',
                    采购入库:'/purchase_in',
                    采购退货:'/purchase_back'*/
                },
               sum:1,
            place:[],
                isCollapse: false
        }
        },
        methods: {
            closeit(ket1,plcc) {
                delete this.listObject[ket1];
                if(this.place.indexOf(plcc)>0){
                    this.$router.push({path:this.place[this.place.indexOf(plcc)-1]});
                }else if(this.place.indexOf(plcc)===0){
                    this.$router.push({path:'/'});
                }
                else{
                    this.$router.push({path:'/'});
                }
                this.place.splice(this.place.indexOf(plcc),1);
                },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            addit(key,value){
                this.listObject[key]=value;//从后往前加
               this.place.push(value);
            },
            turnit(value){
                this.$router.push({path:value});
            }
        }
    }
</script>
<style scoped>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        font-size: 16px;
    }
    .component1{
        width: auto;
        height:2rem;
        background-color:white;
        /*border-left: dodgerblue solid 10px;*/
        position: absolute;
        left: 13rem;
        top: 6rem;
        overflow: hidden;
        z-index:100;
    }
    .top{
        float: left;
        height:2rem;
        width: auto;
        font-size: 20px;
        color: grey;

    }
    .l1{
        width: 12rem;
        height: auto;
        float: left;
        border-top: 1px solid hsla(0,0%,100%,.05);
        border-bottom: 1px solid rgba(0,0,0,.2);
        top:-3rem;
    }
  .el-submenu__title {

    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-radio-button__inner{position: absolute;
        top: -2.65rem;
        right: -10.7rem;
        z-index: 3;
        width: 12rem;}
    ::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
    }
</style>
