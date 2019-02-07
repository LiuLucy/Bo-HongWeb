<template>
    <div class="m-3">
        <div class="row">
            <div class="col-md-4">
                <div class="container">
                    <el-table :data="weChatId" style="width: 100%">
                        <el-table-column label="#" type="index" width="50">
    
                        </el-table-column>
                        <el-table-column label="WeChatId">
                            <template slot-scope="scope">
                                <div slot="reference" class="name-wrapper">
                                    <el-tag size="medium">{{ scope.row.weChatId }}</el-tag>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="getDeleteWeChatId(scope.row),deleteDialogVisible = true">
                                刪除
                            </el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <el-button class="mt-3" type="primary" @click="createDialogVisible = true">新增</el-button>                                                                             
                </div>
            </div>
        </div>

        <!-- dialog create -->
        <el-dialog
            title="新增"
            :visible.sync="createDialogVisible"
            width="30%">
            <span>
                <label for="">WeChat Id</label>
                <el-input placeholder="請輸入WeChat Id" v-model="newWeChatId"></el-input>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="createDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="createDialogVisible = false,createWeChatId(newWeChatId)">新增</el-button>
            </span>
        </el-dialog>
        <!-- dialog create end -->

          <!-- dialog delete -->
        <el-dialog
            title="警告"
            :visible.sync="deleteDialogVisible"
            width="30%">
            <span>
                確定要刪除嗎？
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialogVisible = false">取消</el-button>
                <el-button type="danger" @click="deleteDialogVisible = false,deleteWeChatId()">刪除</el-button>
            </span>
        </el-dialog>
        <!-- dialog delete end -->
    </div>
</template>

<script>
    import weChat from "../../store/modules/weChat";
    export default {
        name: "tabs",
        data() {
            return {
                newWeChatId: '',
                createDialogVisible: false,
                deleteDialogVisible: false,
                message: "first",
                showHeader: false,
                error: "",
                weChatId: [],
                deleteId: ''
            };
        },
        async created() {
            try {
                this.weChatId = await weChat.getWeChatId();
            } catch (err) {
                this.error = err.message;
            }
        },
        mounted() {
            console.log(this.weChatId);
        },
        methods: {
            async createWeChatId(id) {
                await weChat.insertWeChatId(id)
                this.weChatId = await weChat.getWeChatId();
            },
            async deleteWeChatId() {
                await weChat.deleteWeChatId(this.deleteId)
                this.weChatId = await weChat.getWeChatId();
            },
            getDeleteWeChatId: function(weChatData) {
                this.deleteId = weChatData._id;
            }
    
        },
        computed: {
    
        }
    };
</script>

<style>
    .message-title {
        cursor: pointer;
    }
    
    .handle-row {
        margin-top: 30px;
    }
</style>

