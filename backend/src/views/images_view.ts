import Image from "../models/Image";

export default {
    //método RENDER vai pegar o Ofanato e retornar o objeto na maneira que ele precisa ser exibido no FrontEnd
    render(image: Image) {
        return {
            id: image.id,   
            url: `http://192.168.0.12:3333/uploads/${image.path}`,         
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};