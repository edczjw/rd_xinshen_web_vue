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
                        <div class="r-button">退出</div>
                    </div>
                </div>

                <!-- 中部 -->
                <div class="main-middle">
                    <div class="main-import">
                        <div class="import">导入</div>
                    </div>
                    <div class="main-tab">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-gongzuotai2" />
                            </svg>工作台</span>
                            <!-- 引入工作台子组件 -->
                            <workstage></workstage>
                            </el-tab-pane>
                            <el-tab-pane><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tubiao-1" />
                            </svg>审批台</span>
                            <!-- 引入审批台子组件 -->
                            <approvalstage></approvalstage>
                            </el-tab-pane>
                            <el-tab-pane><span slot="label">
                                <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tongji2" />
                            </svg>统计</span>
                            <!-- 引入统计子组件 -->
                            <statistical></statistical>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>

            </div>
        </div>
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
            activeName: 'second'
        }
    },
    components:{
        'workstage':workstage,
        'approvalstage':approvalstage,
        'statistical':statistical
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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