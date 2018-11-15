<template>
    <div class="form">
        <h1>Create Profile</h1> 

        <form class="add-profile-form">
            First name:
            <input type="text" v-model="profile.firstName" required>
        </form>
        <br>
        <br>
        <form class="add-profile-form"> 
            Last name:
            <input type="text" v-model="profile.lastName" required>
        </form>
        <br>
        <br>
        <form class="add-profile-form">
            <button v-on:click="create">Submit</button>
        </form>
    </div>
</template>

<script>
import profileService from '../services/profileService';

export default {
    name: 'AddProfile',
    data () {
        return {
            profile:{
                firstName: null,
                lastName: null,
            }
        }
    },
    methods:{
         async create(){
            console.log(this.profile);
            await profileService.addNewProfile(this.profile)
        //     this.$root.$emit('initSnackBar', {
        //     text: 'Profile Created Successfully',
        //     color: 'success'})
            // this.$router.push({
            //     name: 'this.profile'
            // })
         }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

table {
    display: inline-block;
}

.add-profile-form{
    display: inline-block;
}

a {
  color: #7941b9
}
</style>
