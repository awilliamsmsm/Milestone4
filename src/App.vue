<template>
  <div id="app">
    <nav class="pageHeader">
      <a href="http://localhost:8080/#/" class="pageHeaderLogo">
        <img id="logo" src="./assets/msm-logo-stack-rgb.svg">
      </a>
      <div class="navigation">
        <ul class="navigation-container">
          <a href="http://localhost:8080/#/Profiles" class="navigation-item">
            <li>
              <span class="navigation-bar-text">View All Profiles</span>
            </li>
          </a>
          <a href="http://localhost:8080/#/NewProfile" class="navigation-item">
            <li>
              <span class="navigation-bar-text">Add New Profile</span>
            </li>
          </a>
        </ul>

      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body{
  background-color: white;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Open Sans,Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#logo{
  width: 80px;
  height: auto;
  vertical-align: middle;
  /* position: absolute; */
  top: 9px;
  left: 30px;
}
.pageHeader{
  position: relative;
  display: flex;
  top: 0px;
  left: 0px;
  height: 56px;
  border-bottom: 2px solid #dfe3e5;
  border-top: 2px solid #dfe3e5;;
  background: #ffffff;
  /* top: 0;
  left: 0;
  right: 0;
  position:absolute; */
}
.pageHeaderLogo {
  align-self: center;
  padding: 0 10px;
}
.navigation{
  align-self: center;
  flex-basis: 80%;
  font-size: 13px;
  /* position:absolute; */
  right: 0;
  left: 0;
  flex-basis: 80%;
}
.navigation-container{
  list-style: none;
  display: flex;
  margin: 0 auto;
}
.navigation-item{
  position: relative;
  display: flex;
  flex-direction: column;
  /* border-radius: 5px; */
  justify-content: center;
  height: 56px;
  border-left: 2px solid #dfe3e5;
  /* border-right: 2px solid #dfe3e5; */
  padding-left: 10px;
  padding-right: 10px;
  /* margin-left: 5px;
  margin-left: 5px; */
  z-index: 1;
  font-family: Gotham\ 8r,Arial Black,sans-serif;
  color: #562873;
}
.navigation-item:last-child {
    border-right: 2px solid #dfe3e5;
}
.navigation-item:hover{
  background-color: #562873;
}

.navigation-item:hover .navigation-bar-text {
  color: white;
}

.navigation-item a {
  display: block;
  /* text-decoration: none; */
  z-index: 1000;
}

.navigation-item {
  text-decoration: none;
}
</style>
