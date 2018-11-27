<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <ul id='allProfilesList'>
        <li
        v-for="profile in profiles"
        :key="profile.profileID"
        >
            {{ profile.profileID }}
            {{profile.firstName}}
            {{profile.lastName}}

        </li>
    </ul> -->

        <table class="profileView">
            <thead>
                <tr>
                    <th>Profile id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tr 
                v-if="profile"
                class="profile-row"
            >
                <td> {{profile.profileID}} </td>
                <td> {{profile.firstName}}</td>
                <td> {{profile.lastName}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
import profileService from '../services/profileService'

export default {
  name: 'ProfileView',
  data () {
    return {
      msg: 'Profile',
      profile: null
    }
  },

  async mounted () {
    const { profileID } = this.$route.query;
    this.profile = (await profileService.getById(profileID)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
th, td {
    padding: 5px;
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
    padding: 5px;
    margin: px;
    border-collapse: collapse;
}
.profile-row{
    border-bottom:  1px solid black;
}

.profile-row:last-child {
    border-bottom: none;
}
/* .profile-row:hover{
    background-color: #562873;
    color: white;
} */
</style>