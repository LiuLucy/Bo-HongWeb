import axios from 'axios';

const url = 'https://case1.herokuapp.com/api/qrcode/';
// const localurl = 'localhost:5000/api/qrcode'

class qrCode{
    // Get
    static getQrCode(){
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createAt: new Date(post.createAt)
                    }))
                );
            } catch(err){
                reject(err);
            }
        })
    }
    // Create
    static saveImage(qrcodeImage){
        return axios.post(url,{
            qrcodeImage
        })
    }
    // Delete
    static deleteImageId(id){
        return axios.delete(`${url}${id}`)
    }
}

export default qrCode;