<template>
    <div>
        <div class="content">
            <div class="row d-flex justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header justify-content-between d-flex">
                            修改文章內容
                            <el-button @click="editData(showEdit),showEdit = !showEdit" size="mini" type="primary">
                                {{ showEdit ? '儲存' : '修改' }}
                            </el-button>    
                        </div>                        
                    </div>
                    <div class="d-flex justify-content-center my-3">
                        <img width="100%" :src="webContent[0].block1Image" alt="" v-show="!showEdit">
                        <div>
                            <label for="" v-show="showEdit">區塊一（圖片）</label>
                            <el-upload
                                v-show="showEdit"
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :auto-upload="false"
                                :on-change="imageChangeBlock1">                
                                <img id="giftImg" v-show="haveImage" :src="webContent[0].block1Image" class="avatar">
                                <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                            </el-upload>  
                            <!-- <el-input v-show="showEdit" v-model="webContent[0].block1Image" width="100%" placeholder="請輸入圖片連結"></el-input> -->
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <h3 v-show="!showEdit">{{ webContent[0].block2Text }}</h3>
                        <div>
                            <label v-show="showEdit" for="">區塊二（標題）</label>
                            <el-input v-show="showEdit" v-model="webContent[0].block2Text" width="100%" placeholder="請輸入文字"></el-input>                        
                        </div>
                    </div>
                    <hr>                    
                    <label v-show="showEdit" for="">區塊三（文章段落）</label>
                    <div class="d-flex justify-content-center my-3" v-for="item in webContent[0].block3Article">
                        <p v-show="!showEdit">{{ item.article }}</p> <br>                                                 
                        <el-input v-show="showEdit" v-model="item.article" width="100%" placeholder="請輸入文字"></el-input>                                            
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <img v-show="!showEdit" width="100%" :src="webContent[0].block4Image" alt="">
                        <div>
                            <label v-show="showEdit" for="">區塊四（圖片）</label>
                            <el-upload
                                v-show="showEdit"
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :auto-upload="false"
                                :on-change="imageChangeBlock4">                
                                <img id="giftImg" v-show="haveImage" :src="webContent[0].block4Image" class="avatar">
                                <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                            </el-upload> 
                            <!-- <el-input v-show="showEdit" v-model="webContent[0].block4Image" width="100%" placeholder="請輸入圖片連結"></el-input>                                                                 -->
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <h3 v-show="!showEdit">{{ webContent[0].block5Text }}</h3>
                        <div>
                            <label v-show="showEdit" for="">區塊五（文字）</label>
                            <el-input v-show="showEdit" v-model="webContent[0].block5Text" width="100%" placeholder="請輸入圖片文字"></el-input>                                                                
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <p v-show="!showEdit">{{ webContent[0].block6Article }}</p>
                        <div style="width:100%">
                            <label v-show="showEdit" for="">區塊六（文章）</label>
                            <el-input
                                v-show="showEdit"
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 10}"
                                placeholder="請輸入廣告文章"
                                v-model="webContent[0].block6Article">
                            </el-input>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <img v-show="!showEdit" :src="webContent[0].block7Image" alt="">
                        <div>
                            <label v-show="showEdit" for="">區塊七（圖片）</label>
                            <el-upload
                                v-show="showEdit"
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :auto-upload="false"
                                :on-change="imageChangeBlock7">                
                                <img id="giftImg" v-show="haveImage" :src="webContent[0].block7Image" class="avatar">
                                <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                            </el-upload> 
                            <!-- <el-input v-show="showEdit" v-model="webContent[0].block7Image" width="100%" placeholder="請輸入圖片文字"></el-input>                                                                 -->
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <h3 v-show="!showEdit">{{ webContent[0].block8Text }}</h3>
                        <div>
                            <label v-show="showEdit" for="">區塊八（文字）</label>
                            <el-input v-show="showEdit" v-model="webContent[0].block8Text" width="100%" placeholder="請輸入圖片文字"></el-input>                                                                
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <p v-show="!showEdit">{{ webContent[0].block9Article }}</p>
                        <div style="width:100%;">
                            <label v-show="showEdit" for="">區塊九（文章）</label>
                            <el-input
                                v-show="showEdit"
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 10}"
                                placeholder="請輸入廣告內容"
                                v-model="webContent[0].block9Article">
                            </el-input>
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <img v-show="!showEdit" :src="webContent[0].block10Image" alt="">
                        <div>
                            <label v-show="showEdit" for="">區塊十（圖片）</label>
                            <el-upload
                                v-show="showEdit"
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :auto-upload="false"
                                :on-change="imageChangeBlock10">                
                                <img id="giftImg" v-show="haveImage" :src="webContent[0].block10Image" class="avatar">
                                <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                            </el-upload> 
                            <!-- <el-input v-show="showEdit" v-model="webContent[0].block10Image" width="100%" placeholder="請輸入圖片文字"></el-input>                                                                 -->
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <img v-show="!showEdit" :src="webContent[0].block11Image" alt="">
                        <div>
                            <label v-show="showEdit" for="">區塊十一（圖片）</label>
                            <el-upload
                                v-show="showEdit"
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :auto-upload="false"
                                :on-change="imageChangeBlock11">                
                                <img id="giftImg" v-show="haveImage" :src="webContent[0].block11Image" class="avatar">
                                <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                            </el-upload> 
                            <!-- <el-input v-show="showEdit" v-model="webContent[0].block11Image" width="100%" placeholder="請輸入圖片文字"></el-input>                                                                 -->
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-center my-3">
                        <img v-show="!showEdit" :src="webContent[0].block12Footer" alt="">
                        <div>
                            <label v-show="showEdit" for="">區塊十二（圖片）</label>
                            <el-upload
                                v-show="showEdit"
                                class="avatar-uploader"
                                action=""
                                :show-file-list="false"
                                :auto-upload="false"
                                :on-change="imageChangeBlock12">                
                                <img id="giftImg" v-show="haveImage" :src="webContent[0].block12Footer" class="avatar">
                                <i v-show="!haveImage" class="el-icon-plus avatar-uploader-icon"></i>                                                                           
                            </el-upload> 
                            <!-- <el-input v-show="showEdit" v-model="webContent[0].block12Footer" width="100%" placeholder="請輸入圖片文字"></el-input>                                                                 -->
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import webContent from '../../store/modules/webContent'
export default {    
    data() {
        return {
            haveImage:false,
            imageUrl: '',
            showEdit:false,            
            webContent:[{}],    
        }
    },
    created() {
        this.getWebContent()
    },
    methods: {
        imageChangeBlock1(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){ 
                this.result // 这个就是base64编码了
                This.webContent[0].block1Image = this.result;                    
                This.haveImage = true;

            }
        },
        imageChangeBlock4(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){ 
                this.result // 这个就是base64编码了
                This.webContent[0].block4Image = this.result;                    
                This.haveImage = true;

            }
        },
        imageChangeBlock7(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){ 
                this.result // 这个就是base64编码了
                This.webContent[0].block7Image = this.result;                    
                This.haveImage = true;

            }
        },
        imageChangeBlock10(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){ 
                this.result // 这个就是base64编码了
                This.webContent[0].block10Image = this.result;                    
                This.haveImage = true;

            }
        },
        imageChangeBlock11(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){ 
                this.result // 这个就是base64编码了
                This.webContent[0].block11Image = this.result;                    
                This.haveImage = true;

            }
        },
        imageChangeBlock12(file, fileList) {
            var This = this;
            var reader = new FileReader();
            reader.readAsDataURL(file.raw);
            reader.onload = function(e){ 
                this.result // 这个就是base64编码了
                This.webContent[0].block12Footer = this.result;                    
                This.haveImage = true;

            }
        },
        editData:function(isEdit){
            if(isEdit) {  
                // console.log(this.webContent[0])           
                this.upDateWebContent(this.webContent[0]._id,this.webContent[0])
            }
        },
        async getWebContent(){
            try{
                this.webContent = await webContent.getWebContent();                                            
            } catch(err){   
                this.error = err.message;                                   
            }                              
        },  
        async upDateWebContent(id,webForm){
            await webContent.upDateContent(id,webForm)
            this.webContent = await webContent.getWebContent(); 
        }     
    },
}
</script>

<style>
     .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
        height: 100%;
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
        width: 100%;
        height: 100%;
        display: block;
    }
</style>