<template>
<!-- 工作台 -->
    <div>
        <div class="bk">
            <el-form ref="form" :model="form" label-width="2%">
                <div class="form-tit">案件流入时间</div>
                <el-form-item>
                    <el-col :span="4">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 80%;" ></el-date-picker>
                    </el-col>
                    <el-col class="line" :span=1>-</el-col>
                    <el-col :span="4">
                    <el-date-picker type="date" placeholder="选择时间" v-model="form.date2" style="width: 80%;"></el-date-picker>
                    </el-col>
                </el-form-item>

                <div class="form-tit">
                    <el-row  :gutter="12">
                        <el-col :span='4'>申请人身份证号码</el-col>
                        <el-col :span='4'>申请人手机号码</el-col>
                        <el-col :span='4'>申请人姓名</el-col>
                    </el-row>
                </div>
                <el-form-item>
                    <el-col :span="4">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 80%;" ></el-date-picker>
                    </el-col>
                    <el-col class="line" :span=1>-</el-col>
                    <el-col :span="4">
                    <el-date-picker type="date" placeholder="选择时间" v-model="form.date2" style="width: 80%;"></el-date-picker>
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                date1:'',
                date2:''
            }
        }
    }
}
</script>
<style lang="less">
    @import'../style/common.css';
</style>