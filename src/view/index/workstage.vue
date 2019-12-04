<template>
<!-- 工作台 -->
    <div>
        <div class="bk animated fadeInDown">
            <el-form ref="form" :model="form" label-width="2%">
                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>案件流入时间</el-col>
                    </el-row>
                </div>
                <el-form-item>
                    <el-row  :gutter="24">
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;" ></el-date-picker>
                    </el-col>
                    <el-col class="line" :span='1'>-</el-col>
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
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
                            <el-option label="待补件" value="beijing"></el-option>
                            </el-select>
                    </el-col>
                    <el-col :span='3'>
                        <div class="f-search">查询</div>
                    </el-col>
                    <el-col :span='4'>
                        <div class="f-paidan" @click="paiDan">派单</div>
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
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column type="selection" label="选择" align="center" width="55"></el-table-column>
                    <el-table-column type="index" label="申请流水" align="center" width="145"></el-table-column>
                    <el-table-column type="index" label="产品/项目" align="center" width="105"></el-table-column>
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

        <!-- 派单弹框 -->
        <el-dialog title="派单分配" append-to-body :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <div style="width:100%;text-align:center;padding:20px 0;font-size:18px;">
            已选择任务件：{{hselected}}，其中中移和包：2，海拍客：1</div>
            <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple"> </div></el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-form-item label="分配至" :label-width="formLabelWidth">
                        <el-select v-model="form.name" placeholder="请选择分配人员">
                            <el-option label="张学友" value="shanghai"></el-option>
                            <el-option label="刘德华" value="beijing"></el-option>
                            <el-option label="郭富城" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
                
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="takesure">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dialogFormVisible:false,//派单弹框
            formLabelWidth: '90px',
            hselected:0,    //已选任务件
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
            },
            multipleSelection: []
        }
    },
    methods: {
        //确定分配派单
        takesure(){
            this.dialogFormVisible = false
        },
        //点击派单
        paiDan(){
            if(this.multipleSelection.length== 0){
                this.$message({
                    message: '请勾选表格任务件后，再分配派单，谢谢合作。',
                    type: 'warning'
                });
            }else{
                //显示弹框
                this.dialogFormVisible=true;
            }
        },
        //表格选择
        handleSelectionChange(val) {
            this.multipleSelection = val;
            this.hselected = this.multipleSelection.length;
            console.log(this.multipleSelection.length)
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