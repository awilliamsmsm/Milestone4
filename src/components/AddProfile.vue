<template>
    <div class="form">
        <h1>Create Profile</h1>

        <!-- <p class="error" v-if="errors.length">
            <ul>
                <li v-for="error in errors"> {{ error }}</li>
            </ul>
        </p> -->

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
            <!-- <transition name="fade"> -->
            <button class="btn" :disabled="!isProfileComplete" v-on:click="create" value="http://localhost:8080/#/AllProfiles">Submit</button>
                <!-- <button v-on:click="create">Submit</button> -->
            <!-- </transition> -->
        </form>
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
                lastName: null,
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
.form {
    font: 500 1.6em/1.4 Open Sans,Arial,Helvetica,Sans-Serif;
    font-weight: 300;
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
    /* box-shadow: 0 2px 0 0 #c6cacc; */
    border-radius: 5px;
    font-weight: 600;
    font-family: "Open Sans",Arial,sans-serif;
}

.btn:disabled{
    color: #fff;
    background-color: #8f8f8f;
    border-color: #8f8f8f;
    font-size: 20px;
    /* box-shadow: 0 2px 0 0 #c6cacc; */
    border-radius: 5px;
    font-weight: 600;
    font-family: "Open Sans",Arial,sans-serif;
}

a {
  color: #7941b9
}

/* .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;


  v-show='isProfileComplete'
} */
</style>
