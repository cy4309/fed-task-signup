<script setup></script>

<template>
  <div class="card">
    <button class="btn btn--return">
      <router-link :to="{ name: 'home' }">← Back</router-link>
    </button>
    <main>
      <div class="card__content">
        <h3 class="card__title">Start from free</h3>
        <h2 class="card__title--important">Create an account</h2>
        <div class="card__btn">
          <button class="btn btn--google">Google</button>
          <button class="btn btn--fb">Facebook</button>
        </div>
      </div>
      <form @submit.prevent>
        <fieldset>
          <div class="form__title">
            <legend>Or use your email for registration</legend>
            <div class="form__line"></div>
          </div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <div class="form__validation">
            <div class="form__validation--hint">
              <img src="" alt="123" />
              <p>8 Characters min</p>
            </div>
            <div class="form__validation--hint">
              <img src="" alt="456" />
              <p>One number</p>
            </div>
          </div>
          <div class="form__submit">
            <input type="checkbox" id="agree" />
            <label for="agree">
              By creating account, you agree to accept our Privacy Policy Terms of Service and
              Notification settings.
            </label>
            <button type="submit" class="btn btn--submit">Create an Free Account!</button>
            <p class="form__submit--link">
              Already have an account?
              <router-link to="/login">Log in</router-link>
            </p>
          </div>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<style scoped>
.card {
  width: 610px;
  background-color: #fff;
  border: 1px solid black;
}
fieldset {
  border: none;
  padding: 0;
}
</style>
