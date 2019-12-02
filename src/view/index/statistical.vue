<template>
<!-- 统计 -->
    <div>
        <div class="bk animated fadeInDown">
            <el-form ref="form" :model="form" label-width="2%">
                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='8'>案件流入时间</el-col>
                    </el-row>
                </div>
                <el-form-item>
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 80%;" ></el-date-picker>
                    </el-col>
                    <el-col class="line" :span=1>-</el-col>
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择时间" v-model="form.date2" style="width: 80%;"></el-date-picker>
                    </el-col>
                </el-form-item>

                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='8'>案件处理时间</el-col>
                    </el-row>
                </div>
                <el-form-item>
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 80%;" ></el-date-picker>
                    </el-col>
                    <el-col class="line" :span=1>-</el-col>
                    <el-col :span="6">
                    <el-date-picker type="date" placeholder="选择时间" v-model="form.date2" style="width: 80%;"></el-date-picker>
                    </el-col>
                </el-form-item>

                 <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>审批状态</el-col>
                    </el-row>
                </div>

                <el-form-item>
                    <el-row  :gutter="24">
                    <el-col :span='7'>
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
                        <div class="f-output">导出</div>
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
                    <el-table-column type="index" label="处理日" align="center"></el-table-column>
                    <el-table-column type="index" label="申请流水号" align="center" width="145"></el-table-column>
                    <el-table-column type="index" label="产品/项目" align="center" width="135"></el-table-column>
                    <el-table-column type="index" label="授信金额" align="center" width="125"></el-table-column>
                    <el-table-column type="index" label="贷款金额" align="center" width="125"></el-table-column>
                    <el-table-column type="index" label="审批状态" align="center" width="115"></el-table-column>
                    <el-table-column type="index" label="申请日" align="center" width="138"></el-table-column>
                    <el-table-column type="index" label="流入日" align="center"></el-table-column>
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
            count:'',
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
                pageIndex:'',
                pageSize:'',
            }
        }
    }
}
</script>
<style lang="less">
    @import'../style/common.css';
</style>