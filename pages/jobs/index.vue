<template>
  <main>
    <div class="bl_search">
      <div class="bl_search_form hp__position_center">
        <input
          type="text"
          class="bl_search_input"
          placeholder="Title, companies, expertise or benefits"
        />
        <button class="el_btn el_btn__blue bl_search_btn">search</button>
      </div>
    </div>
    <div class="ly_container">
      <div class="ly_sideCont"></div>
      <div class="ly_mainCont"></div>
    </div>
  </main>
</template>
<script>
export default {}
</script>
<style lang="scss">
/*
* helper
*/
.hp__position_center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/*
* element
*/
.el_btn {
  width: 146px;
  height: 47px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  &__blue {
    color: #fff;
    background: #1e86ff;
  }
}

/*
* style
*/
.ly_container {
  margin-top: 2.625rem;
  display: flex;
}
.ly_sideCont {
}
.ly_mainCont {
}
.bl_search {
  background-image: url('~@/assets/backgroundImg.png');
  background-size: cover;
  height: 138px;
  position: relative;
}
.bl_search_form {
  background-color: #fff;
  padding: 0.3rem 0.1rem;
  width: 70%;
  .bl_search_input {
    display: inline-block;
    border: none;
    width: 79%;
    line-height: 44px;
  }
  .bl_search_btn {
    width: 20.3%;
  }
}
</style>
