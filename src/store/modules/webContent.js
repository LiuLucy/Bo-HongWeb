import axios from 'axios';

const url = 'https://case1.herokuapp.com/api/webcontent/';
// const localurl = 'localhost:5000/api/webcontent/'



class webContent{
    // Get
    static getWebContent(){      
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
    static upDateContent(id,webContentForm){
        return axios.put(`${url}${id}`,{
            block1Image:webContentForm.block1Image,
            block2Text:webContentForm.block2Text,
            block3Article:webContentForm.block3Article,
            block4Image:webContentForm.block4Image,
            block5Text:webContentForm.block5Text,
            block6Article:webContentForm.block6Article,
            block7Image:webContentForm.block7Image,
            block8Text:webContentForm.block8Text,
            block9Article:webContentForm.block9Article,
            block10Image:webContentForm.block10Image,
            block11Image:webContentForm.block11Image,
            block12Footer:webContentForm.block12Footer
        })        
    }
    // Delete
    static deleteImageId(id){
        return axios.delete(`${url}${id}`)
    }
}

export default webContent;

