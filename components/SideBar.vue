<template>
  <div class="bl_sideBar">
    <div class="bl_isFulltime">
      <input id="fulltime" type="checkbox" name="fulltime" />
      <label for="fulltime">FullTime</label>
    </div>
    <div class="bl_location">
      <h3 class="el_sideBar_ttl">LOCATION</h3>
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
</template>

<script>
export default {}
</script>

<style></style>
