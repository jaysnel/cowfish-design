<template>
  <div class="paper-bg text-left">
      <div class="contact-body">
          <h1 class="text-center">Give Us A Shout!</h1>
          <b-form>
      <b-form-group
        id="contact-name-field"
        label="Name"
        label-for="Name"
      >
        <b-form-input
          id="name-field"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="contact-email-field" label="Email" label-for="Email">
        <b-form-input
          type="email"
          id="email-field"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="contact-location-field" label="Location" label-for="Location">
        <b-form-input
          id="location-field"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="contact-phone-field" label="Phone" label-for="Phone">
        <b-form-input
          id="phone-field"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="contact-questions-field" label="Questions/Comments">
        <b-form-textarea
          id="questions-field"
          type="text"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <br>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media(min-width: 768px) {
    .contact-body {
        width: 800px;
        margin: auto;
    }
}

@media(max-width: 768px) {
    .contact-body {
        padding: 10px;
    }
}
</style>