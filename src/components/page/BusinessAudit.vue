<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>企业管理</el-breadcrumb-item>
                <el-breadcrumb-item>业务申请审核</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量通过</el-button>
            <el-select v-model="select_cate" placeholder="筛选状态" class="handle-select mr10">
                <el-option key="2" label="全部" value="全部"></el-option>
                <el-option key="2" label="待审核" value="待审核"></el-option>
                <el-option key="1" label="已通过" value="已通过"></el-option>
                <el-option key="2" label="未通过" value="未通过"></el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">通过</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: './static/vuetable.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false
            }
        },
        created(){
            this.getData();
        },
        computed: {
            data(){
                const self = this;
                return self.tableData.filter(function(d){
                    let is_del = false;
                    for (let i = 0; i < self.del_list.length; i++) {
                        if(d.name === self.del_list[i].name){
                            is_del = true;
                            break;
                        }
                    }
                    if(!is_del){
                        if(d.address.indexOf(self.select_cate) > -1 && 
                            (d.name.indexOf(self.select_word) > -1 ||
                            d.address.indexOf(self.select_word) > -1)
                        ){
                            return d;
                        }
                    }
                })
            }
        },
        methods: {
            handleCurrentChange(val){
                this.cur_page = val;
                this.getData();
            },
            getData(){
                let self = this;
                // if(process.env.NODE_ENV === 'development'){
                //     self.url = '/ms/table/list';
                // };
                self.tableData =[{
        "date": "1997-11-11",
        "name": "林丽",
        "address": "吉林省 辽源市 龙山区"
    }, {
        "date": "1987-09-24",
        "name": "文敏",
        "address": "江西省 萍乡市 芦溪县"
    }, {
        "date": "1996-08-08",
        "name": "杨秀兰",
        "address": "黑龙江省 黑河市 五大连池市"
    }, {
        "date": "1978-06-18",
        "name": "魏强",
        "address": "广东省 韶关市 始兴县"
    }, {
        "date": "1977-07-09",
        "name": "石秀兰",
        "address": "江苏省 宿迁市 宿豫区"
    }, {
        "date": "1994-09-20",
        "name": "朱洋",
        "address": "海外 海外 -"
    }, {
        "date": "1980-01-22",
        "name": "傅敏",
        "address": "海外 海外 -"
    }, {
        "date": "1985-10-10",
        "name": "毛明",
        "address": "内蒙古自治区 包头市 九原区"
    }, {
        "date": "1975-09-08",
        "name": "何静",
        "address": "西藏自治区 阿里地区 普兰县"
    }, {
        "date": "1970-06-07",
        "name": "郭秀英",
        "address": "四川省 巴中市 恩阳区"
    }]
                // self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
                //     self.tableData = res.data.list;
                // })
            },
            search(){
                this.is_search = true;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                this.$message('编辑第'+(index+1)+'行');
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