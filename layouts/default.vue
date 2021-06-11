<template>
  <div class="ly_page_inner">
    <header class="bl_header">
      <h1 class="bl_header_ttl">
        <a href="/jobs">GitHub <span>Jobs</span></a>
      </h1>
    </header>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Poppins', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
  color: #000;
}
input:focus {
  outline: none;
}
body {
  background-color: #f6f7fb;
  box-sizing: border-box;
}
.ly_page_inner {
  max-width: 1200px;
  margin: 0 auto;
}

.bl_header {
  padding: 2rem 0;
  &_ttl {
    font-weight: 700;
    color: #282538;
    span {
      font-weight: 400;
    }
  }
}
</style>
