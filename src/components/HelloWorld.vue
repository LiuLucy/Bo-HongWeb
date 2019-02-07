<template>
    <div class="hello">
        <div class="">
            <div class="row d-flex justify-content-center" style="border:0px;">
                <div class="col-md-7 content-bg">
                    <!-- block1 topBarImg -->
                    <div class="d-flex justify-content-center mt-3">
                        <img width="90%" :src="webContent[0].block1Image" alt="" style="height:100%;">
                    </div>
                    <!--  -->
    
                    <!-- block2 Title -->
                    <div>
                        <h4 class="text-light title my-3 py-3 text-center">{{ webContent[0].block2Text }}</h4>
                    </div>
                    <!--  -->
    
                    <!-- block3 container -->
                    <div>
                        <div v-for="item in webContent[0].block3Article">
                            <p class="message text-center">{{ item.article }}</p>
                        </div>
                    </div>
                    <!--  -->
    
                    <!-- block4 圖片2 -->
                    <div class="d-flex justify-content-center">
                        <img :src="webContent[0].block4Image" alt="" width="90%" style="height: 100%;">
                    </div>
                    <!--  -->
    
                    <!-- block5 文字 -->
                    <div class="row d-flex justify-content-center my-2">
                        <div class="col-md-6">
                            <div class="my-3">
                                <div class="message-line">
                                    <h5 class="m-0 py-2 message-line2 text-center">{{ webContent[0].block5Text }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  -->
    
                    <!-- 文章 -->
                    <div class="container">
                        <p class="article">{{ webContent[0].block6Article }}</p>
                    </div>
                    <!--  -->
    
                    <!-- 圖片 -->
                    <div class="d-flex justify-content-center">
                        <img width="90%" :src="webContent[0].block7Image" alt="" height="100%">
                    </div>
                    <!--  -->
    
                    <!-- 按鈕 -->
                    <div class="d-flex justify-content-center my-3">
                        <button @click="copyText(showWechatId),showDialog = true" :data-clipboard-text="showWechatId" class="button1 tag-read" style="font-size:24px;">{{ showWechatId }}</button>
                    </div>
                    <!--  -->

                    <!-- QRcode -->
                    <div class="d-flex justify-content-center my-3">
                        <img width="30%" height="30%" :src="showQrCode" alt="">
                    </div>
    
                    <!-- ↑点击微信号添加好友↑ -->
                    <div class="d-flex justify-content-center my-3">
                        <h5>{{ webContent[0].block8Text }}</h5>
                    </div>
                    <!--  -->
    
                    <!-- 文章二 -->
                    <div class="container">
                        <p class="article">{{ webContent[0].block9Article }}</p>
                    </div>
                    <!--  -->
    
                    <!-- 圖片 -->
                    <div class="d-flex justify-content-center my-3">
                        <img width="90%" height="100%" :src="webContent[0].block10Image" alt="">
                    </div>
                    <!--  -->
    
                    <!-- 圖片 -->
                    <div class="d-flex justify-content-center mt-3 mb-5">
                        <img width="90%" height="100%" :src="webContent[0].block11Image" alt="">
                    </div>
    
                    <!-- 評論 -->
                    <div class="my-5 comments container">
                        <div class="row top-comment-title">
                            <div class="col-6">
                                <h5 style="font-size:16px; color:rgba(0, 0, 0,.5)">評論(2162)</h5>
                            </div>
                            <div class="col-3">
                                <h5 style="font-size:16px; color:rgba(0, 0, 0,.5)">只看樓主</h5>
                            </div>
                            <div class="col-3">
                                <h5 style="font-size:16px; color:rgba(0, 0, 0,.5)">倒敘排列</h5>
                            </div>
                        </div>
                        <!-- 留言內容 -->
                        <div class="my-3">
                            <ul class="p-0">
                                <li v-for="comment in comments" class="command-line my-4">
                                    <img class="comment-image" :src="comment.image" alt="">
                                    <div class="Rig">
                                        <p class="Rig_p1 m-0">
                                            {{ comment.name }}
                                            <span>{{ comment.time }}</span>
                                        </p>
                                        <p class="Rig_p2 mb-4">{{ comment.commentContent }}</p>
                                    </div>
                                    <div class="float-clear"></div>
                                </li>
                            </ul>
                        </div>
                        <!--  -->
                    </div>
                    <!--  -->
    
                    <!-- footer -->
                    <div>
                        <img width="100%" :src="webContent[0].block12Footer" alt="">
                    </div>
                    <!--  -->
    
    
                    <el-dialog title="添加老師微信學轉錢" :visible.sync="showDialog" :width="dialogSize">
                        <span>恭喜您！微信號{{ showWechatId }} 以複製成功</span>
                        <span slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="showDialog = false,changeId()">確 定</el-button>
                                </span>
                    </el-dialog>
                </div>
            </div>
        </div>
        <div class="fixed">
            点击复制→
            <button @click="copyText(showWechatId),showDialog = true" :data-clipboard-text="showWechatId" class="button1 tag-read m-0 p-0 px-1" style="font-size:20px;">{{ showWechatId }}</button> ←开始赚钱
        </div>
    </div>
</template>

<script>
    import Clipboard from 'clipboard';
    import weChat from '../store/modules/weChat'
    import qeCode from '../store/modules/qrCode'
    import webContent from '../store/modules/webContent'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                dialogSize: '90%',                
                showDialog: false,                
                error: '',
                weChatId: [{}],
                showWechatId: '',
                showQrCode:'',
                qrCodeData:[{}],
                webContent:[{
                    block1Image:'',
                    block2Text:'',
                    block3Article:[
                        {
                            article:'',
                        }
                    ],
                    block4Image:'',
                    block5Text:'',
                    block6Article:'',
                    block7Image:'',
                    block8Text:'',
                    block9Article:'',
                    block10Image:'',
                    block11Image:'',
                    block12Footer:''   
                }],
                comments: [{
                        image: require('../assets/03_03.png'),
                        name: '半城烟沙',
                        commentContent: '我剛做兩個月，確實挺驚喜的，等我再賺多點，也跟你一樣把經驗分享給大家',
                        time: '4分鐘'
                    },
                    {
                        image: require('../assets/04_03.png'),
                        name: '想嫁有钱人',
                        commentContent: '真方便，加了客服，註冊就可以用了，試著投了，2分鐘我已經賺了200塊了，哈哈',
                        time: '7分鐘'
                    },
                    {
                        image: require('../assets/05_03.png'),
                        name: '阳光',
                        commentContent: '我也加了老師微信號跟著嘗試去，反正就是小額投資,會有大回報！',
                        time: '11分鐘'
                    },
                    {
                        image: require('../assets/05_031.png'),
                        name: '遗城角落',
                        commentContent: '我上个月跟着老师玩这个赚了一万！小投入大回报，这个月冲五三万去！',
                        time: '19分鐘'
                    },
                    {
                        image: require('../assets/05_032.png'),
                        name: '小豆芽',
                        commentContent: '小额多次的投放，感觉更稳，但是看准了一次，就放手博一博，单车变摩托，试一试！',
                        time: '33分鐘'
                    },
                    {
                        image: require('../assets/05.jpg'),
                        name: '猫咪爱钞票',
                        commentContent: '操作真简单，一看就会用了。现在我基本都是用碎片时间玩，一有空就拿手机操作。',
                        time: '34分鐘'
                    },
                    {
                        image: require('../assets/06_03.png'),
                        name: 'jolin林',
                        commentContent: '我辞职好久了，也没找到好工作，这个投入是不是很高？',
                        time: '40分鐘'
                    },
                    {
                        image: require('../assets/07_03.png'),
                        name: '渣渣辉',
                        commentContent: '上周炒股亏了60000多块。后来玩这个，每天投了100块左右，10多天居然让我把炒股的钱都赚回来。以后还是玩这个赚钱稳当。',
                        time: '43分鐘'
                    },
    
                ]
            }
        },
        created() {
            this.getChatId()  
            this.getWeChatQrCode()
            this.getWebContent()
        },
        mounted() {            
            this.randomWeChat()
            this.alertDialogSize()
            window.onresize = () => {
                this.alertDialogSize()
            };                   
        },
        methods: {
            
            async getChatId() {            
                try {
                    this.weChatId = await weChat.getWeChatId();
                    this.randomWeChat()
                } catch (err) {
                    this.error = err.message;
                }
            },
            
            async getWeChatQrCode(){
                try{
                    this.qrCodeData = await qeCode.getQrCode();
                    this.setImage()
                } catch(err){   
                    this.error = err.message;
                }
            },

            async getWebContent(){
                try{
                    this.webContent = await webContent.getWebContent();                            
                } catch(err){   
                    this.error = err.message;                                   
                }                               
            },

            copyText: function(id) {
                document.execCommand("copy");
                var clipboard = new Clipboard('.tag-read')
                clipboard.on('success', e => {
                    console.log('复制成功')
                    this.showDialog = true
                    clipboard.destroy()
                })
                clipboard.on('error', e => {
                    console.log('该浏览器不支持自动复制')
                    clipboard.destroy()
                })
            },
            changeId: function() {
                this.randomWeChat()
            },
            randomWeChat: function() {
                const idx = Math.floor(Math.random() * this.weChatId.length);
                const qrcodex = Math.floor(Math.random() * this.qrCodeData.length);
                this.showQrCode = this.qrCodeData[qrcodex].qrcodeImage;
                this.showWechatId = this.weChatId[idx].weChatId;
            },
            setImage: function () {
                this.showQrCode = this.qrCodeData[0]
            },
            alertDialogSize: function() {
                if (0 < window.innerWidth && window.innerWidth < 576) {
                    this.dialogSize = '90%'
                } else if (576 < window.innerWidth && window.innerWidth < 992) {
                    this.dialogSize = '50%'
                } else {
                    this.dialogSize = '30%'
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    body {
        background: rgb(243, 243, 243) !important;
    }
    
    .title {
        background-color: rgb(47, 107, 242)
    }
    
    .message {
        color: rgb(220, 119, 68);
        font-size: 0.9rem;
    }
    
    .message-line {
        border: 2px solid rgb(252, 0, 0);
    }
    
    .message-line2 {
        border: 1px dashed rgb(252, 0, 0);
    }
    
    .article {
        line-height: 30px;
        font-size: 18px;
    }
    
    .button1 {
        display: inline-block;
        padding: 5px 8px;
        background-color: rgb(250, 250, 5);
        color: rgb(255, 0, 0);
        box-shadow: 0 3px 3px rgba(0, 0, 0, .5);
        border-radius: 5px;
        margin: 10px 0;
        font-weight: bold;
    }
    
    .content-bg {
        background: rgb(255, 255, 255)
    }
    
    
    /* .comments{
            border-bottom: solid rgba(0,0,0,.3) 1px;     
        }
        .top-comment-title{
            border-bottom: solid rgba(0,0,0,.3) 1px;   
        } */
    
    .comment-image {
        float: left;
        margin-left: 25px;
        width: 32px;
        height: 32px;
    }
    
    li {
        list-style: outside none none;
    }
    
    .Rig {
        margin-left: 75px;
    }
    
    .Rig_p1 {
        text-align: left;
        line-height: 24px;
        font-size: 14px;
        color: rgb(53, 103, 177);
    }
    
    .Rig_p1 span {
        float: right;
        color: rgb(153, 150, 150);
        margin-right: 30px;
    }
    
    .Rig_p2 {
        text-align: left;
        line-height: 26px;
        font-size: 16px;
        color: rgb(42, 42, 42);
        padding-right: 15px;
        float: left;
    }
    
    .float-clear {
        clear: both
    }
    
    .command-line {
        border-bottom: solid rgba(125, 125, 125, .2) 1px;
    }
    
    .fixed {
        color: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 15px 0;
        font-weight: bold;
        background: #066dff;
        text-align: center;
        z-index: 666;
        font-size: 1.2rem;
    }
    
    @media only screen and (min-width: 1029px) {
        .fixed {
            display: none;
        }
    }
    
    @media screen and (max-width: 1024px) and (min-width: 320px) {
        .fixed {
            display: block;
        }
    }
</style>
