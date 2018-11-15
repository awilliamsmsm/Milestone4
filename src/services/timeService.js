import api from '../services/api'

export default {
    getTime (){
        return api().get('/getTime')
    },
    getCanadaTime (){
        return api().get('/getCanadaTime')
    }
}