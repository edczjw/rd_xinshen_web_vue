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
                        <div class="r-button" @click="logout">
                            <i class="el-icon-switch-button"></i>退出
                        </div>
                    </div>
                </div>

                <!-- 中部 -->
                <div class="main-middle">
                    <div class="main-import">
                        <div v-if="showinput" class="import" @click="dialogFormVisible = !dialogFormVisible">
                            <i class="el-icon-upload2"></i>导入
                        </div>
                    </div>
                    <div class="main-tab">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane  label="工作台" v-if="showworkstage"><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-ziyuan-copy" />
                            </svg>工作台</span>
                            <!-- 引入工作台子组件 -->
                            <workstage></workstage>
                            </el-tab-pane>
                            <el-tab-pane label="审批台"><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-examine-copy" />
                            </svg>审批台</span>
                            <!-- 引入审批台子组件 -->
                            <approvalstage v-if="sonRefresh"></approvalstage>
                            </el-tab-pane>
                            <el-tab-pane  label="统计"><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tongji1-copy" />
                            </svg>统计</span>
                            <!-- 引入统计子组件 -->
                            <statistical></statistical>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>

            </div>
        </div>

         <!-- 导入表格弹框 -->
        <el-dialog append-to-body  top='30vh' width='40%'  :visible.sync="dialogFormVisible">
            <span slot="title" class="dialog-title">
            <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaoge3" />
            </svg>上传EXCEL表格</span>
            <div style="width:100%;text-align:center;height:100%;line-height:40px">
            <el-upload name="excel" 
            accept=".xlsx, .xls, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            class="upload-demo"
            :before-upload='beforeupload'
            :file-list="filelist"
            drag
            :http-request="upload"
            action='#'
            >
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传.xls/.xlsx/.csv格式文件</div>
            </el-upload>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = !dialogFormVisible">取 消</el-button>
                <!-- <el-button type="primary" @click="insertfile">导入<i class="el-icon-upload el-icon--right"></i></el-button> -->
            </span>
        </el-dialog>
   </div>
</template>
<script>
//引入工作台、审批台、统计
import workstage from './workstage'
import approvalstage from './approvalstage'
import statistical from './statistical'
export default {
    data(){
        return{
            sonRefresh:true,//显示审批台
            filelist:[],//文件列表
            showworkstage:true,//显示工作台
            dialogFormVisible: false,
            showinputdialog:false,
            activeName: '0',
            showinput:true,//显示导入按钮

            time:'',
            username:'',
            role:'',
        }
    },
    components:{
        'workstage':workstage,
        'approvalstage':approvalstage,
        'statistical':statistical
    },
    mounted() {
        this.gettime();//获取登陆时间
        this.getrole();//获取角色
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

        //获取用户角色
        getrole(){
            this.$axios({
                method: "get",
                url: "/bus/roleList",
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                        if(res.data[0] == '2'){
                        this.showworkstage = false
                        }else{
                        this.showworkstage = true
                        }
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
                        var url = 'http://test.user.msxiaodai.com/logout'; 
                        window.location.href = url
                            
                        }).catch(() => {
                            //取消    
                        });
        },

        //上传
        upload(e){
            var that = this;
            const fileObj = e.file;	
            var reader = new FileReader();
            reader.readAsDataURL(fileObj);
            reader.onload = function(e){
                that.base64 = e.target.result;
            };

            let msgForm = new FormData();	// 创建FormData
            msgForm.append('file', fileObj);	// 向FormData中添加文件对象
            msgForm.get("file");	// 此方法可以查看FormData中插入的对象
            this.$axios({
                method: "post",
                url: "/workBench/importCase",
                data: msgForm,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.$confirm('文件导入成功', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        showCancelButton:false,
                        type: 'success'
                        }).then(() => {
                            //确定
                            
                        }).catch(() => {
                            //取消    
                        });
                    }else{
                    this.$confirm('文件导入失败，请重新导入', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        showCancelButton:false,
                        type: 'warning'
                        }).then(() => {
                            //确定
                        }).catch(() => {
                            //取消    
                        });
                    }
                },
                error => {}
            );
        },
        //文件上传之前
        beforeupload(e){
            var fname = e.name.substr(e.name.lastIndexOf("."))
            //校验格式
            if(fname != '.xls' && fname != '.xlsx' && fname != '.csv'){
                this.$message({
                message: '请上传EXCEL格式的文件',
                type: "error"
                });
                return false
            }else{
                return true
            }
        },

        //切换tab时事件
        handleClick(tab, event) {
            if(tab.label == '统计'){
                this.showinput = false
            }else if(tab.label == '审批台'){
                //切换到审批台的时候强制刷新审批台列表
                this.sonRefresh = false;
                this.$nextTick(() => {
                    this.sonRefresh = true;
                });
            }
            else{
                this.showinput = true
            }
        },
    }
}
</script>

<style lang="less">
@import'../style/main.css';
// 版心
.main-banxin{
    font-family: PingFangSC-Regular, sans-serif;
    position: relative;
    width: 1230px;
    height: 0;
    padding-bottom: 70%;
    margin: 0 auto;
    z-index: 999;

    // 头部
    .main-top-tips{
        position: absolute;
        
        left: calc(50% - 569px);
        width: 1138px;
        border-bottom: 1px solid #6189ff;
        padding-bottom: 2%;
        top: 1%;
        // width: 100%;
        display: flex;
        .top-left{
            flex: 1;
            .hd-img{
                width: 100%;
                min-height: 61px;
                line-height: 61px;
                font-size: 28px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #ffffff;
                img{
                    width: 61px;
                    min-height: 61px;
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
        left: calc(50% - 569px);
        width: 1138px;
        height: 740px;
        .main-tab{
            //改写tab样式
            .el-tabs__nav-wrap {
                margin-bottom: 25px;
            }
            .el-tabs__item {
                padding: 0 140px 0 5px;
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