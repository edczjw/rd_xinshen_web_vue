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
                    <div class="main-import">
                        <div class="import" @click="dialogFormVisible = !dialogFormVisible">
                            <i class="el-icon-upload2"></i>导入
                        </div>
                    </div>
                    <div class="main-tab">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane v-if="showworkstage"><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gongzuotai4" />
                            </svg>工作台</span>
                            <!-- 引入工作台子组件 -->
                            <workstage></workstage>
                            </el-tab-pane>
                            <el-tab-pane><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-examine" />
                            </svg>审批台</span>
                            <!-- 引入审批台子组件 -->
                            <approvalstage></approvalstage>
                            </el-tab-pane>
                            <el-tab-pane><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tongji3" />
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
            <div style="width:100%;text-align:center;height:40px;line-height:40px;">
            <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传xsl/xls文件，且不超过500kb</div>
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
            showworkstage:true,//显示工作台
            dialogFormVisible: false,
            showinputdialog:false,
            activeName: '0',
        }
    },
    components:{
        'workstage':workstage,
        'approvalstage':approvalstage,
        'statistical':statistical
    },
    methods: {
        //生成
    profile() {
      if(this.searchform.date !=''){
      let data = {
        date:this.searchform.date
      };
      const url = this.$store.state.domain + "/file/loanFile/create";
      this.$http.post(url, data, {
          emulateJSON: true
      })
        .then(response => {
          if(response.code == 0){
            this.$message({
              message: response.data.msg,
              type: "success"
            });
          }else{
            this.$message({
              message: response.data.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          this.$message({
              message: '您的账号无此菜单查看权限，谢谢合作',
              type: "error"
            });
        });
        
      }else{
        this.$message({
              message: '请选择日期',
              type: "error"
            });
      }

    },
    //下载
    downloadfile() {
      if(this.searchform.date != ''){
      let data = {
        date:this.searchform.date
      };
      const url = this.$store.state.domain + "/file/loanFile/download";
      this.$http
        .post(url, data, {
          responseType: "blob",
          emulateJSON: true
        })
        .then(res => {
          if(res.data.code){
                 if(res.data.code == 1){
                   this.$message({
                          message: res.data.msg,
                          type: "error"
                        });
                    }
              }else{
                let blob = new Blob([res.body], {
                    type: "application/octet-stream"
                  });
                  if (window.navigator.msSaveOrOpenBlob) {
                    navigator.msSaveBlob(blob);
                  } else {
                    let elink = document.createElement("a");
                    elink.download = this.searchform.date + 'loanFile' + ".xls";
                    elink.style.display = "none";
                    elink.href = URL.createObjectURL(blob);
                    document.body.appendChild(elink);
                    elink.click();
                    document.body.removeChild(elink);
                  }
              }
        })
        .catch(err => {
          this.$message({
              message: '您的账号无此菜单查看权限，谢谢合作',
              type: "error"
            });
        });
        
      }else{
        this.$message({
              message: '请选择日期',
              type: "error"
            });
      }

    },
    //上传按钮
      pickFile(e){
          var files = e.target.files || e.dataTransfer.files;
          if(!files.length) return;
          this.excelTobase(files[0]);
      },

      excelTobase(file){
          var that = this;
          var pos = file.name.lastIndexOf('.');
          var type = file.name.substring(pos + 1);
          if(type.toLowerCase() != 'xls' && type.toLowerCase() != 'xlsx' && type.toLowerCase() !='csv'){
              this.$message.error('请上传xls、xlsx、csv格式的excel文件.');
              this.canUpload = false;
          }else{
              this.fileType = type;
              this.canUpload = true;
              this.fileName = file.name.substring(0,pos);
              this.file = file;
              var reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = function(e){
                  that.base64 = e.target.result;
              };
           }
      },

//异步上传
      async insertfile(){
          if(this.canUpload){
			    var FormDatas=new FormData($("#form-article-add")[0]);
              FormDatas.append("file",FormDatas);
              this.$axios({
                  method: "post",
                  url: this.$store.state.domain + "/file/loanFile/upload",
                  data: FormDatas,
                  headers:{'Content-Type':'multipart/form-data'}
                }).then(
                  response => {
                    var res = response.data;
                    if (res.code == 0) {
                        this.$message({
                          message: res.msg,
                          type: 'success'
                        });
                    } else {
                      this.$message({
                        message: res.msg,
                        type: "error"
                      });
                    }
                  },
                  error => {
                    this.$message({
                        message: '您的账号无此菜单查看权限，谢谢合作',
                        type: "error"
                      });
                      }
                );
          }else{
          this.$message({
            type: 'danger',
            message: '请选取文件上传.'
          }); 
      }
      },
        //切换tab时事件
        handleClick(tab, event) {
            console.log(tab, event);
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
        height: 740px;
        .main-tab{
            //改写tab样式
            .el-tabs__nav-wrap {
                margin-bottom: 30px;
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