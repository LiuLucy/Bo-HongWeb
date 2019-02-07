import axios from 'axios';

const url = 'https://case1.herokuapp.com/api/posts/';


class weChat{
    // Get
    static getWeChatId(){
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
    static insertWeChatId(weChatId){
        return axios.post(url,{
            weChatId
        })
    }
    // Delete
    static deleteWeChatId(id){
        return axios.delete(`${url}${id}`)
    }
}

export default weChat;