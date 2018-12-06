<template>
    <div class="hello">
    <h1>{{ msg }}</h1>
        <table class="profileView">
            <thead>
                <tr>
                    <th>Profile id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                <tr>
                    <th><input class="filterTextBox" type="text" v-model="filterID" placeholder="Filter by ID"/></th>
                    <th><input class="filterTextBox" type="text" v-model="filterFirstName" placeholder="Filter by First Name"/></th>
                    <th><input class="filterTextBox" type="text" v-model="filterLastName" placeholder="Filter by Last Name"/></th>
                </tr>
            </thead>
            <tr class="profile-row"
                v-for="profile in filteredProfiles"
                :key="profile.profileID"
                @click="openProfileView(profile.profileID)">
                <td id="profileIDCol" class="profileCol"> {{profile.profileID}}</td>
                <td class="profileCol"> {{profile.firstName}}</td>
                <td class="profileCol"> {{profile.lastName}}</td>
            </tr>
        </table>
  </div>
</template>

<script>
import profileService from '../services/profileService'

export default {
  name: 'Profiles',
  data () {
    return {
      msg: 'All profiles',
      profiles: [],
      filterID: '',
      filterFirstName: '',
      filterLastName: ''
    }
  },

  async mounted () {
    this.profiles = (await profileService.getAll()).data
    window.cmp = this
  },
  methods: {
    openProfileView (profileID) {
        this.$router.push({ name: 'ProfileView', query: { profileID } })
    }
  },
  computed: {
    filteredProfiles: function () {
        return this.profiles.filter((profile) => {
            return profile.profileID.match(this.filterID) &&
                profile.firstName.toLowerCase().match(this.filterFirstName.toLowerCase()) &&
                profile.lastName.toLowerCase().match(this.filterLastName.toLowerCase())
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

th {
    width: 200px;
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
    table-layout: fixed;
    padding: 5px;
    margin: 0 auto;
    border-collapse: collapse;
}
.profile-row{
    border-bottom:  1px solid black;
    cursor: pointer;
}
.filterTextBox{
    width: 80%;
}
.profile-row:last-child {
    border-bottom: none;
}
.profile-row:hover{
    background-color: #562873;
    color: white;
}
.profileCol{
    width: 200px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
