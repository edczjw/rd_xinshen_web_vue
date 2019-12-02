<template>
    <div>
        <div class="lg-bg">
            <div class="lg-form-bx">
                <div class="lg-title">仁东小贷信审平台系统</div>
                <div class="lg-smtit">一款让信审更美好的智能系统</div>
                <div class="lg-form">
                    <el-form  :model="form" >
                        <el-row class="lg-row">
                            <el-input
                                placeholder="请输入用户名"
                                v-model="form.input1">
                                <i slot="prefix" class="el-input__icon el-icon-user"></i>
                            </el-input>
                        </el-row>
                        <el-row class="lg-row">
                            <el-input
                                placeholder="请输入登录密码"
                                v-model="form.input2">
                                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                            </el-input>
                        </el-row>
                        <el-row class="lg-check">
                            <el-checkbox v-model="form.checked">记住用户名</el-checkbox>
                        </el-row>
                    </el-form>
                </div>
                <div class="lg-button">登录</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                input1:'',
                input2:'',
                checked: false
            }
        }   
    }
}
</script>
<style lang="less">
@import'../style/common.css';
//登录背景
    .lg-bg{
        width: 100%;
        height: 100%;
        position: fixed;
        background-image: url('../../assets/images/bg.png');
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: cover;
        .lg-form-bx{
            width: 23%;
            height: 48%;
            position: absolute;
            right: 20%;
            top: 25%;
        }
        .el-input__icon{
            color: rgb(0, 153, 255);
            font-size: 28px;
        }
    }

</style>