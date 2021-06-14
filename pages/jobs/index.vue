<template>
  <main>
    <div class="ly_fv bl_search">
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
      <div class="ly_sideCont">
        <div class="bl_sideBar">
          <div class="bl_isFulltime">
            <input id="fulltime" type="checkbox" name="fulltime" />
            <label for="fulltime">FullTime</label>
          </div>
          <div class="bl_location">
            <h3 class="bl_sideBar_ttl">LOCATION</h3>
            <input
              id="location"
              type="text"
              name="location"
              placeholder="City, state, zip code or country"
              class="bl_location_search"
            />
            <div class="bl_location_radio_unit">
              <div class="bl_location_radio">
                <input id="london" type="radio" name="london" />
                <label for="london">London</label>
              </div>
              <div class="bl_location_radio">
                <input id="amsterdam" type="radio" name="amsterdam" />
                <label for="amsterdam">Amsterdam</label>
              </div>
              <div class="bl_location_radio">
                <input id="newyork" type="radio" name="newyork" />
                <label for="newyork">New York</label>
              </div>
              <div class="bl_location_radio">
                <input id="berlin" type="radio" name="berlin" />
                <label for="berlin">Berlin</label>
              </div>
            </div>
            <!-- ./ bl_location_radio_unit -->
          </div>
          <!-- ./ bl_location -->
        </div>
        <!-- ./ bl_sideBar -->
      </div>
      <!-- ./ ly_sideCont -->
      <div class="ly_mainCont">
        <div class="bl_card_unit">
          <div class="bl_card">
            <div class="bl_card_img">
              <img src="" alt="" />
            </div>
            <div class="bl_card_cont">
              <h4 class="bl_card_companyName">Lev</h4>
              <h4 class="bl_card_typeOfWork">Front-End Software Engineer</h4>
              <div class="bl_card_subInfo">
                <div class="bl_card_subInfo_left">
                  <p class="bl_card_tag">FullTime</p>
                </div>
                <div class="bl_card_subInfo_right">
                  <p class="bl_card_address">New York</p>
                  <p class="bl_card_updatedAt">5 days ago</p>
                </div>
              </div>
            </div>
          </div>
          <!-- ./ bl_card -->
        </div>
        <!-- ./ bl_card_unit -->
      </div>
      <!-- ./ ly_mainCont -->
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
* layouts
*/
.ly_container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2.625rem;
  display: flex;
  justify-content: space-between;
}
.ly_sideCont {
  width: 31.5%;
  .bl_sideBar {
    .bl_isFulltime {
      margin-bottom: 2rem;
    }
  }
  .bl_location {
    .bl_location_search {
      margin: 10px 0 24px 0;
    }

    .bl_location_radio {
      margin: 10px 0;
    }
  }
}
.ly_mainCont {
  width: 66%;
}
.ly_fv {
  margin-bottom: 2.65rem;
}

/*
* block
*/

// search
.bl_search {
  background-image: url('~@/assets/backgroundImg.png');
  background-size: cover;
  height: 138px;
  position: relative;
  .bl_search_form {
    background-color: #fff;
    padding: 0.3rem 0.1rem;
    width: 70%;
    .bl_search_input {
      display: inline-block;
      border: none;
      width: 79%;
      line-height: 44px;
      padding-left: 0.5rem;
      &::placeholder {
        color: #b9bdcf;
      }
    }
    .bl_search_btn {
      width: 20.3%;
    }
  }
}

// sidebar
.bl_sideBar {
  .bl_sideBar_ttl {
    font-size: 1rem;
    color: #b9bdcf;
    line-height: 1.5;
  }
}

// isFulltime
.bl_isFulltime {
  padding-left: 0.8rem;
  font-weight: 500;
}
// location
.bl_location {
  .bl_location_search {
    display: block;
    width: 100%;
    background: #ffffff;
    line-height: 2.5rem;
    padding: 0 0 0 0.5rem;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    &::placeholder {
      color: #b9bdcf;
    }
  }
  .bl_location_radio_unit {
    padding-left: 0.8rem;
  }
  .bl_location_radio {
    font-weight: 500;
  }
}
// card
.bl_card_unit {
}
.bl_card {
  background-color: #fff;
  height: 114px;
  padding: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  .bl_card_img {
    width: 90px;
    height: 90px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .bl_card_cont {
    width: calc(100% - 90px);
    padding-left: 16px;
  }
  .bl_card_subInfo {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .bl_card_subInfo_left {
    }
    .bl_card_subInfo_right {
      display: flex;
    }
  }
  .bl_card_companyName {
    font-size: 0.75rem;
  }
  .bl_card_typeOfWork {
    font-weight: normal;
  }
  .bl_card_tag {
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid #334680;
    padding: 0.1rem 0.35rem;
    border-radius: 4px;
  }
  .bl_card_address {
  }
  .bl_card_updatedAt {
  }
}
</style>
