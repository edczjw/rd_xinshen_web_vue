<template>
<!-- 审批台 -->
    <div>
        <div class="bk animated fadeInDown">
            <el-form ref="form" :model="form" label-width="2%">
                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='8'>案件流入时间</el-col>
                    </el-row>
                </div>
                <el-form-item>
                    <el-row  :gutter="24">
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 80%;" ></el-date-picker>
                    </el-col>
                    <el-col class="line" :span='1'>-</el-col>
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择时间" v-model="form.date2" style="width: 80%;"></el-date-picker>
                    </el-col>
                    </el-row>
                </el-form-item>

                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>申请人身份证号码</el-col>
                        <el-col :span='6'>申请人手机号码</el-col>
                        <el-col :span='6'>申请人姓名</el-col>
                    </el-row>
                </div>

                <el-form-item>
                    <el-row  :gutter="24">
                    <el-col :span='6'>
                            <el-input v-model="form.name"></el-input>
                    </el-col>
                    <el-col :span='6'>
                            <el-input v-model="form.name"></el-input>
                    </el-col>
                    <el-col :span='6'>
                            <el-input v-model="form.name"></el-input>
                    </el-col>
                    </el-row>
                </el-form-item>

                 <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>审批状态</el-col>
                    </el-row>
                </div>

                <el-form-item>
                    <el-row  :gutter="24">
                    <el-col :span='6'>
                            <el-select v-model="form.name" placeholder="请选择活动区域">
                            <el-option label="通过" value="shanghai"></el-option>
                            <el-option label="拒绝" value="beijing"></el-option>
                            <el-option label="待处理" value="beijing"></el-option>
                            </el-select>
                    </el-col>
                    <el-col :span='6'>
                        <div class="f-search">查询</div>
                    </el-col>
                    </el-row>
                </el-form-item>
            </el-form>

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
                    style="width: 100%; height:100%;"
                    highlight-current-row
                >
                    <el-table-column type="index" label="序号" align="center" width="55"></el-table-column>
                    <el-table-column type="index" label="申请流水" align="center" width="145"></el-table-column>
                    <el-table-column type="index" label="三方用户号" align="center" width="105"></el-table-column>
                    <el-table-column type="index" label="姓名" align="center" width="85"></el-table-column>
                    <el-table-column type="index" label="身份证号码" align="center" width="155"></el-table-column>
                    <el-table-column type="index" label="手机号码" align="center" width="105"></el-table-column>
                    <el-table-column type="index" label="授信金额" align="center" width="105"></el-table-column>
                    <el-table-column type="index" label="贷款金额" align="center" width="105"></el-table-column>
                    <el-table-column type="index" label="期数" align="center" width="55"></el-table-column>
                    <el-table-column type="index" label="处理人" align="center" width="88"></el-table-column>
                    <el-table-column type="index" label="申请时间" align="center" width="120"></el-table-column>
                    <el-table-column type="index" label="流入时间" align="center" width="120"></el-table-column>
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
                date1:'',
                date2:'',
                name:'',
                pageIndex:0,
                pageSize:50,
            }
        }
    },
    methods: {
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