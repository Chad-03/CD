import axios from 'axios';

const API_URL = 'http://localhost:8081/api/goods/';

class GoodsService {

    getall(_buyerid){
        let param = {
            buyerid:_buyerid
        };
        return axios.post(API_URL + 'getall', param

        ).then(response=>{
            console.log("goods_response:",response);
            return response.data;

        },
            error => {
                console.log("goods getall error,", error)
            });
    }

    getSelfGoods(_buyerid){
        let param = {
            buyerid:_buyerid
        };
        return axios.post(API_URL + 'getSelfGoods', param

        ).then(response=>{
                console.log("goods_response:",response);
                return response.data;

            },
            error => {
                console.log("goods getall error,", error)
            });
    }

    delete_goods(_g){
        let param = {
            g:_g
        };
        return axios.post(API_URL + 'deleteSelfGoods', param

        ).then(response=>{
                return response.data;
            },
            error => {
                console.log("goods delete error,", error)
            });
    }

    pay(_g, _buyerid){
        let param = {
            g: _g,
            buyerid: _buyerid
        };
        return axios.post(API_URL + 'pay', param

        ).then(response=>{
                console.log("pay_response:",response);
                return response.data;

            },
            error => {
                console.log("goods pay error,", error)
            });
    }
}

export default new GoodsService();