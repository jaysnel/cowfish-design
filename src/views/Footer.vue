<template>
  <div class="footer">
      <div class="social-section">
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
      <span class="tradmark-title">2020 The Cowfish Sushi Burger Bar&reg; | <a href="mailto:feedback@thecowfish.com" class="feedback-link">feedback@thecowfish.com</a></span>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
      return {
      }
    }
}
</script>

<style scoped>
.footer {
    background: #000;
    color: #fff;
    margin: 0;
    padding: 0;
}

.tradmark-title {
  font-size: 1rem;
}

.social-section a {
  font-size: 1.5rem;
  margin: 0 20px;
  color: #fff;
}

.feedback-link {
  color: var(--main-yellow);
}
</style>