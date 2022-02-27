<!--
 * @Author: your name
 * @Date: 2021-09-11 20:18:17
 * @LastEditTime: 2021-09-12 18:53:06
 * @LastEditors: DESKTOP-TE06U1V
 * @Description: In User Settings Edit
 * @FilePath: \text001\0001\admin1\src\App.vue
--><template>
    <el-dialog title="账户信息" v-model="dialogTableVisible">
        <el-table :data="gridData">
            <el-table-column property="date" label="名称" width="150"></el-table-column>
            <el-table-column property="name" label="密码" width="200"></el-table-column>
            <el-table-column property="address" label="类型"></el-table-column>
        </el-table>
    </el-dialog>
    <el-container>

            <!--退出登录-->
            <div @click="dialogVisible = true"
                 style="margin-top: 1.2rem;
    font-size: 24px;
    color: white;
    margin-right: 2rem;  z-index:100;position: absolute;right:0;"
          >
                <i class="el-icon-arrow-right"></i>退出登录</div>




        <el-dialog
            title="提示"
            v-model="dialogVisible"
            width="30%"
            :before-close="handleClose"
    >
        <span>确认退出登录？</span>
        <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="outt()">确 定</el-button>
    </span>
        </template>
    </el-dialog>
      <el-header :class="colorr"><HeadLeft :bgcolor="colorr"/><HeadRight :bgcolor="colorr"/><el-dropdown :hide-on-click="false" style="position:absolute;font-size: 24px;right: 11rem;
    margin-top: 1.5rem;">
  <span class="el-dropdown-link" style="z-index: 100;">
    欢迎你，{{this.username}}
  </span>
        <template #dropdown>
          <el-dropdown-menu style="width: 10rem;">
            <el-dropdown-item @click="drawer = true">界面设置</el-dropdown-item>
            <el-dropdown-item @click="dialogTableVisible = true">账户信息</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      </el-header>
        <el-main> <div><Top :back="hax" :show="show" /></div><div style="position: absolute;right:-13px;top:6rem;width:3rem;height:6rem;background-color:white;"></div>
        </el-main></el-container>
  <el-drawer title="整体风格设置" v-model="drawer" :with-header="false">
      <span style="font-size: 24px;">&nbsp;&nbsp;整体风格设置</span>
      <el-tooltip
              class="item"
              effect="dark"
              content="Light Theme"
              placement="top-start"
              style="position: relative;top: 7rem;
    left: -9rem;"
      >
          <img @click="turnthemeLight()" :src="this.themelight" style="width: 3rem;height: 3rem;">
      </el-tooltip>
      <el-tooltip
              class="item"
              effect="dark"
              content="Dark Theme"
              placement="top-end"
              style="position: relative;top: 7rem;
    left: -6rem;"
      >
          <img @click="turnthemeDark()" :src="this.themeDark" style="width: 3rem;height: 3rem;">
      </el-tooltip>
      <div style="font-size: 24px;font-weight: 600;position: relative;top:10rem;">主题色</div>
      <div class="widContainer">
          &nbsp;&nbsp;
          <img class="colorChoose" :src="color1" @click="turnC1()"/>&nbsp;&nbsp;
          <img class="colorChoose" :src="color2" @click="turnC2()"/>&nbsp;&nbsp;
          <img class="colorChoose" :src="color3" @click="turnC3()"/>&nbsp;&nbsp;
          <img class="colorChoose" :src="color4" @click="turnC4()"/>&nbsp;&nbsp;
          <img class="colorChoose" :src="color5" @click="turnC5()"/>&nbsp;&nbsp;
          <img class="colorChoose" :src="color6" @click="turnC6()"/>&nbsp;&nbsp;
          <img class="colorChoose" :src="color7" @click="turnC7()"/>
      </div>
      <div style="position: relative;font-size: 24px;
        top: 15rem;left:0.1rem;font-weight: 600;"
      >头部标签</div>
      <el-switch v-model="show" active-color="#13ce66" inactive-color="#ff4949"
      style="position: relative;
        top: 17rem;left:2rem;"
      >
      </el-switch>
  </el-drawer>
    <div style="position: absolute;top:0;right:0;
    height: 100vh;width:200vh;background-color: black;
    z-index:290" v-if="this.login">
        <div style="position:relative;
width: 100%;
        height:1680px;
        background-image:url(https://pic.imgdb.cn/item/60e115595132923bf814eae5.png);
        background-repeat: no-repeat;
        background-position: top center;
        background-size:1680px 1608px;" v-if="this.login">
            <iframe width="400" height="60" src="https://i.tianqi.com/?c=code&a=getcode&id=35&site=34&icon=1" frameborder="0"></iframe>
            <div id="letsinit" v-show="show1"> <section id="banner">
                <div class="nav-bg">
                    <div id="nonono"><h1 style="position: center">登 &nbsp;录</h1></div>
                    <pre>

        </pre>
                    <label for="xxx" class="a1"><span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          account:</span></label>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="xxx" ref="userphone">
                    <div style="height:20px;width:auto;font-size: 5px;" >&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<div style="display: inline;color: darkred;background-color:darksalmon;" v-show="shows1">
                            请输入正确的中文名&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</div>
                    </div>
                    <label for="ac" class="a1"><span> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          password:</span></label>
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="ac" ref="password">
                    <div style="height:5px;width:auto;font-size: 5px;" v-show="shows2">&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<div style="display: inline;color: darkred;background-color:darksalmon;">
                            密码错误，请输入正确的密码&nbsp;</div></div>
                    <div style="height:10px;width:auto"></div>
                    <div style="height:5px;width:auto" v-show="show3"></div>
                    <div style="color:dodgerblue;font-size: 12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp; &nbsp;&nbsp;&nbsp;
                        <input type="checkbox" id="inapp" style="position: relative;bottom: -2px;" v-on:click="countt">
                        勾选后登录代表同意《服务条款》</div>
                    <div style="height:45px;width:auto"></div>
                    <el-row>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-button round style="width: 100px;height: 46px;" v-on:click="newit">注&nbsp;&nbsp;&nbsp;册</el-button>&nbsp;&nbsp;&nbsp;
                        <el-button type="primary" style="width: 100px;height: 46px;background-color:deepskyblue;" v-on:click="qw">登&nbsp;&nbsp;&nbsp;录</el-button>
                    </el-row>
                </div><!--玻璃状盒子  -->
            </section></div>
            <!--  注册盒子-->
            <div id="newuser" v-show="show2">
                <section id="banner1">
                    <div class="nav-bg">
                        <div id="nonono1"><h1 style="position: center">欢&nbsp;迎&nbsp;注&nbsp;册</h1></div>
                        <pre>
        </pre>
                        <label for="xxx1" class="a1"><span>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          account:</span></label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="xxx1" ref="phonenumber">
                        <div style="height:5px;width:auto;font-size: 5px;" v-show="shows3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; <div style="display: inline;color: darkred;background-color:darksalmon;">
                                请输入正确的手机号码</div></div>
                        <div style="height:15px;width:auto;"></div>
                        <label for="ac1" class="a1"><span> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          password:</span></label>
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="ac1" ref="newpassword">
                        <div style="height:5px;width:auto;font-size: 5px;" v-show="shows4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; <div style="display: inline;color: darkred;background-color:darksalmon;">
                                密码长度必须在6-20位之间,必须包含英文字母大小写</div></div>
                        <div style="height:15px;width:auto;"></div>
                        <label for="ac12" class="a1"><span>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          password again:</span></label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" id="ac12" ref="passwordagain">
                        <div style="height:5px;width:auto;font-size: 5px;" v-show="shows5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp; <div style="display: inline;color: darkred;background-color:darksalmon;">
                                密码与首次输入的不同</div></div>
                        <div style="height:15px;width:auto;"></div>
                        <div style="color:dodgerblue;font-size: 12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;<input type="checkbox" style="position: relative;bottom: -2px;" v-on:click="counttt">勾选后登录代表同意《服务条款》</div>
                        <div style="width: auto;height: 17px;"></div>
                        <el-row>
                            <el-button round class="enddd" v-on:click="a122">&nbsp;&nbsp;&nbsp;注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</el-button>
                        </el-row>
                        <div style="height: 14px;width: auto"></div>
                        <el-row>
                            <el-button round class="enddd" v-on:click="inthemain">&nbsp;&nbsp;返&nbsp;回&nbsp;登&nbsp;录</el-button>
                        </el-row>
                    </div><!--玻璃状盒子  -->
                </section>
            </div>
        </div>
          </div>
</template>
<script>
import HeadLeft from '@/components/HeadLeft.vue'
import HeadRight from '@/components/HeadRight.vue'
import Top from '@/components/Top.vue'
import { defineComponent } from "vue"
import {ElMessage, ElMessageBox} from "element-plus";
export default defineComponent({
  name: 'home',
  data(){return{
      dialogVisible: false,
    username:'',
      mima:'',
    drawer: false,
      colorr:'light',
      hax:'#fff',
      show: true,
login:true,
  themelight:'https://pic.imgdb.cn/item/61409c4144eaada739729d59.png',
      themeDark:'https://pic.imgdb.cn/item/61409c5a44eaada73972c1e0.png',
      color1:'https://pic.imgdb.cn/item/61409c7044eaada73972e075.png',
      color2:'https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png',
      color3:'https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png',
      color4:'https://pic.imgdb.cn/item/61409cb744eaada739734712.png',
      color5:'https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png',
      color6:'https://pic.imgdb.cn/item/61409cf244eaada73973a012.png',
      color7:'https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png',
      radio: '1' ,
      show1:true,
      show2:false,
      show3:false,
      count1:0,
      count2:0,
      shows1:false,
      shows2:false,
      shows3:false,
      shows4:false,
      shows5:false,
      gridData: [
          {
              date: '',
              name: '',
              address: '测试',
          }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
      },
      formLabelWidth: '120px'


  }
  },
    methods:{
      turnthemeLight()
      {this.themelight='https://pic.imgdb.cn/item/61409c4f44eaada73972b284.png';
          this.themeDark='https://pic.imgdb.cn/item/61409c5a44eaada73972c1e0.png';
this.hax="#fff";
this.colorr='light';
      },
        turnthemeDark(){
this.themeDark='https://pic.imgdb.cn/item/61409c6544eaada73972d008.png';
            this.themelight='https://pic.imgdb.cn/item/61409c4144eaada739729d59.png';
            this.hax="#001529";this.colorr='dark';
        },
        turnC1(){
          this.color1='https://pic.imgdb.cn/item/61409c7944eaada73972ed26.png';//一个转换，其余还原
            this.color2='https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png';
            this.color3='https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png';
            this.color4='https://pic.imgdb.cn/item/61409cb744eaada739734712.png';
            this.color5='https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png';
            this.color6='https://pic.imgdb.cn/item/61409cf244eaada73973a012.png';
            this.color7='https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png';
            this.hax="#1890ff";this.colorr='light';
            },
        turnC2(){
            this.color2='https://pic.imgdb.cn/item/61409c9644eaada739731878.png';//一个转换，其余还原
            this.color1='https://pic.imgdb.cn/item/61409c7044eaada73972e075.png';
            this.color3='https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png';
            this.color4='https://pic.imgdb.cn/item/61409cb744eaada739734712.png';
            this.color5='https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png';
            this.color6='https://pic.imgdb.cn/item/61409cf244eaada73973a012.png';
            this.color7='https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png';
            this.hax="#6ccd3d";this.colorr='color6';
        },
        turnC3(){
            this.color3='https://pic.imgdb.cn/item/61409cae44eaada739733aa5.png';//一个转换，其余还原
            this.color2='https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png';
            this.color1='https://pic.imgdb.cn/item/61409c7044eaada73972e075.png';
            this.color4='https://pic.imgdb.cn/item/61409cb744eaada739734712.png';
            this.color5='https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png';
            this.color6='https://pic.imgdb.cn/item/61409cf244eaada73973a012.png';
            this.color7='https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png';
            this.hax="#37cbcb";this.colorr='color4';
        },
        turnC4(){
            this.color4='https://pic.imgdb.cn/item/61409cbe44eaada73973524c.png';//一个转换，其余还原
            this.color2='https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png';
            this.color3='https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png';
            this.color1='https://pic.imgdb.cn/item/61409c7044eaada73972e075.png';
            this.color5='https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png';
            this.color6='https://pic.imgdb.cn/item/61409cf244eaada73973a012.png';
            this.color7='https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png';
            this.hax="#faae16";this.colorr='color3';
        },
        turnC5(){
            this.color5='https://pic.imgdb.cn/item/61409cd044eaada739736d84.png';//一个转换，其余还原
            this.color2='https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png';
            this.color3='https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png';
            this.color4='https://pic.imgdb.cn/item/61409cb744eaada739734712.png';
            this.color1='https://pic.imgdb.cn/item/61409c7044eaada73972e075.png';
            this.color6='https://pic.imgdb.cn/item/61409cf244eaada73973a012.png';
            this.color7='https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png';
            this.hax="#fa5821";this.colorr='color2';
        },
        turnC6(){
            this.color6='https://pic.imgdb.cn/item/61409cff44eaada73973b238.png';//一个转换，其余还原
            this.color2='https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png';
            this.color3='https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png';
            this.color4='https://pic.imgdb.cn/item/61409cb744eaada739734712.png';
            this.color5='https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png';
            this.color1='https://pic.imgdb.cn/item/61409c7044eaada73972e075.png';
            this.color7='https://pic.imgdb.cn/item/61409d0744eaada73973bdd3.png';
            this.hax="#fff";this.colorr='color1';
        },
        turnC7(){
            this.color7='https://pic.imgdb.cn/item/61409d1144eaada73973ca14.png';//一个转换，其余还原
            this.color2='https://pic.imgdb.cn/item/614484022ab3f51d91118f06.png';
            this.color3='https://pic.imgdb.cn/item/61409c8e44eaada739730ced.png';
            this.color4='https://pic.imgdb.cn/item/61409cb744eaada739734712.png';
            this.color5='https://pic.imgdb.cn/item/61409cc744eaada739735fa0.png';
            this.color6='https://pic.imgdb.cn/item/61409cf244eaada73973a012.png';
            this.color1='https://pic.imgdb.cn/item/61409c7044eaada73972e075.png';
            this.hax="#fff";this.colorr='purple';
        },
        newit: function () {
            this.show2 = true;
            this.show1 = false;
            alert("不用注册,直接输个四字中文名即可，密码符合格式即可." +
                "示例:打工人;123456abAB");
        },
        inthemain: function () {
            this.show1 = true;
            this.show2 = false;
        },
        countt: function () {
            this.count1++;
        },
        counttt: function () {
            this.count2++;
        },
        a122: function () {
            if (this.count2 % 2 == 0) {
                alert("请勾选'同意服务条款'");
            }
            if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(this.$refs.phonenumber.value))){
                this.shows3=true;
            }
            else{
                this.shows3=false;
            }
            if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(this.$refs.newpassword.value))){
                this.shows4=true;
            }
            else{
                this.shows4=false;
            }
            if(this.$refs.newpassword.value!=this.$refs.passwordagain.value){this.shows5=true;}
            else {this.shows5=false;}
        },
        qw: function () {
            if(!(/^[\u4e00-\u9fa5]{1,4}$/g.test(this.$refs.userphone.value))){
                this.shows1=true;
            }
            else{
                this.shows1=false;
            }
            if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(this.$refs.password.value))){
                this.shows2=true;
            }
            else{
                this.shows2=false;
            }
            if(!(/^[\u4e00-\u9fa5]{1,4}$/g.test(this.$refs.userphone.value))){
                this.shows1=true;
            }
            if (this.count1 % 2 == 0) {
                alert("请勾选'同意服务条款'");
            }else if(this.shows1==false&&this.shows2==false)
            {this.login=false;
            this.username=this.$refs.userphone.value;
            this.password=this.$refs.password.value;
                this.gridData[0].date=this.$refs.userphone.value;
                this.gridData[0].name=this.$refs.password.value;
            }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then((_) => {
                    done()
                })
                .catch((_) => {})
        },
        outt(){
            this.dialogVisible = false;
            this.login=true;
        }


    },
  components: { HeadLeft,HeadRight,Top }
})
</script>
<style scoped>
  .el-header{
    --el-header-padding: 0 0px;
    --el-header-height: 4rem;
  }
  .font {
    font-size: 34px;
    color: white;
    font-weight: 600;
    height: 5rem;
    width: 12rem;
    float:left;
    top: 0;
    left: 0;
  }
  .mainn{
    position: absolute;
    width: 19rem;
    top:9rem;
    left:15rem;
    background-color:green;
    height:78vh;
    overflow: auto;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-header {
      --el-header-padding: 0 0px;
      --el-header-height: 5rem;
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
  .color7{
      background-color:rgb(108, 206, 61);
      width: 95rem;
      height: 5rem;
  }
  .light{
      background-color:dodgerblue; width: 95rem;
      height: 5rem;
  }
  .dark{
      background-color:rgb(0, 33, 64); width: 95rem;
      height: 5rem;
  }
  .colorChoose{
      width: 1.5rem;
      height:1.5rem;
  }
    .widContainer{
        position: relative;
        top: 13rem;
    }
  .purple{
      background-color:#884ed8;
      width: 95rem;
      height: 5rem;
  }
  #nonono1{
      display: flex;
      justify-content:center;
  }
  #nonono{
      display: flex;
      justify-content:center;
  }
  #banner {
      height: 170px;
      overflow: hidden;
  }
  #banner1 {
      height: 170px;
      overflow: hidden;
  }
  .nav-bg {
      z-index: 1;
      position:absolute;
      width: 25rem;
      height:30rem;
      margin: 30px;
      overflow: hidden;
      left:34rem;
      top:5.5rem;
      border-radius: 1.1rem;
      transform: scale(1.25);
  }

  .nav-bg::before {
      position: absolute;
      left: 0;
      z-index: -1;
      top: 0;
      width: 100%;
      height: 100%;
      content: "";
      filter: blur(2px);
  }

  .nav-bg::after {
      left: 0;
      position: absolute;
      z-index: -1;
      top: 0;
      width: 100%;
      height: 100%;
      content: "";
      background-color: rgba(255, 255, 255, 0.4);
  }
  .nav-con li {
      float: left;
      margin-right: 10px;
  }
  .a1{
      display:block;
      color: gray;
  }
  #xxx{ background:none;border:none;border-bottom:1px solid black;width: 210px;}
  #ac{background:none;border:none;border-bottom:1px solid black;width: 210px;}
  #xxx1{ background:none;border:none;border-bottom:1px solid black;width: 210px;}
  #ac1{background:none;border:none;border-bottom:1px solid black;width: 210px;}
  #ac12{background:none;border:none;border-bottom:1px solid black;width: 210px;}
  input:focus{
      outline: none;
  }
  .enddd{
      width:300px;
      height:37px;
      background-color:lightskyblue;
      overflow: hidden;
      display:block;
      margin:0 auto;
  }
</style>