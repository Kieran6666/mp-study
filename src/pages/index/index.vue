<template>
  <view class="content">
    <h1>count:: {{ userStore.count }}</h1>
    <h1>count:: {{ userStore.doubleCount }}</h1>
    <button @click="userStore.increment()">+1</button>
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <uni-card
      title="nojap" sub-title="hello"
      @click=""
    >      
    </uni-card>

    <up-datetime-picker
            hasInput
            :show="show"
            v-model="value1"
            mode="datetime"
        ></up-datetime-picker>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const show = ref(false)
const value1 = ref(Date.now())

import { userStore } from '@/stores/userStore';
const userStore = userStore();
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
