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
                        <span>操作人：</span>
                        </div>
                    </div>
                    <div class="top-right">
                        <span class="r-time">登录时间：2019.10.30 12:35:40</span>
                        <div class="r-button">
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
                            审批：20199999979898
                        </div>
                        </div>
                            <div style="margin-bottom:100px;">
                            <div class="checking-box">
                                <div class="ck-tit">规则提示信息</div>
                                <div class="ck-pag">
                                    <div class="ck-table">
                                        <p>1、3个月内申请人借贷平台数</p>
                                        <p>2、1个月内申请人借贷申请平台数</p>
                                        <p>3、7天内申请借贷申请平台数</p>
                                        <p>4、信用分</p>
                                        <p>5、同盾欺诈分</p>
                                    </div>
                                </div>

                                <div class="ck-se">
                                <div class="ck-tit">审批结论</div>
                                <div class="ck-select">
                                    <el-select v-model="form.checked" 
                                    placeholder="请选择">
                                    <el-option v-for="item in options3"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"></el-option>
                                    </el-select>
                                </div>
                                <div class="ck-button" @click="subsp">
                                    提交
                                </div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table">
                                        <el-input
                                        type="textarea"
                                        :rows=6
                                        placeholder="请输入内容"
                                        v-model.trim="form.checkRemark">
                                        </el-input>
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
                                                <div class="ckrow-button" @click="boda(data.registMobile)">拨打情况</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">身份证：{{data.idCard}}</el-col>
                                            <el-col :span="6">申请手机号：{{data.applyMobile}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda(data.applyMobile)">拨打情况</div>
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
                                                <div class="ckrow-button" @click="boda(data.bankMobile)">拨打情况</div>
                                            </el-col>
                                        </el-row>

                                        <el-row class="ck-row">
                                            <el-col :span="12">工作单位：{{data.company}}</el-col>
                                            <el-col :span="6">其他手机号：{{data.othMobile}}</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda(data.othMobile)">拨打情况</div>
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
                                                <div class="go-img">
                                                    <img :src="this.imgfront" alt="">
                                                </div>
                                                <div class="nk-ok">
                                                    <div class="df">身份证正面</div>
                                                    <div class="df-s">
                                                        <div class="ckrow-button" @click="boda(data.othMobile)">核查情况</div>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6"  class="go-center">
                                                <div class="go-img">
                                                    <img :src="this.imgback" alt="">
                                                </div>
                                                <div class="nk-ok">
                                                    <div class="df">身份证反面</div>
                                                    <div class="df-s">
                                                        <!-- <el-select placeholder="请选择">
                                                        <el-option label="通过" value="shanghai"></el-option>
                                                        <el-option label="拒绝" value="beijing"></el-option>
                                                        <el-option label="待补件" value="beijing"></el-option>
                                                        </el-select> -->
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="re-img go-center">
                                                    <img :src="this.huoti" alt="">
                                                <div class="nk-oks">
                                                    <div class="df">活体截图</div>
                                                    <div class="df-s">
                                                        <!-- <el-select placeholder="核查情况">
                                                        <el-option label="正常" value="shanghai"></el-option>
                                                        <el-option label="缺失" value="beijing"></el-option>
                                                        <el-option label="电子屏" value="beijing"></el-option>
                                                        <el-option label="其他" value="beijing"></el-option>
                                                        </el-select> -->
                                                    </div>
                                                </div>
                                            </el-col>
                                            <!-- <el-col :span="6" class="re-img go-center">
                                                <img src="../../assets/images/timg.gif" alt="">
                                                <div class="nk-oks">
                                                    <div class="df">其他</div>
                                                    <div class="df-s">
                                                    </div>
                                                </div>
                                            </el-col> -->

                                            <el-col :span="6" class="re-img go-center">
                                                <el-upload
                                                class="upload-demo"
                                                drag
                                                :show-file-list='false'
                                                action="https://jsonplaceholder.typicode.com/posts/"
                                                multiple>
                                                <i class="el-icon-upload"></i>
                                                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em><br>
                                                <b>只能上传jpg/png文件，且不超过500kb</b>
                                                </div>
                                                </el-upload>
                                            </el-col>
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
                                                <div class="ckrow-button" @click="boda(contractdata.contactsPhone)">拨打情况</div>
                                            </el-col>
                                            <el-col :span="6">
                                                电话：{{contractdata.otherContactsPhone}}
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda(contractdata.otherContactsPhone)">拨打情况</div>
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
                                                <div class="ckrow-button"  @click="getrepayplan">详细还款计划</div>
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
                                                <div class="ckrow-button" @click="boda(mchinfo.mobile)">拨打情况</div>
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
        
        <!-- 拨打情况弹框 -->
        <el-dialog title="拨打情况"  top='30vh'  center :visible.sync="dialogbodaVisible">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="拨打情况">
                <el-select v-model="bodaform.phoneCheck" 
                    placeholder="请选择">
                    <el-option v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="沟通详情">
                <el-input type="textarea" :rows="4" v-model="bodaform.phoneRemark"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="bodaonSubmit()">确定</el-button>
                <el-button @click="dialogbodaVisible = false">取消</el-button>
            </el-form-item>
            </el-form>
        </el-dialog>

        
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
   </div>
</template>
<script>
export default {
    data(){
        return{
            //拨打下拉框
            options2: [{
            value: 0,
            label: "正常"
            },
            {
            value: 1,
            label: "接听挂断"
            },
            {
            value: 2,
            label: "未接通"
            },
            {
            value: 3,
            label: "号码错误"
            },
            {
            value: 4,
            label: "空号"
            }],

            //拨打
            bodaform:{
                applyNo:'',
                phone:'',
                phoneCheck:null,
                phoneRemark:'',
                productCode:'',
                sysCode:''
            },

            //审批状态
            options3: [{
            value: 1,
            label: "通过"
            },
            {
            value: 3,
            label: "拒绝"
            },
            {
            value: 2,
            label: "暂缓处理"
            },
            {
            value: 0,
            label: "待处理"
            }],

            //还款计划
            repayplan:[],

            //审批结论
            form:{
                applyNo:'',
                checked:null,//下拉
                checkRemark:'',//描述
                productCode:'',
                sysCode:''
            },
            dialogbodaVisible:false,//拨打情况
            dialogTableVisible: false,//还款计划弹框
            textarea: '',   //审批结论

            //申请人信息
            data:[],

            //影像信息
            imgfront:'',//正面
            imgback:'',//反面
            huoti:'',//活体
            other:[],//其他

            //联系人信息
            contractdata:[],
            
            //借款信息
            loaninfo:[],

            //商户信息
            mchinfo:[]
        }
    },
    components:{

    },
    mounted() {
        this.getbaseinfo();//获取申请人信息
        this.getcontractinfo();//获取联系人信息
        this.getimglist();//获取影响信息
        this.getloaninfo();//获取借款信息
        this.getmchinfo();//获取商户信息
    },
    methods: {
        //拨打情况
        bodaonSubmit(){
            //获取流水号
            this.bodaform.applyNo = this.$route.query.applyNo
            this.bodaform.productCode = this.$route.query.productCode
            this.bodaform.sysCode = this.$route.query.sysCode

            this.$axios({
                method: "post",
                url: "/checkBench/addPhoneCheck",
                data: this.bodaform
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.bodaform.phoneCheck = null;
                    this.bodaform.phoneRemark = '';

                    this.$message({
                    message: '拨打情况提交成功！',
                    type: "success"
                    });
                } else {
                    this.bodaform.phoneCheck = null;
                    this.bodaform.phoneRemark = '';
                    this.$message({
                    message: '拨打情况提交失败！',
                    type: "error"
                    });
                }
                },
                error => {
                    this.bodaform.phoneCheck = null;
                    this.bodaform.phoneRemark = '';
                    this.$message({
                    message: '提交失败！',
                    type: "error"
                    });
                }
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
                    (res.data).forEach((data)=>{

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

        //提交审批结论
        subsp(){
            //获取流水号
            var applyNo = this.$route.query.applyNo
            var productCode = this.$route.query.productCode
            var sysCode = this.$route.query.sysCode
            this.form.applyNo = applyNo
            this.form.productCode = productCode
            this.form.sysCode = sysCode

            this.$axios({
                method: "post",
                url: "/checkBench/addCheckResult",
                data: this.form
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.$message({
                    message: '审批结论提交成功！',
                    type: "success"
                    });
                } else {
                    this.$message({
                    message: '审批结论提交失败！',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

        //拨打情况
        boda(phone){
            this.bodaform.phone = phone
            this.dialogbodaVisible = true;
        },

        //拨打情况提交
        onSubmit() {
            console.log('submit!');
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