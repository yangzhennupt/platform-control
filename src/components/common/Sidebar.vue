<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router  background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-menu',
                        index: '1',
                        title: '班线管理',
                        subs: [
                            {
                                index: 'lineproperty',
                                title: '班线属性管理'
                            },
                            {
                                index: 'customBusLine',
                                title: '新开班线发布'
                            },
                            {
                                index: 'lineresponsibility',
                                title: '班线承运人管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '2',
                        title: '企业管理',
                        subs: [
                            {
                                index: 'businessaudit',
                                title: '业务申请审核'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '3',
                        title: '承运人管理',
                        subs:[
                            {
                                index:'qualificationcontrol',
                                title:'资格管理' 
                            },
                            {
                                index:'balance',
                                title:'结算' 
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
