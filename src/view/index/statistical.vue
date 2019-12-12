<template>
<!-- 统计 -->
    <div>
        <div class="bk animated fadeInDown">
            <div style="padding-left:20px">
            <el-form ref="form" :model="form" label-width="2%">
                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='8'>案件流入时间</el-col>
                    </el-row>
                </div>
                
                <el-row  :gutter="24">
                    <el-col :span="6">
                <el-form-item>
                    <el-date-picker type="date" placeholder="初始流入日期" 
                    v-model.trim="form.startTime" 
                    value-format="yyyy-MM-dd" style="width: 80%;" ></el-date-picker>
                </el-form-item>
                    </el-col>
                    <el-col class="line" :span=1>-</el-col>
                    <el-col :span="6">
                <el-form-item>
                    <el-date-picker type="date" placeholder="流入结束日期"
                    v-model.trim="form.endTime"
                    value-format="yyyy-MM-dd" style="width: 80%;"></el-date-picker>
                </el-form-item>
                    </el-col>
                </el-row>

                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='8'>案件处理时间</el-col>
                    </el-row>
                </div>
                <el-row  :gutter="24">
                    <el-col :span="6">
                <el-form-item>
                    <el-date-picker type="date" placeholder="处理初始日期" 
                    v-model="form.startUTime" style="width: 80%;" ></el-date-picker>
                </el-form-item>
                    </el-col>
                    <el-col class="line" :span=1>-</el-col>
                    <el-col :span="6">
                <el-form-item>
                    <el-date-picker type="date" placeholder="处理结束日期" 
                    v-model="form.endUTime" style="width: 80%;"></el-date-picker>
                </el-form-item>
                    </el-col>
                </el-form-item>
                </el-row>

                 <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>审批状态</el-col>
                    </el-row>
                </div>

                    <el-row  :gutter="24">
                    <el-col :span='7'>
                <el-form-item>
                            <el-select clearable 
                            v-model.trim="form.checked" placeholder="请选择审批状态">
                            <el-option v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                            </el-select>
                </el-form-item>
                    </el-col>
                    <el-col :span='3'>
                        <div class="f-search" @click="search('form')">查询</div>
                    </el-col>
                    <el-col :span='4'>
                        <div class="f-output" @click="output">导出</div>
                    </el-col>
                    </el-row>
            </el-form>
            </div>

            <!-- 表格 -->
            <div class="bk-table">
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
                    <el-table-column prop="utime" label="处理日" align="center"></el-table-column>
                    <el-table-column prop="applyNo" label="申请流水号" align="center" width="145">
                        <template slot-scope="scope">
                            <el-button  type="text" size="small" 
                            @click="godetail(scope.row.applyNo,scope.row.checked,scope.row.productCode,scope.row.sysCode,)">
                                {{scope.row.applyNo}}
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="productCode" label="产品/项目" align="center" width="145"></el-table-column>
                    <el-table-column prop="creditAmount" label="授信金额" align="center" width="145"></el-table-column>
                    <el-table-column prop="loanAmount" label="贷款金额" align="center" width="145"></el-table-column>
                    <el-table-column prop="checked" label="审批状态" align="center" width="145">
                        <template slot-scope="scope">
                            <span  v-if="scope.row.checked == 0">
                                待处理
                            </span>
                            <span v-else-if="scope.row.checked == 1">
                                通过
                            </span>
                            <span v-else-if="scope.row.checked == 2">
                                暂缓
                            </span>
                            <span v-else-if="scope.row.checked == 3">
                                拒绝
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="applyTime" label="申请日" align="center" width="145"></el-table-column>
                    <el-table-column prop="recordTime" label="流入日" align="center"  ></el-table-column>
                    <el-table-column v-if="false" prop="sysCode" label="流入日" align="center"  ></el-table-column>
                    </el-table>

                <div class="bk-tab-foot">
                    <el-pagination
                    style="text-align:center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="this.form.pageIndex"
                    :page-sizes="[10,15,20]"
                    :page-size="this.form.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="count">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            count:0,
            //审批状态
            options: [{
            value: null,
            label: "全部"
            },{
            value: 1,
            label: "通过"
            },
            {
            value: 3,
            label: "拒绝"
            },
            {
            value: 2,
            label: "暂缓"
            },
            {
            value: 0,
            label: "待处理"
            }],
            tableData: [],
            form:{
                checked:null,//审批状态
                idCard:'',//身份证号
                mobile:'',//手机号
                name:'',//姓名
                operator:'',//审核人员
                currentPage:0,//当前页码
                pageSize:50,//每页记录数
                startTime:null,//初始时间
                endTime:null,//结束时间
                startUTime:null,//处理起始时间
                endUTime:null,//处理结束时间
            }
        }
    },
    mounted() {
        //初始加载
        this.load(this.form)
    },
    methods: {
        //查询
        search(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.load(this.form);
                } else {
                console.log('error submit!!');
                return false;
            }
            });
        },

        //加载
        load(data){
            this.$axios({
            method: "post",
            url: "/workBench/listCase",
            data: data
        }).then(
            response => {
            var res = response.data;
            if (res.code == '0000') {
                this.tableData = res.data.pageList;
                this.count = res.data.total;
                this.form.currentPage = res.data.currentPage;
                this.form.pageSize = res.data.pageSize;
            }else if(res.code == '1006'){
                    this.tableData = []
                } else {
                this.$notify({
                title: '提示',
                message: res.msg+'，查询数据异常',
                type: 'warning'
                });
                this.tableData = []
            }
            },
            error => {}
        );
        },
        
        //跳转详情
        godetail(applyNo,checked,productCode,sysCode){
            //待处理
            if(checked == 0){
                //路由带参数
                this.$router.push({
                path:'/checking',
                query:{
                    applyNo:applyNo,
                    productCode:productCode,
                    sysCode:sysCode
                    }
                })
            }
            //已处理
            else if(checked == 1 || checked == 2 || checked == 3){
                //路由带参数
                this.$router.push({
                path:'/hadchecked',
                query:{
                    applyNo:applyNo
                    }
                })
            }
        },
        //导出
        output(){
            this.$confirm('此操作将导出该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
           
                    this.$axios({
                    method: "post",
                    url: "/statisticBench/exportCase",
                    data: this.form,
                    responseType: 'blob',
                    emulateJSON:true
                }).then(
                    response => {
                    let blob = new Blob([response.data], {
                            type: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        })
                        if (window.navigator.msSaveOrOpenBlob) {
                            navigator.msSaveBlob(blob);
                        } else {
                            let elink = document.createElement('a');
                            elink.download = this.getdate()+'_'+'信审统计'+".xls";
                            elink.style.display = 'none';
                            elink.href = URL.createObjectURL(blob);
                            document.body.appendChild(elink);
                            elink.click();
                            document.body.removeChild(elink);
                        }
                    },
                    error => {}
                );
            }).catch(() => {
            
            });

        },

        //获取时间戳
        getdate() {
            var now = new Date(),
                y = now.getFullYear(),
                m = now.getMonth() + 1,
                d = now.getDate(),
                h = now.getHours(),
                M = now.getMinutes(),
                s = now.getSeconds();
            return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d)+"  "+(h < 10 ? "0" + h : h) + ":" +(M < 10 ? "0" + M : M) + ":" +(s < 10 ? "0" + s : s);
        },


        handleSizeChange(psize) {
        // 改变每页显示的条数
        this.form.pageSize = psize;
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.form.pageIndex = 1;
        // this.load(this.form);
        },

        // 初始页currentPage
        handleCurrentChange(pindex) {
        this.form.pageIndex = pindex;
        // this.load(this.form);
        },
    },
}
</script>
<style lang="less">
    @import'../style/common.css';
</style>