import api from '../services/api'

export default {
    getAll (){
        return api().get('/profiles')
    },

    getById (profileID){
        return api().get(`/profiles/${profileID}`)
    },

    addNewProfile (profile){
        return api().post('/JSONprofile', profile)
    }
}