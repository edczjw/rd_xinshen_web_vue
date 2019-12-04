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
                                    <el-select placeholder="请选择">
                                    <el-option label="通过" value="shanghai"></el-option>
                                    <el-option label="拒绝" value="beijing"></el-option>
                                    <el-option label="待补件" value="beijing"></el-option>
                                    </el-select>
                                </div>
                                <div class="ck-button">
                                    提交
                                </div>
                                </div>
                                <div class="ck-pag">
                                    <div class="ck-table">
                                        <el-input
                                        type="textarea"
                                        :rows=6
                                        placeholder="请输入内容"
                                        v-model="textarea">
                                        </el-input>
                                    </div>
                                </div>

                                <div class="ck-se">
                                <div class="ck-tit">申请人信息</div>
                                <div class="ck-select">
                                    <el-select placeholder="请选择">
                                    <el-option label="通过" value="shanghai"></el-option>
                                    <el-option label="拒绝" value="beijing"></el-option>
                                    <el-option label="待补件" value="beijing"></el-option>
                                    </el-select>
                                </div>
                                <div class="ck-button">
                                    提交
                                </div>
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
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
                                            </el-col>
                                            <el-col :span="6">注册手机号：132323322322</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
                                            </el-col>
                                        </el-row>

                                        <el-row class="ck-row">
                                            <el-col :span="6">银行预留手机号：132323223322</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
                                            </el-col>
                                            <el-col :span="6">其他手机号：132323223322</el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
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
                                                    <div class="df-s">
                                                        <el-select placeholder="请选择" size="mini">
                                                        <el-option label="通过" value="shanghai"></el-option>
                                                        <el-option label="拒绝" value="beijing"></el-option>
                                                        <el-option label="待补件" value="beijing"></el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6"  class="go-center">
                                                <img src="../../assets/images/iddown.png" alt="">
                                                <div class="nk-ok">
                                                    <div class="df">身份证反面</div>
                                                    <div class="df-s">
                                                        <el-select placeholder="请选择" size="mini">
                                                        <el-option label="通过" value="shanghai"></el-option>
                                                        <el-option label="拒绝" value="beijing"></el-option>
                                                        <el-option label="待补件" value="beijing"></el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="re-img go-center">
                                                <img src="../../assets/images/human-img.png" alt="">
                                                <div class="nk-oks">
                                                    <div class="df">活体截图</div>
                                                    <div class="df-s">
                                                        <el-select placeholder="请选择" size="mini">
                                                        <el-option label="通过" value="shanghai"></el-option>
                                                        <el-option label="拒绝" value="beijing"></el-option>
                                                        <el-option label="待补件" value="beijing"></el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="re-img go-center">
                                                <img src="../../assets/images/human-img.png" alt="">
                                                <div class="nk-oks">
                                                    <div class="df">其他</div>
                                                    <div class="df-s">
                                                        <el-select placeholder="请选择" size="mini">
                                                        <el-option label="通过" value="shanghai"></el-option>
                                                        <el-option label="拒绝" value="beijing"></el-option>
                                                        <el-option label="待补件" value="beijing"></el-option>
                                                        </el-select>
                                                    </div>
                                                </div>
                                            </el-col>

                                            <el-col :span="6" class="re-img go-center">
                                                <el-upload
                                                class="upload-demo"
                                                drag
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
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
                                            </el-col>
                                            <el-col :span="6">
                                                电话：13202020000
                                            </el-col>
                                            <el-col :span="6">
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
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
                                                <div class="ckrow-button"  @click="showrepayplan">详细还款计划</div>
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
                                                <div class="ckrow-button" @click="boda">拨打情况</div>
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
        <el-dialog title="拨打情况" center :visible.sync="dialogbodaVisible">
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="拨打情况">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="接通-本人" value="shanghai"></el-option>
                <el-option label="接通-非本人" value="beijing"></el-option>
                <el-option label="通话中" value="beijing"></el-option>
                <el-option label="挂断" value="beijing"></el-option>
                <el-option label="无人接听" value="beijing"></el-option>
                <el-option label="停机" value="beijing"></el-option>
                <el-option label="关机" value="beijing"></el-option>
                </el-select>
            </el-form-item>
             <el-form-item label="沟通详情">
                <el-input type="textarea" :rows="4" v-model="form.region"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
        </el-dialog>

        
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
            <el-table-column label="期数" align="center"></el-table-column>
            <el-table-column type="index" label="还款日" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还款金额" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还本金" align="center" width="145"></el-table-column>
            <el-table-column type="index" label="应还利息" align="center" width="145"></el-table-column>
            <el-table-column label="应还其他费用" align="center"></el-table-column>
            </el-table>
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
            form:{
                region:''
            },
            dialogbodaVisible:false,//拨打情况
            dialogTableVisible: false,//还款计划弹框
            textarea: '',   //审批结论
        }
    },
    components:{

    },
    methods: {
        boda(){
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