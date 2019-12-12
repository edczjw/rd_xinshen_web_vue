<template>
<!-- 工作台 -->
    <div>
        <div class="bk animated fadeInDown">
            <div style="padding-left:20px">
            <el-form ref="form" :rules="rules" :model="form" label-width="2%">
                <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>案件流入时间</el-col>
                    </el-row>
                </div>
                    <el-row  :gutter="24" >
                    <el-col :span="6" >
                <el-form-item>
                    <el-date-picker type="date"
                    placeholder="初始日期" 
                    value-format="yyyy-MM-dd"
                    v-model.trim="form.startTime" 
                    style="width: 100%;" ></el-date-picker>
                </el-form-item>
                    </el-col>
                    
                    <el-col class="line" :span='1'>-</el-col>
                    <el-col :span="6">
                        
                <el-form-item>
                    <el-date-picker type="date" 
                    placeholder="结束日期" 
                    value-format="yyyy-MM-dd"
                    v-model.trim="form.endTime" 
                    style="width: 100%;"></el-date-picker>
                </el-form-item>
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

                    <el-row  :gutter="24">
                    <el-col :span='6'>
                <el-form-item>
                            <el-input v-model.trim="form.idCard" 
                            clearable 
                            auto-complete="true"></el-input>
                </el-form-item>
                    </el-col>
                    <el-col :span='6'>
                <el-form-item>
                            <el-input v-model.trim="form.mobile"
                            clearable 
                            maxlength="11"
                            show-word-limit 
                             ></el-input>
                </el-form-item>
                    </el-col>
                    <el-col :span='6'>
                <el-form-item>
                            <el-input v-model.trim="form.name"
                            clearable 
                            auto-complete="true"></el-input>
                </el-form-item>
                    </el-col>
                    </el-row>
                </el-form-item>

                 <div class="form-tit">
                    <el-row  :gutter="24">
                        <el-col :span='6'>审批状态</el-col>
                    </el-row>
                </div>

                    <el-row  :gutter="24">
                    <el-col :span='6'>
                <el-form-item prop="checked">
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
                        <div class="f-paidan" @click="paiDan">派单</div>
                    </el-col>
                    </el-row>
            </el-form>
            </div>

            <!-- 表格 -->
            <div class="bk-table">
                <el-table
                    :data="tableData"
                    ref="multipleTable"
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
                    <el-table-column prop="applyNo" label="申请流水" align="center" width="125"></el-table-column>
                    <el-table-column prop="productCode" label="产品/项目" align="center" width="105"></el-table-column>
                    <el-table-column prop="name" label="姓名" align="center" width="85">
                        <template slot-scope="scope">
                            <el-button  type="text" size="small" 
                            @click="godetail(scope.row.applyNo,scope.row.checked,scope.row.productCode,scope.row.sysCode)">
                                {{scope.row.name}}
                            </el-button>
                        </template>
                    </el-table-column>
                    <el-table-column prop="idCard" label="身份证号码" align="center" width="155"></el-table-column>
                    <el-table-column prop="mobile" label="手机号码" align="center" width="105"></el-table-column>
                    <el-table-column prop="creditAmount" label="授信金额" align="center" width="105"></el-table-column>
                    <el-table-column prop="loanAmount" label="贷款金额" align="center" width="105"></el-table-column>
                    <el-table-column prop="term" label="期数" align="center" width="55"></el-table-column>
                    <el-table-column v-if="false" prop="checked" label="审批状态" align="center" width="145">
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
                    <el-table-column prop="operator" label="处理人" align="center" width="88">
                        <template slot-scope="scope">
                            <span  v-if="scope.row.operator =='待处理'">
                            {{scope.row.operator}}
                            </span>
                            <span v-else>{{scope.row.operator}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="applyTime" label="申请时间" align="center"></el-table-column>
                    <el-table-column prop="recordTime" label="流入时间" align="center" ></el-table-column>
                    <el-table-column v-if="false" prop="sysCode" label="系统编码" align="center" ></el-table-column>
                </el-table>

                <div class="bk-tab-foot">
                    <el-pagination
                    style="text-align:center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="this.form.currentPage"
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
            已选择任务件：{{hselected}}</div>
            <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="8"><div class="grid-content bg-purple"> </div></el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-form-item label="分配至" :label-width="formLabelWidth">
                        <el-select clearable 
                            v-model.trim="operator" placeholder="请选择操作人员">
                            <el-option v-for="item in options2"
                            :key="item.index"
                            :label="item.uname"
                            :value="item.uname"></el-option>
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
import rules from "../../rule/rule"
export default {
    data(){
        return{
            dialogFormVisible:false,//派单弹框
            formLabelWidth: '90px',
            hselected:0,    //已选任务件
            count:0,
            tableData: [],  //列表
            //操作员列表
            options2: [],

            operator:'',//操作员

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
            },
            multipleSelection: [],

            // 校验规则
            rules: {
                //身份证
                ID: [{required: false, validator: rules.FormValidate.Form().ID, trigger: 'blur'}],
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                companyName: [
                {required: true, message: '请输入公司名称', trigger: 'blur'},
                // 可以设置双重验证标准
                {max: 30, message: '公司名称不可超过30个字符11'}
                ],
                number: [
                {required: false, validator: rules.FormValidate.Form().validateNumber, trigger: 'change'},
                {max: 10, message: '员工数量不可超过10亿'}
                ],
                code: [{required: true, validator: rules.FormValidate.Form().validateCode, rigger: 'blur'}],
                password: [{required: true, validator: rules.FormValidate.Form().validatePsdReg, rigger: 'blur'}],
            
                contacts: [
                {required: true, validator: rules.FormValidate.Form().validateContacts, rigger: 'blue'},
                {max: 10, message: '联系人不可超过10个字符'}
                ],
                phone: [{required: true, validator: rules.FormValidate.Form().validatePhone, trigger: 'blur'}],
                email: [{required: false, validator: rules.FormValidate.Form().validateEmail, trigger: 'change'}],
                imgCode: [{required: true, message: '请输入验证码', rigger: 'blue'}]
            }
        }
    },
    mounted() {
        //初始加载
        this.load(this.form)

        //获取操作人员列表
        this.getoperatorlist();
    },
    methods: {
        //查询
        search(formName){
            // this.$refs[formName].validate((valid) => {
            // if (valid) {
                this.load(this.form);
            //     } else {
            //     console.log('error submit!!');
            //     return false;
            // }
            // });
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
        //确定分配派单
        takesure(){
            var applyNos = this.multipleSelection
            var uname = this.operator
            let data = {
                applyNos:applyNos,
                uname:uname
            }
            if(uname == '' || uname == null){
                this.$message({
                    message: '请选择操作人员，谢谢合作。',
                    type: "error"
                    });
            }else{
            this.$axios({
                method: "post",
                url: "/workBench/assignCase",
                data: data
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    var successNum = res.data.successNum
                    var totalNum = res.data.totalNum
                    this.$confirm('派单分配总数：'+ totalNum + '，其中成功分配数：' + successNum, '提示', {
                    confirmButtonText: '确定',
                    showCancelButton:false,
                    type: 'success'
                    }).then(() => {
                        //确定
                        this.dialogFormVisible = false
                        this.multipleSelection.length = 0;
                        this.operator = ''

                        //刷新列表
                        this.load(this.form)
                    }).catch(() => {
                        //取消
                    });
                } else {
                    this.$message({
                    message: '案件分配异常，请联系技术人员。',
                    type: "error"
                    });
                }
                },
                error => {}
            );}
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

        //获取操作人员列表
        getoperatorlist(){
            this.$axios({
                method: "post",
                url: "/workBench/listOperator"
            }).then(
                response => {
                var res = response.data;
                if (res.code == '0000') {
                    this.options2 = res.data
                } else {
                    this.$message({
                    message: '获取操作员列表报错',
                    type: "error"
                    });
                }
                },
                error => {}
            );
        },

        //表格选择
        handleSelectionChange(val) {
            var that = this
            //循环
            val.forEach((data)=>{
                if(data.operator != ''){
                    this.$confirm('此案件处理人已分配，请勿重复分配。', '提示', {
                    confirmButtonText: '确定',
                    showCancelButton:false,
                    type: 'warning'
                    }).then(() => {
                        //确定
                        // 取消表格的勾选
                        that.tableData.map(item => {
                            if (item.applyNo === data.applyNo) {
                                this.$refs.multipleTable.toggleRowSelection(item, false)
                            }
                        })
                    }).catch(() => {
                        //取消
                    });
                }else{
                    //清空数组
                    this.multipleSelection = []
                    //循环
                    val.forEach((data)=>{
                        this.multipleSelection.push((data.applyNo))
                    })
                    this.hselected = this.multipleSelection.length;
                }
            })

        },
        handleSizeChange(psize) {
        // 改变每页显示的条数
        this.form.pageSize = psize;
        // 注意：在改变每页显示的条数时，要将页码显示到第一页
        this.form.currentPage = 1;
        this.load(this.form);
        },

        // 初始页currentPage
        handleCurrentChange(pindex) {
        this.form.currentPage = pindex;
        this.load(this.form);
        },
    },
}
</script>
<style lang="less">
    @import'../style/common.css';
</style>