<template>
<!-- 主框 -->
    <div>
        <div class="main-coner">
            <div class="main-image">
                <img src="../../assets/images/secbg.png" alt="">
            </div>

            <div class="main-banxin">
                <!-- 头部 -->
                <div class="main-top-tips">
                    <div class="top-left">
                        <div class="hd-img">
                            <img src="../../assets/images/344.jpg" alt="">
                        <span>操作人：{{username}}</span>
                        </div>
                    </div>
                    <div class="top-right">
                        <span class="r-time">登录时间：{{time}}</span>
                        <div class="r-button"  @click="logout">
                            <i class="el-icon-switch-button"></i>退出
                        </div>
                    </div>
                </div>

                <!-- 中部 -->
                <div class="main-middle">
                    <div class="main-tab">
                        <div class="bititle">
                        <div class="back" @click="goBack">
                            <i class="el-icon-back"></i>返回
                        </div>
                        <div class="ji">
                            已处理：20199999979898
                        </div>
                        </div>
                            <div style="margin-bottom:100px;">
                            <div class="checking-box">
                                <div class="ck-tit">审批结论：{{shenhedetail.checkDesc}}</div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="text-align:justify;line-height:25px;">
                                        <p style="text-indent:2em">{{shenhedetail.checkRemark}}</p>
                                    </div>
                                </div>

                                
                                <div class="ck-se">
                                <div class="ck-tit">申请人信息</div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="height:256px;">
                                        <el-row class="ck-row">
                                            <el-col :span="12">姓名：{{data.name}}</el-col>
                                            
                                            <el-col :span="6">注册手机号：{{data.registMobile}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(data.registMobile)">电核情况</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">身份证：{{data.idCard}}</el-col>
                                            <el-col :span="6">申请手机号：{{data.applyMobile}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(data.applyMobile)">电核情况</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            
                                            <el-col :span="4">
                                                <span>生肖：{{data.zodiac}}</span>   
                                            </el-col>
                                            <el-col :span="4"> 
                                                <span>性别：
                                                    <span v-if="data.sex == 1">男</span>
                                                    <span v-else>女</span>
                                                </span>   
                                            </el-col>
                                            <el-col :span="4">   
                                                <span>年龄：{{data.age}}</span>
                                            </el-col>
                                            <el-col :span="6">银行预留手机号：{{data.bankMobile}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(data.bankMobile)">电核情况</div>
                                            </el-col>
                                        </el-row>

                                        <el-row class="ck-row">
                                            <el-col :span="12">工作单位：{{data.company}}</el-col>
                                            <el-col :span="6">其他手机号：{{data.othMobile}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(data.othMobile)">电核情况</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">单位电话：{{data.companyMobile}}</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col>单位地址：{{data.companyAddress}}</el-col>
                                        </el-row>
                                    </div>
                                </div>

                                <div class="ck-se">
                                <div class="ck-tit">影像信息</div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="height:100%;">
                                        <el-row class="ck-row">
                                            <el-col :span="6" class="go-center">
                                                <!-- <img src="../../assets/images/idup.png" alt=""> -->
                                                <div class="go-img">
                                                <img :src="this.imgfront" alt="">
                                                </div>
                                                <div class="nk-ok">
                                                    <div class="df">身份证正面</div>
                                                    <div class="ckrow-buttons" @click="hecha(1)">核查情况</div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6"  class="go-center">
                                                <!-- <img src="../../assets/images/iddown.png" alt=""> -->
                                                <div class="go-img">
                                                <img :src="this.imgfront" alt="">
                                                </div>
                                                <div class="nk-ok">
                                                    <div class="df">身份证反面</div>
                                                    <div class="ckrow-buttons" @click="hecha(2)">核查情况</div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="go-center">
                                                <!-- <img src="../../assets/images/timg.gif" alt=""> -->
                                                <div class="re-img ">
                                                <img :src="this.imgfront" alt="">
                                                </div>
                                                <div class="nk-oks">
                                                    <div class="df">活体截图</div>
                                                    <div class="ckrow-buttons" @click="hecha(3)">核查情况</div>
                                                </div>
                                            </el-col>
                                            
                                            <div v-for="item in other" :key="item.index">
                                            <el-col :span="6" class="re-img go-center" >
                                                <img :src="item.imageUrl" alt="">
                                                <div  class="nk-oks2">
                                                    {{item.imageTypeDesc}}(补件)
                                                </div>
                                            </el-col>
                                            </div>

                                        </el-row>
                                    </div>
                                </div>

                                <div class="ck-se">
                                <div class="ck-tit">联系人信息</div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="height:146px;">
                                        <el-row class="ck-row">
                                            <el-col :span="12">姓名：{{contractdata.contactsName}}</el-col>
                                            <el-col :span="12">姓名：{{contractdata.otherContactsName}}</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">关系：
                                                <span v-if="contractdata.contactsRelation == 0">配偶</span>
                                                <span v-else-if="contractdata.contactsRelation == 1">父母</span>
                                                <span v-else="contractdata.contactsRelation == 2">子女</span>
                                            </el-col>
                                            <el-col :span="12">关系：
                                                <span v-if="contractdata.otherContactsRelation == 0">亲属</span>
                                                <span v-else-if="contractdata.otherContactsRelation == 1">朋友</span>
                                                <span v-else-if="contractdata.otherContactsRelation == 2">同事</span>
                                                <span v-else="contractdata.otherContactsRelation == 3">同学</span>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="6">
                                                电话：{{contractdata.contactsPhone}}
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(contractdata.contactsPhone)">电核情况</div>
                                            </el-col>
                                            <el-col :span="6">
                                                电话：{{contractdata.otherContactsPhone}}
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(contractdata.otherContactsPhone)">电核情况</div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>

                                
                                <div class="ck-se">
                                <div class="ck-tit">借款信息</div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="height:146px;">
                                        <el-row class="ck-row">
                                            <el-col :span="12">借款金额：{{loaninfo.loanAmount}}</el-col>
                                            <el-col :span="12">订单金额：{{loaninfo.orderAmount}}</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">借款期限：{{loaninfo.term}}</el-col>
                                            <el-col :span="6">还款方式：{{loaninfo.loanType}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button"    @click="getrepayplan">详细还款计划</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <!-- <el-col :span="12">
                                                银行卡：{{loaninfo.loanAmount}}
                                            </el-col> -->
                                            <el-col :span="12">
                                                还款日：{{loaninfo.returnDate}}
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>

                                
                                <div class="ck-se">
                                <div class="ck-tit">商户信息</div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="height:146px;">
                                        <el-row class="ck-row">
                                            <el-col>商户名称：{{mchinfo.mchName}}</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col>商户地址：{{mchinfo.mchAddress}}</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">
                                                商户联系人：{{mchinfo.mchContact}}
                                            </el-col>
                                            <el-col :span="6">
                                                联系电话：{{mchinfo.mobile}}
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe(mchinfo.mobile)">电核情况</div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                            </div></div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>

            </div>
        </div>

        <!-- 还款计划查看弹框 -->
        <el-dialog title="还款计划"  top='30vh'  center :visible.sync="dialogTableVisible">
            <el-table
            :data="repayplan"
            border
            size="mini"
            stripe
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            style="width:100%; height:100%;"
        >
            <el-table-column prop="term" label="期数" align="center"></el-table-column>
            <el-table-column prop="repayDate" label="还款日" align="center" width="145"></el-table-column>
            <el-table-column prop="total" label="应还款金额" align="center" width="145"></el-table-column>
            <el-table-column prop="principal" label="应还本金" align="center" width="145"></el-table-column>
            <el-table-column prop="interest" label="应还利息" align="center" width="145"></el-table-column>
            <el-table-column prop="otherFees" label="应还其他费用" align="center"></el-table-column>
            </el-table>
        </el-dialog>

        <!-- 电核情况 -->
        <el-dialog title="电核情况" center  top='30vh'  :visible.sync="dialogdianheVisible">
            <el-collapse accordion>
                <el-collapse-item v-if="dianhelist==''" title="无数据">
                    <div>接通状态：无数据</div>
                    <div>接通详情：无数据</div>
                </el-collapse-item>

                <el-collapse-item v-else v-for="item in dianhelist" :key="item.index"  :title="item.cTime">
                    <div>接通状态：{{item.phoneCheckDesc}}
                    </div>
                    <div>接通详情：{{item.phoneRemark}}
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-dialog>

        <!-- 核查情况 -->
        <el-dialog center :visible.sync="dialoghechaVisible" top='30vh' style="width:50%;margin:0 auto;">
            <span slot="title" class="dialog-title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test1" />
            </svg>{{hechalist.imageCheckDesc}}</span>
            <div style="font-size: 18px;color: #aaabb8;margin:0 auto;text-indent:2em">
                {{hechalist.imageRemark}}
            </div>
        </el-dialog>
   </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [],
            dialogTableVisible: false,//还款计划弹框
            dialogdianheVisible: false,//电核情况
            dialoghechaVisible:false,//核查情况
            activeName: '',//电核情况内容
            textarea: '',   //审批结论

            shenhedetail:[],//审核详情

            hechalist:[],//核查情况

            //申请人信息
            data:[],

            
            time:'',
            username:'',

            //影像信息
            imgfront:'',//正面
            imgback:'',//反面
            huoti:'',//活体
            other:[],//其他
            
            //还款计划
            repayplan:[],

            //联系人信息
            contractdata:[],
            
            //借款信息
            loaninfo:[],

            //商户信息
            mchinfo:[],

            //电核情况
            dianhelist:[]
        }
    },
    mounted() {
        this.gettime();
        this.getshenhedetail();//获取审核详情
        this.getbaseinfo();//获取申请人信息
        this.getcontractinfo();//获取联系人信息
        this.getimglist();//获取影像信息
        this.getloaninfo();//获取借款信息
        this.getmchinfo();//获取商户信息
    },
    methods: {
        //获取登陆时间
        gettime(){
            this.$axios({
                method: "get",
                url: "/bus/loginInfo",
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                        this.time = res.data.loginTime
                        this.username = res.data.userName
                    }else{
                    
                    }
                },
                error => {}
            );
        },
        //登出
        logout(){
            this.$confirm('确定退出登录？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        showCancelButton:false,
                        type: 'warning'
                        }).then(() => {
                        //确定
                        var url = 'http://dev.user.msxiaodai.com/logout'; 
                        window.location.href = url
                        }).catch(() => {
                            //取消    
                        });
        },
        //核查情况
        hecha(index){
            this.dialoghechaVisible = true

             //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "get",
                url: "/checkBench/getImageCheck",
                params: {
                        'applyNo': applyNo,
                        'imageType': index
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.hechalist = res.data
                } else {
                    this.$message({
                    message: '获取核查情况失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },
        //获取审核详情
        getshenhedetail(){
            //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "post",
                url: "/checkBench/getCheck",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.shenhedetail = res.data
                } else {
                    this.$message({
                    message: '获取审核详情失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },
        
        //获取申请人信息
        getbaseinfo(){
             //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "get",
                url: "/checkBench/base",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.data = res.data
                } else {
                    this.$message({
                    message: '获取申请人信息失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

        
        //获取影像信息
        getimglist(){
             //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "get",
                url: "/checkBench/listImage",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.other=res.data.addImageList;
                    (res.data.imageList).forEach((data)=>{

                        if(data.imageType==1){
                            this.imgfront = data.imageUrl
                        }else if(data.imageType==2){
                            this.imgback = data.imageUrl
                        }else{
                            this.huoti = data.imageUrl
                        }
                    })
                } else {
                    this.$message({
                    message: '获取影像信息失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },


        // 查看电核情况
        dianhe(phone){
            var applyNo = this.$route.query.applyNo;
            var phone = phone;
            this.dialogdianheVisible = true;

            this.$axios({
                method: "get",
                url: "/checkBench/getPhoneCheck",
                params: {
                        'applyNo': applyNo,
                        'phone':phone
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.dianhelist = res.data
                } else {
                    this.$message({
                    message: '电核情况获取失败！',
                    type: "error"
                    });
                }
                },
                error => {
                    this.$message({
                    message: '电核情况获取失败！',
                    type: "error"
                    });
                }
            );

        },
        
        //获取联系人信息
        getcontractinfo(){
             //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "get",
                url: "/checkBench/contact",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.contractdata = res.data
                } else {
                    this.$message({
                    message: '获取联系人信息失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

         
        //获取借款信息
        getloaninfo(){
             //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "get",
                url: "/checkBench/loan",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.loaninfo = res.data
                } else {
                    this.$message({
                    message: '获取借款信息失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

        
        //获取商户信息
        getmchinfo(){
             //获取流水号
            var applyNo = this.$route.query.applyNo

            this.$axios({
                method: "get",
                url: "/checkBench/mch",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.mchinfo = res.data
                } else {
                    this.$message({
                    message: '获取商户信息失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

        //获取还款计划
        getrepayplan(){
            //获取流水号
            var applyNo = this.$route.query.applyNo
            this.dialogTableVisible = true;
            this.$axios({
                method: "post",
                url: "/checkBench/listRepayPlan",
                params: {
                        'applyNo': applyNo
                    }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.repayplan = res.data
                } else {
                    this.$message({
                    message: '获取商户信息失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

        //查看还款计划
        showrepayplan(){
            this.dialogTableVisible = true;
        },

        //返回上一页
        goBack() {
        this.$router.push('/mainhome')
      }
    }
}
</script>

<style lang="less">
@import'../style/common.css';
@import'../style/main.css';
// 版心
.main-banxin{
    font-family: PingFangSC-Regular, sans-serif;
    position: relative;
    width: 1305px;
    height: 0;
    padding-bottom: 70%;
    margin: 0 auto;
    z-index: 999;

    // 头部
    .main-top-tips{
        position: absolute;
        border-bottom: 1px solid #6189ff;
        padding-bottom: 2%;
        top: 1%;
        width: 100%;
        display: flex;
        .top-left{
            flex: 1;
            .hd-img{
                width: 100%;
                height: 61px;
                line-height: 61px;
                font-size: 28px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
                img{
                    width: 61px;
                    height: 61px;
                    border-radius: 50%;
                    vertical-align: middle;
                    padding: 0 10px;
                }
            }
        }
        .top-right{
            flex: 1;
            text-align: right;
            display: flex;
            .r-time{
                flex: 1;
                height: 61px;
                line-height: 61px;

                width: 255px;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
            }
            .r-button{
                width: 115px;
                height: 43px;
                border-radius: 4px;
                border: solid 1px #ffffff;
                font-size: 16px;
                text-align: center;
                font-weight: normal;
                font-stretch: normal;
                line-height: 43px;
                letter-spacing: 0px;
                color: #ffffff;
                margin: auto 0;
                margin-left: 20px;
                cursor: pointer;
            }
        }
    }
    // 中部
    .main-middle{
        position: absolute;
        top: 150px;
        width: 100%;
        min-height: 740px;
        .main-tab{
            .bititle{
                height: 45px;
                line-height: 45px;
                margin-bottom: 30px;
                padding: 0 5px;
                .back{
                    float: left;
                    color: #ffffff;
                    font-size: 20px;
                    cursor: pointer;
                }
                .ji{
                    float: right;
                    color: #ffffff;
                    font-size: 20px;
                    border-bottom: 5px solid #ffffff;
                    cursor: pointer;
                }
            }
            //改写tab样式
            .el-tabs__nav-wrap {
                margin-bottom: 30px;
            }
            .el-tabs__item {
                // padding: 0 0 0 8px;
                height: 48px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                line-height: 40px;
                display: inline-block;
                list-style: none;
                font-size: 20px;
                font-weight: 500;
                color: #ffffff;
                position: relative;
            }

            .el-tabs__active-bar {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 5px;
                background-color: #ffffff;
                z-index: 1;
                -webkit-transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
                transition: -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
                transition: transform .3s cubic-bezier(.645,.045,.355,1);
                transition: transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1);
                transition: transform .3s cubic-bezier(.645,.045,.355,1),-webkit-transform .3s cubic-bezier(.645,.045,.355,1);
                list-style: none;
            }

            .el-tabs__nav-wrap::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 2px;
                background-color: rgb(26, 84, 199);
                display: none;
                z-index: 1;
            }
        }
        .main-import{
            height: 45px;
            position: absolute;
            right: 0;
            cursor: pointer;
            z-index: 999;
            .import{
                width: 115px;
                height: 43px;
                text-align: center;
                background-color: #f5f5f9;
                border-radius: 4px;
                border: solid 1px #ffffff;

                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 43px;
                letter-spacing: 0px;
                color: #4977fc;
            }
        }
    }

}
</style>