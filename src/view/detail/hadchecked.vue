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
                            已处理：20199999979898
                        </div>
                        </div>
                            <div style="margin-bottom:100px;">
                            <div class="checking-box">
                                <div class="ck-tit">审批结论：通过</div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="text-align:justify;line-height:25px;">
                                        <p style="text-indent:2em">结论通过法律、国务院行政法规对行政审批项目的实施范围作了明确规定的，审批部门要严格按照其规定实施，不得扩大实施范围。其他各类规范性文件对法律、国务院行政法规规定的实施范围作了扩大性规定的，应按无效处理；作了缩小性规定的，才能依照其规定执行。法律、国务院行政法规对行政审批项目的实施范围作了明确规定的，审批部门要严格按照其规定实施，不得扩大实施范围。其他各类规范性文件对法律、国务院行政法规规定的实施范围作了扩大性规定的，应按无效处理；作了缩小性规定的，才能依照其规定执行。国务院行政法规对行政审批项目的实施范围作了明确规定的，审批部门要严格按照其规定实施。</p>
                                    </div>
                                </div>

                                <div class="ck-se">
                                <div class="ck-tit">申请人信息</div>
                                
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table" style="height:256px;">
                                        <el-row class="ck-row">
                                            <el-col :span="12">姓名：刘德华</el-col>
                                            <el-col :span="12">身份证：441498898998989899</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="8">
                                                <span>生肖：龙</span>   
                                            </el-col>
                                            <el-col :span="8"> 
                                                <span>性别：男</span>   
                                            </el-col>
                                            <el-col :span="8">   
                                                <span>年龄：22</span>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="6">申请手机号：132323332222</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
                                            </el-col>
                                            <el-col :span="6">注册手机号：132323322322</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
                                            </el-col>
                                        </el-row>

                                        <el-row class="ck-row">
                                            <el-col :span="6">银行预留手机号：132323223322</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
                                            </el-col>
                                            <el-col :span="6">其他手机号：132323223322</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col>工作单位：广州民盛互联网小额贷款有限公司</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col>单位地址：广州越秀区长堤大马路224-246号</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col>工作单位：广州越秀区长堤大马路224-246号</el-col>
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
                                                <img src="../../assets/images/idup.png" alt="">
                                                <div class="nk-ok">
                                                    <div class="df">身份证正面</div>
                                                    <div class="ckrow-buttons" @click="hecha">核查情况</div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6"  class="go-center">
                                                <img src="../../assets/images/iddown.png" alt="">
                                                <div class="nk-ok">
                                                    <div class="df">身份证反面</div>
                                                    <div class="ckrow-buttons" @click="hecha">核查情况</div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="re-img go-center">
                                                <img src="../../assets/images/human-img.png" alt="">
                                                <div class="nk-oks">
                                                    <div class="df">活体截图</div>
                                                    <div class="ckrow-buttons" @click="hecha">核查情况</div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="re-img go-center">
                                                <img src="../../assets/images/human-img.png" alt="">
                                                <div class="nk-oks">
                                                    <div class="df">其他</div>
                                                    <div class="ckrow-buttons" @click="hecha">核查情况</div>
                                                </div>
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
                                            <el-col :span="12">姓名：刘德华</el-col>
                                            <el-col :span="12">姓名：刘德华</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">关系：父母</el-col>
                                            <el-col :span="12">关系：父母</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="6">
                                                电话：13202020000
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
                                            </el-col>
                                            <el-col :span="6">
                                                电话：13202020000
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
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
                                            <el-col :span="12">借款金额：12222222</el-col>
                                            <el-col :span="12">订单金额：12222222</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">借款期限：24</el-col>
                                            <el-col :span="6">还款方式：等额本息</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="showrepayplan">详细还款计划</div>
                                            </el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">
                                                银行卡：6216617001004837901
                                            </el-col>
                                            <el-col :span="12">
                                                还款日：12
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
                                            <el-col>商户名称：大德路西餐厅</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col>商户地址：广州市越秀区大德路623号首层</el-col>
                                        </el-row>
                                        <el-row class="ck-row">
                                            <el-col :span="12">
                                                商户联系人：张学友
                                            </el-col>
                                            <el-col :span="6">
                                                联系电话：13202020000
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="dianhe">电核情况</div>
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
        <el-dialog title="还款计划" center :visible.sync="dialogTableVisible">
            <el-table
            :data="tableData"
            border
            size="mini"
            stripe
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            style="width:100%; height:100%;"
        >
            <el-table-column type="index" label="期数" align="center"></el-table-column>
            <el-table-column type="index" label="还款日" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还款金额" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还本金" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还利息" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还其他费用" align="center"></el-table-column>
            </el-table>
        </el-dialog>

        <!-- 电核情况 -->
        <el-dialog title="电核情况" center  top='30vh'  :visible.sync="dialogdianheVisible">
            <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="2019.10.31 18:42:50">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="2019.10.31 18:42:50">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="2019.10.31 18:42:50">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            </el-collapse>
        </el-dialog>

        <!-- 核查情况 -->
        <el-dialog center :visible.sync="dialoghechaVisible" top='30vh' style="width:50%;margin:0 auto;">
            <span slot="title" class="dialog-title">
                <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon-test" />
            </svg>符合规范</span>
            <div style="width: 400px;height: 108px;font-size: 18px;color: #aaabb8;margin:0 auto;text-indent:2em">
                此处是一条影像核查判断的意见备注信息，此处是一条影像核查判断的意见备注信息，此处是一条影像核查判断的意见备注信息，此处是一条影像核查判断的意见备注信息
            </div>
        </el-dialog>
   </div>
</template>
<script>
export default {
    data(){
        return{
            tableData: [{
            index: '王小虎',
            },{
            index: '王小虎',
            },{
            index: '王小虎',
            },{
            index: '王小虎',
            },{
            index: '王小虎',
            },],
            dialogTableVisible: false,//还款计划弹框
            dialogdianheVisible: false,//电核情况
            dialoghechaVisible:false,//核查情况
            activeName: '',//电核情况内容
            textarea: '',   //审批结论
        }
    },
    components:{

    },
    methods: {
        //核查情况
        hecha(){
            this.dialoghechaVisible = true;
        },
        // 查看电核情况
        dianhe(){
            this.dialogdianheVisible = true;
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
                padding: 0 0 0 8px;
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