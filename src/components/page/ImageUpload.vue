<template>
    <div class="m-3">
        <div class="row">
            <div class="col-md-3 mb-2">
                <el-table :data="imageTableData" style="width: 100%">
                    <el-table-column label="Wechat QRcode" align="center">
                        <template scope="scope">
                                <img :src="scope.row.qrcodeImage" alt="" width="100px" height="100px">
                        </template>
                    </el-table-column>         
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="getDeleteImageId(scope.row),deleteDialogVisible = true">
                                刪除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>

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
                        <el-button type="danger" @click="deleteDialogVisible = false,deleteImageId()">刪除</el-button>
                    </span>
                </el-dialog>
                <!-- dialog delete end -->
            </div>
            <div class="col-md-6">
                                          
                <!-- <span>請輸入圖片網址 推薦上傳連結：<a href="https://imgur.com/a/u91g6Cp" arget="_blank">Imgur</a></span> <br>
                <span style="color:red">上傳完將圖片按右鍵複製圖片連結到下面的框框內</span>
                <el-input v-model="imageUrl" placeholder="请输入内容"></el-input>
                <el-button class="mt-3" type="primary" @click="saveImage(imageUrl)">存取圖片</el-button> -->
                <el-upload
                    class="avatar-uploader"
                    action=""
                    :show-file-list="false"
                    :auto-upload="false"
                    :on-change="imageChange">                
                    <img id="giftImg" v-show="haveImage" :src="imageUrl" class="avatar">
                    <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                </el-upload>                                                        
                <el-button @click="saveImage(imageUrl)" type="primary" size="small" v-show="haveImage">上傳</el-button>                
            </div>               
        </div>
    </div>
</template>

<script>
    import qrCode from "../../store/modules/qrCode";
    var imgur = require('imgur');

    export default {
        data() {
            return {
                deleteDialogVisible:false,
                haveImage:false,
                imageUrl: '',
                imageTableData:[
                    {},
                ],
                deleteId:'',
            };
        },
        mounted() {
            this.getQrCode()
        },
        methods: {
            imageChange(file, fileList) {
                var This = this;
                var reader = new FileReader();
                reader.readAsDataURL(file.raw);
                reader.onload = function(e){ 
                    this.result // 这个就是base64编码了
                    This.imageUrl = this.result;                    
                    This.haveImage = true;

                }
            },        

            async getQrCode(){
                await qrCode.getQrCode()
                this.imageTableData = await qrCode.getQrCode();
            },

            async saveImage(url) {
                await qrCode.saveImage(url)
                this.imageTableData = await qrCode.getQrCode();
                this.haveImage = false
                this.imageUrl=''
            },

            async deleteImageId(id){
                await qrCode.deleteImageId(this.deleteId)
                this.imageTableData = await qrCode.getQrCode();
            },

            getDeleteImageId: function(imageData) {
                this.deleteId = imageData._id;
            }
        }
    }
</script>

<style>
    @import "../../assets/css/style.css";
    @import "../../assets/css/mobile-style.css";
    
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        width: 178px;
        height: 178px;
        position: relative;
        overflow: hidden;
    }
    
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>