<script setup>
import BtnReturn from '@/components/BtnReturn.vue'
import BtnBase from '@/components/BtnBase.vue'

import IconGoogle from '@/assets/icons/IconGoogle.vue'
import IconFacebook from '@/assets/icons/IconFacebook.vue'
import IconTickInactive from '@/assets/icons/IconTickInactive.vue'
import IconTickActive from '@/assets/icons/IconTickActive.vue'
import IconWarningCircle from '@/assets/icons/IconWarningCircle.vue'

const openUrl = (url) => window.open(url)
</script>

<template>
  <div class="wrapper--signup">
    <div class="card">
      <BtnReturn />
      <main>
        <div class="card__content">
          <h3 class="card__title">Start from free</h3>
          <h2 class="card__title--important">Create an account</h2>
          <!-- Notification -->
          <div class="card__notification">
            <IconWarningCircle class="icon" />
            <p>Please complete all the required fields to proceed.</p>
          </div>
          <div class="card__btn">
            <BtnBase
              label="Sign up with Google"
              :icon="IconGoogle"
              class="btn--google"
              @click="openUrl('http://www.google.com')"
            />
            <BtnBase
              label="Sign up with Facebook"
              :icon="IconFacebook"
              class="btn--fb"
              @click="openUrl('http://www.facebook.com')"
            />
          </div>
        </div>
        <form @submit.prevent>
          <fieldset>
            <div class="form__title">
              <legend>Or use your email for registration</legend>
              <div class="form__line"></div>
            </div>
            <div class="form__input">
              <input id="firstname" type="text" placeholder="First Name" />
              <input id="lastname" type="text" placeholder="Last Name" />
              <input id="emailaddress" type="email" placeholder="E-mail" />
              <input id="password" type="password" placeholder="Password" />
            </div>
            <div class="form__validation">
              <div class="form__validation--hint">
                <IconTickInactive class="icon" />
                <p>8 Characters min</p>
              </div>
              <div class="form__validation--hint">
                <IconTickInactive class="icon" />
                <p>One number</p>
              </div>
            </div>
            <div class="form__submit">
              <div class="form__submit--tickbox">
                <input type="checkbox" id="agree" />
                <label for="agree">
                  By creating account, you agree to accept our Privacy Policy Terms of Service and
                  Notification settings.
                </label>
              </div>
              <button type="submit" class="btn btn--submit">Create an Free Account!</button>
              <p class="form__submit--link">
                Already have an account?
                <router-link to="/login" class="btn--return--login">Log in</router-link>
              </p>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
.wrapper--signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1f5ff;
  color: black;
}
/* card */
.card {
  width: 610px;
  /* height: 718px; */
  background-color: #fff;
  padding: 3% 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 0;
}
main {
  width: 401px;
}
.card__title {
  font-weight: 500;
}
.card__title--important {
  font-weight: 700;
  font-size: 30px;
}
.card__notification {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #f5c4c6;
  border: 1px solid #d71920;
  border-radius: 4px;
  justify-content: center;
}
.card__btn {
  display: flex;
  justify-content: space-between;
  margin: 3% 0;
}
.btn--google {
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn--fb {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* form */
fieldset {
  border: none;
  padding: 0;
}
.form__title {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3% 0;
}
.form__line {
  width: 40%;
  height: 50% 50%;
  border-top: 1px solid black;
}
legend {
  font-weight: 500;
}
.form__input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
input {
  background-color: #f1f5ff;
  border-radius: 4px;
  height: 48px;
  border: 0;
  margin-bottom: 3%;
  padding: 3%;
}
input[type='text'] {
  width: 190px;
}
input[type='email'],
input[type='password'] {
  width: 400px;
}
.form__validation {
  display: flex;
}
.form__validation--hint {
  display: flex;
  align-items: center;
  margin-right: 5%;
}
.form__submit--tickbox {
  display: flex;
  margin-top: 3%;
}
input[type='checkbox'] {
  width: 30px;
  margin: 0 2%;
}
.btn--submit {
  width: 100%;
  background-color: #3c71ff;
  color: #fff;
  font-weight: 600;
  margin: 3% 0;
}
.form__submit--link {
  display: flex;
  justify-content: center;
}
.btn--return--login {
  color: #3c71ff;
  font-weight: 700;
}
</style>
