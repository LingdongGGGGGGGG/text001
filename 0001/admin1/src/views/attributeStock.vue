<template>&nbsp;&nbsp;&nbsp;&nbsp;
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="单据编号" style="float:left;margin-left: 2rem;margin-top:1.3rem;" label-width=10 >
            <el-input v-model="sizeForm.name" placeholder="请输入单据编号"></el-input>
        </el-form-item>
        <el-form-item label="商品信息" style="float:left;margin-top:1.3rem;">
            <el-input v-model="sizeForm.name" placeholder="请输入条码、名称、规格···"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" style="float:left;margin-top:1.3rem;">
            <el-col :span="11">
                <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="sizeForm.date1"
                        style="width: 100%;"
                ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-time-picker
                        placeholder="单据日期"
                        v-model="sizeForm.date2"
                        style="width: 100%;"
                ></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="仓库名称" style="float:left;margin-left: 1.5rem;">
            <el-select v-model="sizeForm.region" placeholder="请选择仓库名称">
                <el-option label="仓库一" value="shanghai"></el-option>
                <el-option label="仓库二" value="beijing"></el-option>
            </el-select>
        </el-form-item> <el-form-item label="操作员" style="float:left;">
        <el-select v-model="sizeForm.region" placeholder="请选择操作员">
            <el-option label="操作员一" value="shanghai"></el-option>
            <el-option label="操作员二" value="beijing"></el-option>
        </el-select>
    </el-form-item>
        <el-form-item size="large">
            <el-button type="primary" @click="onSubmit" style="position: relative;
    top: 4rem;
    left: -30rem;
">查询</el-button>
            <el-button style="position: relative;top: 1.3rem;
    left: -24rem;">重置</el-button>
        </el-form-item>
    </el-form>

    <el-button type="primary" @click="dialogFormVisible = true" style="position: relative;    top: -2.3rem;
    right: -23rem;font-size: 16px;"
    >+&nbsp;新&nbsp;增</el-button
    >

    <el-dialog title="新增订单" v-model="dialogFormVisible">
        <el-form :model="form">
            <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
            >
                <el-form-item label="单据编号" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="会员单号" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择会员类型">
                        <el-option label="非会员" value="shanghai"></el-option>
                        <el-option label="尊贵V1" value="尊贵V1"></el-option>
                        <el-option label="尊贵V2" value="尊贵V2"></el-option>
                        <el-option label="尊贵V3" value="尊贵V3"></el-option>
                        <el-option label="尊贵V4" value="尊贵V4"></el-option>
                        <el-option label="尊贵V5" value="尊贵V5"></el-option>
                        <el-option label="尊贵V6" value="尊贵V6"></el-option>
                        <el-option label="尊贵V7" value="尊贵V7"></el-option>
                        <el-option label="尊贵V8" value="尊贵V8"></el-option>
                        <el-option label="尊贵V8" value="尊贵V8"></el-option>
                        <el-option label="尊贵V9" value="尊贵V9"></el-option>
                        <el-option label="尊贵V10" value="尊贵V10"></el-option>
                        <el-option label="尊贵V11" value="尊贵V11"></el-option>
                        <el-option label="尊贵V12" value="尊贵V12"></el-option>
                        <el-option label="尊贵的SVIP1" value="尊贵SVIP1"></el-option>
                        <el-option label="尊贵的SVIP2" value="尊贵SVIP2"></el-option>
                        <el-option label="尊贵的SVIP3" value="尊贵SVIP3"></el-option>
                        <el-option label="尊贵的SVIP4" value="尊贵SVIP4"></el-option>
                        <el-option label="尊贵的终身SVIP" value="尊贵的终身SVIP"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="单据日期" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="ruleForm.date1"
                                    style="width: 100%;"
                            ></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker
                                    placeholder="选择时间"
                                    v-model="ruleForm.date2"
                                    style="width: 100%;"
                            ></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="收款类型" prop="type" required>
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="现金" name="type"></el-checkbox>
                        <el-checkbox label="支付宝" name="type"></el-checkbox>
                        <el-checkbox label="银行卡" name="type"></el-checkbox>
                        <el-checkbox label="微信支付" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="收款" prop="hello" :key="1222">
                    <el-input v-model.number="ruleForm.in"></el-input>
                </el-form-item>
                <el-form-item label="找零" prop="hello" :key="23333">
                    <el-input v-model.number="ruleForm.out"></el-input>
                </el-form-item>
                <el-form-item label="实付" prop="hello" :key="344444">
                    <el-input v-model.number="ruleForm.real"></el-input>
                </el-form-item>
            </el-form>
        </el-form>
        <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
      >确 定</el-button
      >
    </span>
        </template>
    </el-dialog>

    <el-table
            :data="tableData"
            style="    width: 79rem;
    position: absolute;
    top: 16rem;
    right: 0rem;"
            :row-class-name="tableRowClassName"
    >
        <el-table-column prop="member" label="会员" width="180"> </el-table-column>
        <el-table-column prop="DocumentMember" label="单据编号" width="180"> </el-table-column>
        <el-table-column prop="things" label="商品信息"> </el-table-column>
        <el-table-column prop="Date" label="单据日期"> </el-table-column>
        <el-table-column prop="employee" label="操作员"> </el-table-column>
        <el-table-column prop="count" label="金额合计"> </el-table-column>
        <el-table-column prop="profit" label="收款"> </el-table-column>
        <el-table-column prop="now" label="状态"> </el-table-column>
        <el-table-column prop="do" label="操作"> </el-table-column>
    </el-table>
    <el-empty :image-size="200"></el-empty>
</template>

<script>
    export default {
        data() {
            return {
                sizeForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',

                },
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                formLabelWidth: '120px',
                tableData: [
                    {
                        member: '',
                        DocumentMember: '',
                        things:'',
                        Date:'',
                        employee:'',
                        count:'',
                        profit:'',
                        now:'',
                        do:'-'
                    }
                ],
                ruleForm: {
                    name: '',
                    in:'',
                    out:'',
                    real:'',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                rules: {
                    name: [
                        { required: true, message: '请输入单据编号', trigger: 'blur' },
                        {
                            min: 10,
                            max: 11,
                            message: '长度在 10 到 11 之间',
                            trigger: 'blur',
                        },
                    ],
                    hello: [
                        { required: true, message: '请输入金额', trigger: 'change' },
                        {
                            min: 0,
                            max: 999999,
                            message: '金额必须为正数',
                            trigger: 'blur',
                        }],
                    region: [
                        { required: true, message: '请选择会员类型', trigger: 'change' },
                    ],
                    date1: [
                        {
                            type: 'date',
                            required: true,
                            message: '请选择日期',
                            trigger: 'change',
                        },
                    ],
                    date2: [
                        {
                            type: 'date',
                            required: true,
                            message: '请选择时间',
                            trigger: 'change',
                        },
                    ],
                    type: [
                        {
                            type: 'array',
                            required: true,
                            message: '请至少选择一个活动性质',
                            trigger: 'change',
                        },
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' },
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' },
                    ],
                },
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!')
            },
            tableRowClassName({ row, rowIndex }) {
                if (rowIndex === 1) {
                    return 'warning-row'
                } else if (rowIndex === 3) {
                    return 'success-row'
                }
                return ''
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!')
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }}
</script>

<style scoped>

</style>