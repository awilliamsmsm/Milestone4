<template>
    <div class="form">
        <h1>Create Profile</h1>

        <!-- <p class="error" v-if="errors.length"> -->
            <!-- <ul> -->
                <!-- <li v-for="error in errors"> {{ error }}</li> -->
            <!-- </ul> -->
        <!-- </p> -->

        <form class="add-profile-form">
            <div class="inputDiv">
                <!-- First name: -->
                First name: 
                <div class="inputWrapper">
                    <input 
                        class="text_input"
                        :class="{ 'text_input--error': errors.has('firstName') }" 
                        type="text" 
                        v-model="profile.firstName" 
                        v-validate="'required|alpha'" 
                        data-vv-name="firstName" 
                        data-vv-validate-on="blur|input"
                        
                    >
                    <span class="errorText" v-if="errors.first('firstName')">{{ errors.first('firstName') }}</span>
                </div>
            </div>
            <div class="inputDiv">
                Last name: 
                <div class="inputWrapper"> 
                    <input 
                        class="text_input"
                        :class="{ 'text_input--error': errors.has('lastName') }" 
                        type="text" 
                        v-model="profile.lastName" 
                        v-validate="'required|alpha'" 
                        data-vv-name="lastName" 
                        data-vv-validate-on="blur|input"
                    >
                    <span class="errorText" v-if="errors.first('lastName')">{{ errors.first('lastName') }}</span>
                </div>
            </div>
        </form>
        <div>
            <form class="add-profile-form">
                <button class="btn" type="button" :disabled="!isProfileComplete || errors.first('lastName') || errors.first('firstName')" v-on:click="create" value="http://localhost:8080/#/AllProfiles">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import profileService from '../services/profileService'

export default {
    name: 'AddProfile',
    data () {
        return {
            profile: {
                firstName: null,
                lastName: null
            }
        }
    },
    computed:{
        isProfileComplete () {
            return this.profile.firstName && this.profile.lastName;
            //return Object.keys(this.firstName).some(key => this.firstName[key].validated) && Object.keys(this.lastName).some(key => this.lastName[key].valid);
        }
    },

    methods:{
         async create() {
            console.log(this.profile);
            await profileService.addNewProfile(this.profile)
            .then(() => {
                this.$router.push({ name: 'ViewAllProfiles' });
            });
         }
    },
    // props: {
    //     isNotErrorFirstName: errors.first('firstName')
    // }
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
.form {
    position: relative;
    font: 500 1.6em/1.4 Open Sans,Arial,Helvetica,Sans-Serif;
    font-weight: 300;
    /* max-width: 450px; */
    align-content: center;
}

table {
    display: inline-block;
}

.add-profile-form{
    display: inline-block;
}

.btn {
    color: #fff;
    background-color: #562873;
    border-color: #562873;
    font-size: 20px;
    border-radius: 5px;
    font-weight: 600;
    font-family: "Open Sans",Arial,sans-serif;
}

.btn:disabled{
    color: #fff;
    background-color: #8f8f8f;
    border-color: #8f8f8f;
    font-size: 20px;
    border-radius: 5px;
    font-weight: 600;
    font-family: "Open Sans",Arial,sans-serif;
}

a {
  color: #7941b9
}

/* label {
    position: relative;
    opacity: 0.8;
    top: 22px;
    left: 20px;
    color: #ff1e00; */
/* } */

.errorText {
    font-size: 12px;
    align-items: right;
    color: #ff1e00;
}

.inputDiv{
    display: flex;
    padding-bottom: 15px;
}

.inputWrapper {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
}

.text_input{
    width: 200px;
    border: 0;
    padding: 10px 10px 10px 10px;
    background: #eee;
    border: 1px solid #562873;
    border-radius: 5px;
    font-size: 15px;
    font-family: "Open Sans",Arial,sans-serif;
}

.safeBox {
    border: 1px solid #562873;
}

.text_input--error{
    border: 1px solid #ff0000;
}

/* .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  v-show='isProfileComplete'
} */
</style>
