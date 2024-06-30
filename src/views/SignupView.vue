<script setup>
import { reactive } from 'vue'
import BtnReturn from '@/components/BtnReturn.vue'
import BtnBase from '@/components/BtnBase.vue'
// import icons
import IconGoogle from '@/assets/icons/IconGoogle.vue'
import IconFacebook from '@/assets/icons/IconFacebook.vue'
import IconTickInactive from '@/assets/icons/IconTickInactive.vue'
import IconTickActive from '@/assets/icons/IconTickActive.vue'
import IconWarningCircle from '@/assets/icons/IconWarningCircle.vue'
import IconViewInactive from './../assets/icons/IconViewInactive.vue'
import IconViewActive from './../assets/icons/IconViewActive.vue'

// declair
const state = reactive({
  userData: {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  },
  isErrorMsg: false,
  isShowHintMsg: false,
  isPasswordVisible: false,
  // validation
  isPass8characters: false,
  isPass1number: false,
  errorArr: []
})

// to check if the field has error
const hasError = (fieldName) => state.errorArr.includes(fieldName)
const urlOpen = (url) => window.open(url)
const toggleViewIcon = () => {
  state.isPasswordVisible = !state.isPasswordVisible
}

const userSignup = () => {
  // replace all the blanks
  state.userData.firstname = state.userData.firstname.replace(/\s+/g, '')
  state.userData.lastname = state.userData.lastname.replace(/\s+/g, '')
  // regex
  const nameRegex = /^[A-Za-z]+$/ // a-z || A-Z
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  // reset errorArr
  state.errorArr = []
  // check if no null
  for (const key of Object.keys(state.userData)) {
    if (!state.userData[key]) state.errorArr.push(key)
  }
  for (const key of Object.keys(state.userData)) {
    switch (key) {
      case 'firstname':
      case 'lastname': {
        const isNameValid = nameRegex.test(state.userData[key])
        state.isErrorMsg = !isNameValid
        if (!isNameValid) {
          state.errorArr.push(key)
        }
        break
      }
      case 'email': {
        const isEmailValid = emailRegex.test(state.userData.email)
        state.isErrorMsg = !isEmailValid
        if (!isEmailValid) {
          state.errorArr.push(key)
        }
        break
      }
      case 'password': {
        // check password length: at least 8 characters
        const isPasswordLengthRegex = state.userData.password.length >= 8
        state.isPass8characters = isPasswordLengthRegex

        // regex for password digits: at least 1 number
        const isPasswordDigitRegex = /\d/.test(state.userData.password)
        state.isPass1number = isPasswordDigitRegex

        state.isErrorMsg = !isPasswordLengthRegex || !isPasswordDigitRegex
        state.isShowHintMsg = true
        if (!isPasswordLengthRegex || !isPasswordDigitRegex) {
          state.errorArr.push(key)
        }
        break
      }
    }
  }
  state.isErrorMsg = state.errorArr.length > 0
  state.isShowHintMsg = true
}
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
          <div class="card__notification" v-if="state.isErrorMsg == true">
            <IconWarningCircle class="icon" />
            <p>Please complete all the required fields to proceed.</p>
          </div>
          <div class="card__btn">
            <BtnBase
              label="Sign up with Google"
              :icon="IconGoogle"
              class="btn--google"
              @click="urlOpen('http://www.google.com')"
            />
            <BtnBase
              label="Sign up with Facebook"
              :icon="IconFacebook"
              class="btn--fb"
              @click="urlOpen('http://www.facebook.com')"
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
              <input
                id="firstname"
                type="text"
                placeholder="First Name"
                v-model="state.userData.firstname"
                :class="{ error: hasError('firstname') }"
              />
              <input
                id="lastname"
                type="text"
                placeholder="Last Name"
                v-model="state.userData.lastname"
                :class="{ error: hasError('lastname') }"
              />
              <input
                id="emailaddress"
                type="email"
                placeholder="E-mail"
                v-model="state.userData.email"
                :class="{ error: hasError('email') }"
              />
              <div class="form__input--password">
                <input
                  id="password"
                  placeholder="Password"
                  v-model="state.userData.password"
                  :type="state.isPasswordVisible ? 'text' : 'password'"
                  :class="{ error: hasError('password') }"
                />
                <IconViewActive
                  class="checkeye"
                  v-if="state.isPasswordVisible"
                  @click="toggleViewIcon"
                />
                <IconViewInactive class="checkeye" v-else @click="toggleViewIcon" />
              </div>
            </div>
            <div class="form__validation" v-if="state.isShowHintMsg">
              <div class="form__validation--hint">
                <IconTickActive class="icon" v-if="state.isPass8characters" />
                <IconTickInactive v-else />
                <p>8 Characters min</p>
              </div>
              <div class="form__validation--hint">
                <IconTickActive class="icon" v-if="state.isPass1number" />
                <IconTickInactive v-else />
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
              <button type="submit" class="btn btn--submit" @click="userSignup">
                Create an Free Account!
              </button>
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
input[type='email'] {
  width: 400px;
}
input.error {
  border: 1px solid red;
}
#password {
  width: 400px;
}
.form__input--password {
  position: relative;
}
.checkeye {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-70%);
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
