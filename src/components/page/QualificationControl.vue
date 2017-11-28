<template>
    
    <div class="table">

        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 承运人管理</el-breadcrumb-item>
                <el-breadcrumb-item>资格管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <!--
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            
            <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                <el-option key="1" label="广东省" value="广东省"></el-option>
                <el-option key="2" label="湖南省" value="湖南省"></el-option>
            </el-select>
             -->
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table v-loading="loading" :data="tableData" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="承运人ID" sortable width="100">
            </el-table-column>
            <el-table-column prop="name" label="姓名" >
            </el-table-column>
            <el-table-column prop="idCard" label="身份证号" >
            </el-table-column>
            <el-table-column prop="tel" label="联系电话">
            </el-table-column>
            <el-table-column prop="company" label="所属汽旅公司">
            </el-table-column>
            <el-table-column prop="driverCard" label="驾驶证号">
            </el-table-column>
            <el-table-column prop="carPlate" label="车牌号">
            </el-table-column>
            <el-table-column label="操作" width="180" fixed="right">
                <template slot-scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row,scope.store,scope.column)">通过</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="totalRows">
            </el-pagination>
        </div>
        <!-- <el-dialog title="班线属性" :visible.sync="dialogFormVisible">
            <el-form :model="form" label-width="120px">
                <el-form-item label="是否共享" >           
                    <el-radio-group v-model="form.isShare">
                        <el-radio :label="true">是</el-radio>
                        <el-radio :label="false">否</el-radio>
                    </el-radio-group>                  
                </el-form-item>
                <el-form-item label="最大载客数">
                    <el-input v-model="form.loadPerson" auto-complete="off"></el-input>
                </el-form-item>               
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: './static/vuetable.json',
                tableData: [],
                pageNo: 1,
                totalRows:0,
                multipleSelection: [],           
                select_word: '',
                del_list: [],
                is_search: false,
                dialogFormVisible:false,
                form:{
                   
                },
                loading:true
            }
        },
        created(){
            this.renderTable();
        },
        computed: {
   
        },
        methods: {
            handleCurrentChange(val){
                this.pageNo = val;
                this.renderTable();
            },
            renderTable(){

                let self =this;
                this .loading = true;
                this.$axios.get('/api/carryPerson',{
                    params:{
                        page:self.pageNo
                    }
                }).then((res)=>{                
                    console.log(res.data.data);
                    self.tableData = res.data.data.data;
                    self.totalRows = res.data.data.total;
                    self.loading = false;
                })
            },
            search(){
                this.is_search = true;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row,store,column) {
                console.log(row);
                this.dialogFormVisible=true;
                this.dialogFormLoad(row);
                //this.$message('编辑第'+index+'行');
            },
            dialogFormLoad(data){
                    // this.form.id=data.id,
                    // this.form.name=data.name,
                    // this.form.isShare=data.isShare,
                    // this.form.loadPerson=data.loadPerson
                    this.form = data;
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            },
            delAll(){
                const self = this,
                    length = self.multipleSelection.length;
                let str = '';
                self.del_list = self.del_list.concat(self.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += self.multipleSelection[i].name + ' ';
                }
                self.$message.error('删除了'+str);
                self.multipleSelection = [];
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>