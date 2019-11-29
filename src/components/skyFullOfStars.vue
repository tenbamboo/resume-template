<template>
  <div class="skyContainer">
    <div v-for="item in 400"
      :key="item"
      :class="`star star-${item}`"></div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SkyFullOfStars extends Vue {
  async beforeCreate () {}

  created () {}

  beforeMount () {}

  mounted () {}
}
</script>

<style lang="scss" scoped>
.skyContainer {
  width: 100%;
  height: 750px;
  background-color: #282a3a;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
.star {
  position: absolute;
  width: 1px;
  height: 1px;
  border-radius: 1px;
  background: #ffffff;
}

.star-1 {
  top: 35vh;
  left: 25vw;
  -webkit-animation: 3.2s star -1.2s infinite;
  animation: 3.2s star -1.2s infinite;
}

.star-2 {
  top: 16vh;
  left: 91vw;
  -webkit-animation: 3.9s star -0.1s infinite;
  animation: 3.9s star -0.1s infinite;
}

.star-3 {
  top: 87vh;
  left: 44vw;
  -webkit-animation: 4.6s star -2.8s infinite;
  animation: 4.6s star -2.8s infinite;
}

.star-4 {
  top: 7vh;
  left: 94vw;
  -webkit-animation: 4.9s star -1.3s infinite;
  animation: 4.9s star -1.3s infinite;
}

.star-5 {
  top: 86vh;
  left: 29vw;
  -webkit-animation: 4.7s star -5s infinite;
  animation: 4.7s star -5s infinite;
}

.star-6 {
  top: 100vh;
  left: 18vw;
  -webkit-animation: 5.2s star -1.6s infinite;
  animation: 5.2s star -1.6s infinite;
}

.star-7 {
  top: 14vh;
  left: 94vw;
  -webkit-animation: 3.1s star -3.5s infinite;
  animation: 3.1s star -3.5s infinite;
}

.star-8 {
  top: 61vh;
  left: 81vw;
  -webkit-animation: 3.2s star -2.7s infinite;
  animation: 3.2s star -2.7s infinite;
}

.star-9 {
  top: 79vh;
  left: 34vw;
  -webkit-animation: 4.7s star -4.5s infinite;
  animation: 4.7s star -4.5s infinite;
}

.star-10 {
  top: 58vh;
  left: 40vw;
  -webkit-animation: 3.2s star -3.7s infinite;
  animation: 3.2s star -3.7s infinite;
}

.star-11 {
  top: 42vh;
  left: 52vw;
  -webkit-animation: 4.6s star -2.2s infinite;
  animation: 4.6s star -2.2s infinite;
}

.star-12 {
  top: 70vh;
  left: 96vw;
  -webkit-animation: 3.7s star -3.1s infinite;
  animation: 3.7s star -3.1s infinite;
}

.star-13 {
  top: 95vh;
  left: 46vw;
  -webkit-animation: 5.7s star -3.9s infinite;
  animation: 5.7s star -3.9s infinite;
}

.star-14 {
  top: 32vh;
  left: 82vw;
  -webkit-animation: 5.6s star -0.9s infinite;
  animation: 5.6s star -0.9s infinite;
}

.star-15 {
  top: 11vh;
  left: 54vw;
  -webkit-animation: 4.6s star -2.7s infinite;
  animation: 4.6s star -2.7s infinite;
}

.star-16 {
  top: 41vh;
  left: 68vw;
  -webkit-animation: 5.2s star -1.4s infinite;
  animation: 5.2s star -1.4s infinite;
}

.star-17 {
  top: 14vh;
  left: 49vw;
  -webkit-animation: 3.7s star -2.4s infinite;
  animation: 3.7s star -2.4s infinite;
}

.star-18 {
  top: 16vh;
  left: 4vw;
  -webkit-animation: 5.2s star -4.5s infinite;
  animation: 5.2s star -4.5s infinite;
}

.star-19 {
  top: 83vh;
  left: 85vw;
  -webkit-animation: 4.3s star -4.2s infinite;
  animation: 4.3s star -4.2s infinite;
}

.star-20 {
  top: 84vh;
  left: 63vw;
  -webkit-animation: 3.9s star -4.6s infinite;
  animation: 3.9s star -4.6s infinite;
}

.star-21 {
  top: 1vh;
  left: 1vw;
  -webkit-animation: 6s star -3.1s infinite;
  animation: 6s star -3.1s infinite;
}

.star-22 {
  top: 87vh;
  left: 20vw;
  -webkit-animation: 4.5s star -0.1s infinite;
  animation: 4.5s star -0.1s infinite;
}

.star-23 {
  top: 47vh;
  left: 70vw;
  -webkit-animation: 4.3s star -3.4s infinite;
  animation: 4.3s star -3.4s infinite;
}

.star-24 {
  top: 60vh;
  left: 22vw;
  -webkit-animation: 4.1s star -3.8s infinite;
  animation: 4.1s star -3.8s infinite;
}

.star-25 {
  top: 48vh;
  left: 80vw;
  -webkit-animation: 5.4s star -4.8s infinite;
  animation: 5.4s star -4.8s infinite;
}

.star-26 {
  top: 4vh;
  left: 77vw;
  -webkit-animation: 4.3s star -1.3s infinite;
  animation: 4.3s star -1.3s infinite;
}

.star-27 {
  top: 71vh;
  left: 53vw;
  -webkit-animation: 4.1s star -3.6s infinite;
  animation: 4.1s star -3.6s infinite;
}

.star-28 {
  top: 44vh;
  left: 51vw;
  -webkit-animation: 5.1s star -2s infinite;
  animation: 5.1s star -2s infinite;
}

.star-29 {
  top: 47vh;
  left: 92vw;
  -webkit-animation: 4.3s star -0.6s infinite;
  animation: 4.3s star -0.6s infinite;
}

.star-30 {
  top: 74vh;
  left: 24vw;
  -webkit-animation: 4.1s star -3s infinite;
  animation: 4.1s star -3s infinite;
}

.star-31 {
  top: 84vh;
  left: 23vw;
  -webkit-animation: 5.6s star -4.2s infinite;
  animation: 5.6s star -4.2s infinite;
}

.star-32 {
  top: 30vh;
  left: 5vw;
  -webkit-animation: 5.5s star -1.7s infinite;
  animation: 5.5s star -1.7s infinite;
}

.star-33 {
  top: 33vh;
  left: 63vw;
  -webkit-animation: 3.5s star -4.2s infinite;
  animation: 3.5s star -4.2s infinite;
}

.star-34 {
  top: 3vh;
  left: 42vw;
  -webkit-animation: 4.7s star -4.7s infinite;
  animation: 4.7s star -4.7s infinite;
}

.star-35 {
  top: 56vh;
  left: 39vw;
  -webkit-animation: 5s star -1.1s infinite;
  animation: 5s star -1.1s infinite;
}

.star-36 {
  top: 23vh;
  left: 38vw;
  -webkit-animation: 3.8s star -3.2s infinite;
  animation: 3.8s star -3.2s infinite;
}

.star-37 {
  top: 4vh;
  left: 75vw;
  -webkit-animation: 3.3s star -3.3s infinite;
  animation: 3.3s star -3.3s infinite;
}

.star-38 {
  top: 97vh;
  left: 28vw;
  -webkit-animation: 4.1s star -4.9s infinite;
  animation: 4.1s star -4.9s infinite;
}

.star-39 {
  top: 23vh;
  left: 81vw;
  -webkit-animation: 3.3s star -1.3s infinite;
  animation: 3.3s star -1.3s infinite;
}

.star-40 {
  top: 4vh;
  left: 71vw;
  -webkit-animation: 3.4s star -1.2s infinite;
  animation: 3.4s star -1.2s infinite;
}

.star-41 {
  top: 71vh;
  left: 28vw;
  -webkit-animation: 4.2s star -4.3s infinite;
  animation: 4.2s star -4.3s infinite;
}

.star-42 {
  top: 36vh;
  left: 44vw;
  -webkit-animation: 5.4s star -3.1s infinite;
  animation: 5.4s star -3.1s infinite;
}

.star-43 {
  top: 58vh;
  left: 29vw;
  -webkit-animation: 4.3s star -0.3s infinite;
  animation: 4.3s star -0.3s infinite;
}

.star-44 {
  top: 75vh;
  left: 51vw;
  -webkit-animation: 5.1s star -2.3s infinite;
  animation: 5.1s star -2.3s infinite;
}

.star-45 {
  top: 31vh;
  left: 73vw;
  -webkit-animation: 5.9s star -0.8s infinite;
  animation: 5.9s star -0.8s infinite;
}

.star-46 {
  top: 95vh;
  left: 31vw;
  -webkit-animation: 5.6s star -3.4s infinite;
  animation: 5.6s star -3.4s infinite;
}

.star-47 {
  top: 25vh;
  left: 29vw;
  -webkit-animation: 4s star -2.2s infinite;
  animation: 4s star -2.2s infinite;
}

.star-48 {
  top: 9vh;
  left: 8vw;
  -webkit-animation: 4s star -3.2s infinite;
  animation: 4s star -3.2s infinite;
}

.star-49 {
  top: 90vh;
  left: 44vw;
  -webkit-animation: 3.4s star -3.3s infinite;
  animation: 3.4s star -3.3s infinite;
}

.star-50 {
  top: 77vh;
  left: 83vw;
  -webkit-animation: 5.3s star -5s infinite;
  animation: 5.3s star -5s infinite;
}

.star-51 {
  top: 39vh;
  left: 96vw;
  -webkit-animation: 4.5s star -2.9s infinite;
  animation: 4.5s star -2.9s infinite;
}

.star-52 {
  top: 52vh;
  left: 30vw;
  -webkit-animation: 4.2s star -3.6s infinite;
  animation: 4.2s star -3.6s infinite;
}

.star-53 {
  top: 65vh;
  left: 27vw;
  -webkit-animation: 5.9s star -4.8s infinite;
  animation: 5.9s star -4.8s infinite;
}

.star-54 {
  top: 90vh;
  left: 40vw;
  -webkit-animation: 5.2s star -1.1s infinite;
  animation: 5.2s star -1.1s infinite;
}

.star-55 {
  top: 23vh;
  left: 82vw;
  -webkit-animation: 4.7s star -2.6s infinite;
  animation: 4.7s star -2.6s infinite;
}

.star-56 {
  top: 98vh;
  left: 16vw;
  -webkit-animation: 5.2s star -0.4s infinite;
  animation: 5.2s star -0.4s infinite;
}

.star-57 {
  top: 46vh;
  left: 75vw;
  -webkit-animation: 4.3s star -1.2s infinite;
  animation: 4.3s star -1.2s infinite;
}

.star-58 {
  top: 48vh;
  left: 21vw;
  -webkit-animation: 4s star -0.1s infinite;
  animation: 4s star -0.1s infinite;
}

.star-59 {
  top: 86vh;
  left: 64vw;
  -webkit-animation: 3.9s star -0.2s infinite;
  animation: 3.9s star -0.2s infinite;
}

.star-60 {
  top: 93vh;
  left: 65vw;
  -webkit-animation: 3.9s star -1.6s infinite;
  animation: 3.9s star -1.6s infinite;
}

.star-61 {
  top: 4vh;
  left: 84vw;
  -webkit-animation: 5.4s star -5s infinite;
  animation: 5.4s star -5s infinite;
}

.star-62 {
  top: 86vh;
  left: 77vw;
  -webkit-animation: 3.1s star -0.7s infinite;
  animation: 3.1s star -0.7s infinite;
}

.star-63 {
  top: 54vh;
  left: 59vw;
  -webkit-animation: 3.2s star -3.2s infinite;
  animation: 3.2s star -3.2s infinite;
}

.star-64 {
  top: 26vh;
  left: 24vw;
  -webkit-animation: 3.8s star -0.9s infinite;
  animation: 3.8s star -0.9s infinite;
}

.star-65 {
  top: 58vh;
  left: 61vw;
  -webkit-animation: 3.4s star -4.2s infinite;
  animation: 3.4s star -4.2s infinite;
}

.star-66 {
  top: 71vh;
  left: 63vw;
  -webkit-animation: 5.6s star -0.9s infinite;
  animation: 5.6s star -0.9s infinite;
}

.star-67 {
  top: 80vh;
  left: 9vw;
  -webkit-animation: 3.8s star -0.6s infinite;
  animation: 3.8s star -0.6s infinite;
}

.star-68 {
  top: 86vh;
  left: 24vw;
  -webkit-animation: 3.5s star -4.6s infinite;
  animation: 3.5s star -4.6s infinite;
}

.star-69 {
  top: 56vh;
  left: 14vw;
  -webkit-animation: 3.7s star -3.5s infinite;
  animation: 3.7s star -3.5s infinite;
}

.star-70 {
  top: 91vh;
  left: 13vw;
  -webkit-animation: 5.8s star -3.3s infinite;
  animation: 5.8s star -3.3s infinite;
}

.star-71 {
  top: 89vh;
  left: 92vw;
  -webkit-animation: 3.2s star -0.7s infinite;
  animation: 3.2s star -0.7s infinite;
}

.star-72 {
  top: 41vh;
  left: 98vw;
  -webkit-animation: 4.9s star -2.2s infinite;
  animation: 4.9s star -2.2s infinite;
}

.star-73 {
  top: 73vh;
  left: 29vw;
  -webkit-animation: 5.6s star -2.9s infinite;
  animation: 5.6s star -2.9s infinite;
}

.star-74 {
  top: 69vh;
  left: 3vw;
  -webkit-animation: 3.3s star -3.8s infinite;
  animation: 3.3s star -3.8s infinite;
}

.star-75 {
  top: 11vh;
  left: 55vw;
  -webkit-animation: 3.8s star -5s infinite;
  animation: 3.8s star -5s infinite;
}

.star-76 {
  top: 19vh;
  left: 4vw;
  -webkit-animation: 4.5s star -2.7s infinite;
  animation: 4.5s star -2.7s infinite;
}

.star-77 {
  top: 79vh;
  left: 55vw;
  -webkit-animation: 5.1s star -3.6s infinite;
  animation: 5.1s star -3.6s infinite;
}

.star-78 {
  top: 42vh;
  left: 23vw;
  -webkit-animation: 3.4s star -1.4s infinite;
  animation: 3.4s star -1.4s infinite;
}

.star-79 {
  top: 89vh;
  left: 62vw;
  -webkit-animation: 4.5s star -0.2s infinite;
  animation: 4.5s star -0.2s infinite;
}

.star-80 {
  top: 67vh;
  left: 38vw;
  -webkit-animation: 4.8s star -0.8s infinite;
  animation: 4.8s star -0.8s infinite;
}

.star-81 {
  top: 88vh;
  left: 50vw;
  -webkit-animation: 4.9s star -4.5s infinite;
  animation: 4.9s star -4.5s infinite;
}

.star-82 {
  top: 72vh;
  left: 66vw;
  -webkit-animation: 4.5s star -2.9s infinite;
  animation: 4.5s star -2.9s infinite;
}

.star-83 {
  top: 76vh;
  left: 100vw;
  -webkit-animation: 5.6s star -0.3s infinite;
  animation: 5.6s star -0.3s infinite;
}

.star-84 {
  top: 82vh;
  left: 9vw;
  -webkit-animation: 4.9s star -4.1s infinite;
  animation: 4.9s star -4.1s infinite;
}

.star-85 {
  top: 47vh;
  left: 28vw;
  -webkit-animation: 5.1s star -1.5s infinite;
  animation: 5.1s star -1.5s infinite;
}

.star-86 {
  top: 3vh;
  left: 72vw;
  -webkit-animation: 4.4s star -4.2s infinite;
  animation: 4.4s star -4.2s infinite;
}

.star-87 {
  top: 98vh;
  left: 15vw;
  -webkit-animation: 3.1s star -2.6s infinite;
  animation: 3.1s star -2.6s infinite;
}

.star-88 {
  top: 42vh;
  left: 64vw;
  -webkit-animation: 3.8s star -1.4s infinite;
  animation: 3.8s star -1.4s infinite;
}

.star-89 {
  top: 40vh;
  left: 75vw;
  -webkit-animation: 3.1s star -0.2s infinite;
  animation: 3.1s star -0.2s infinite;
}

.star-90 {
  top: 34vh;
  left: 9vw;
  -webkit-animation: 3.6s star -1.7s infinite;
  animation: 3.6s star -1.7s infinite;
}

.star-91 {
  top: 76vh;
  left: 11vw;
  -webkit-animation: 4.5s star -3.9s infinite;
  animation: 4.5s star -3.9s infinite;
}

.star-92 {
  top: 47vh;
  left: 48vw;
  -webkit-animation: 5.6s star -2.2s infinite;
  animation: 5.6s star -2.2s infinite;
}

.star-93 {
  top: 35vh;
  left: 83vw;
  -webkit-animation: 5.8s star -0.2s infinite;
  animation: 5.8s star -0.2s infinite;
}

.star-94 {
  top: 81vh;
  left: 89vw;
  -webkit-animation: 3.1s star -1.6s infinite;
  animation: 3.1s star -1.6s infinite;
}

.star-95 {
  top: 30vh;
  left: 10vw;
  -webkit-animation: 5.9s star -2.6s infinite;
  animation: 5.9s star -2.6s infinite;
}

.star-96 {
  top: 75vh;
  left: 53vw;
  -webkit-animation: 4.1s star -2.1s infinite;
  animation: 4.1s star -2.1s infinite;
}

.star-97 {
  top: 17vh;
  left: 44vw;
  -webkit-animation: 3.1s star -1.8s infinite;
  animation: 3.1s star -1.8s infinite;
}

.star-98 {
  top: 97vh;
  left: 64vw;
  -webkit-animation: 3.2s star -2.6s infinite;
  animation: 3.2s star -2.6s infinite;
}

.star-99 {
  top: 97vh;
  left: 100vw;
  -webkit-animation: 4.6s star -5s infinite;
  animation: 4.6s star -5s infinite;
}

.star-100 {
  top: 41vh;
  left: 79vw;
  -webkit-animation: 5.5s star -4.4s infinite;
  animation: 5.5s star -4.4s infinite;
}

.star-101 {
  top: 48vh;
  left: 10vw;
  -webkit-animation: 3.5s star -1.1s infinite;
  animation: 3.5s star -1.1s infinite;
}

.star-102 {
  top: 43vh;
  left: 91vw;
  -webkit-animation: 4.1s star -2.3s infinite;
  animation: 4.1s star -2.3s infinite;
}

.star-103 {
  top: 72vh;
  left: 61vw;
  -webkit-animation: 5.5s star -0.6s infinite;
  animation: 5.5s star -0.6s infinite;
}

.star-104 {
  top: 80vh;
  left: 60vw;
  -webkit-animation: 3.3s star -4.4s infinite;
  animation: 3.3s star -4.4s infinite;
}

.star-105 {
  top: 57vh;
  left: 83vw;
  -webkit-animation: 4.5s star -4.1s infinite;
  animation: 4.5s star -4.1s infinite;
}

.star-106 {
  top: 22vh;
  left: 85vw;
  -webkit-animation: 4.8s star -1.6s infinite;
  animation: 4.8s star -1.6s infinite;
}

.star-107 {
  top: 40vh;
  left: 11vw;
  -webkit-animation: 5.9s star -1.4s infinite;
  animation: 5.9s star -1.4s infinite;
}

.star-108 {
  top: 25vh;
  left: 2vw;
  -webkit-animation: 5.9s star -4.2s infinite;
  animation: 5.9s star -4.2s infinite;
}

.star-109 {
  top: 86vh;
  left: 65vw;
  -webkit-animation: 5.2s star -2.1s infinite;
  animation: 5.2s star -2.1s infinite;
}

.star-110 {
  top: 91vh;
  left: 41vw;
  -webkit-animation: 3.9s star -1s infinite;
  animation: 3.9s star -1s infinite;
}

.star-111 {
  top: 35vh;
  left: 34vw;
  -webkit-animation: 4.4s star -2s infinite;
  animation: 4.4s star -2s infinite;
}

.star-112 {
  top: 23vh;
  left: 68vw;
  -webkit-animation: 3.1s star -0.5s infinite;
  animation: 3.1s star -0.5s infinite;
}

.star-113 {
  top: 89vh;
  left: 10vw;
  -webkit-animation: 3.6s star -4.3s infinite;
  animation: 3.6s star -4.3s infinite;
}

.star-114 {
  top: 90vh;
  left: 91vw;
  -webkit-animation: 3.6s star -4.3s infinite;
  animation: 3.6s star -4.3s infinite;
}

.star-115 {
  top: 79vh;
  left: 67vw;
  -webkit-animation: 5.1s star -1.9s infinite;
  animation: 5.1s star -1.9s infinite;
}

.star-116 {
  top: 24vh;
  left: 65vw;
  -webkit-animation: 6s star -0.1s infinite;
  animation: 6s star -0.1s infinite;
}

.star-117 {
  top: 64vh;
  left: 87vw;
  -webkit-animation: 4.8s star -4.6s infinite;
  animation: 4.8s star -4.6s infinite;
}

.star-118 {
  top: 40vh;
  left: 26vw;
  -webkit-animation: 4.7s star -2.8s infinite;
  animation: 4.7s star -2.8s infinite;
}

.star-119 {
  top: 43vh;
  left: 10vw;
  -webkit-animation: 3.3s star -4.7s infinite;
  animation: 3.3s star -4.7s infinite;
}

.star-120 {
  top: 9vh;
  left: 82vw;
  -webkit-animation: 4.8s star -3.8s infinite;
  animation: 4.8s star -3.8s infinite;
}

.star-121 {
  top: 90vh;
  left: 18vw;
  -webkit-animation: 4.1s star -4.9s infinite;
  animation: 4.1s star -4.9s infinite;
}

.star-122 {
  top: 91vh;
  left: 4vw;
  -webkit-animation: 3.9s star -3.3s infinite;
  animation: 3.9s star -3.3s infinite;
}

.star-123 {
  top: 33vh;
  left: 75vw;
  -webkit-animation: 3.4s star -0.3s infinite;
  animation: 3.4s star -0.3s infinite;
}

.star-124 {
  top: 5vh;
  left: 96vw;
  -webkit-animation: 3.1s star -3.1s infinite;
  animation: 3.1s star -3.1s infinite;
}

.star-125 {
  top: 63vh;
  left: 85vw;
  -webkit-animation: 4.9s star -0.4s infinite;
  animation: 4.9s star -0.4s infinite;
}

.star-126 {
  top: 51vh;
  left: 50vw;
  -webkit-animation: 5.8s star -3.3s infinite;
  animation: 5.8s star -3.3s infinite;
}

.star-127 {
  top: 18vh;
  left: 96vw;
  -webkit-animation: 4.4s star -4.6s infinite;
  animation: 4.4s star -4.6s infinite;
}

.star-128 {
  top: 14vh;
  left: 19vw;
  -webkit-animation: 4s star -1.4s infinite;
  animation: 4s star -1.4s infinite;
}

.star-129 {
  top: 4vh;
  left: 94vw;
  -webkit-animation: 5s star -3.5s infinite;
  animation: 5s star -3.5s infinite;
}

.star-130 {
  top: 67vh;
  left: 36vw;
  -webkit-animation: 5.6s star -2.4s infinite;
  animation: 5.6s star -2.4s infinite;
}

.star-131 {
  top: 34vh;
  left: 26vw;
  -webkit-animation: 5.7s star -0.5s infinite;
  animation: 5.7s star -0.5s infinite;
}

.star-132 {
  top: 86vh;
  left: 14vw;
  -webkit-animation: 5s star -1.7s infinite;
  animation: 5s star -1.7s infinite;
}

.star-133 {
  top: 48vh;
  left: 22vw;
  -webkit-animation: 3.1s star -4.9s infinite;
  animation: 3.1s star -4.9s infinite;
}

.star-134 {
  top: 81vh;
  left: 21vw;
  -webkit-animation: 4.8s star -4.3s infinite;
  animation: 4.8s star -4.3s infinite;
}

.star-135 {
  top: 80vh;
  left: 26vw;
  -webkit-animation: 4.3s star -4.5s infinite;
  animation: 4.3s star -4.5s infinite;
}

.star-136 {
  top: 58vh;
  left: 64vw;
  -webkit-animation: 4.3s star -1.3s infinite;
  animation: 4.3s star -1.3s infinite;
}

.star-137 {
  top: 43vh;
  left: 30vw;
  -webkit-animation: 4.9s star -1.8s infinite;
  animation: 4.9s star -1.8s infinite;
}

.star-138 {
  top: 74vh;
  left: 76vw;
  -webkit-animation: 5.1s star -4.5s infinite;
  animation: 5.1s star -4.5s infinite;
}

.star-139 {
  top: 25vh;
  left: 81vw;
  -webkit-animation: 3.6s star -0.8s infinite;
  animation: 3.6s star -0.8s infinite;
}

.star-140 {
  top: 19vh;
  left: 57vw;
  -webkit-animation: 4.6s star -2.9s infinite;
  animation: 4.6s star -2.9s infinite;
}

.star-141 {
  top: 27vh;
  left: 37vw;
  -webkit-animation: 3.9s star -3.4s infinite;
  animation: 3.9s star -3.4s infinite;
}

.star-142 {
  top: 83vh;
  left: 21vw;
  -webkit-animation: 5.3s star -4.4s infinite;
  animation: 5.3s star -4.4s infinite;
}

.star-143 {
  top: 28vh;
  left: 31vw;
  -webkit-animation: 4s star -3.8s infinite;
  animation: 4s star -3.8s infinite;
}

.star-144 {
  top: 85vh;
  left: 81vw;
  -webkit-animation: 4.7s star -1.3s infinite;
  animation: 4.7s star -1.3s infinite;
}

.star-145 {
  top: 62vh;
  left: 16vw;
  -webkit-animation: 5.4s star -0.2s infinite;
  animation: 5.4s star -0.2s infinite;
}

.star-146 {
  top: 94vh;
  left: 4vw;
  -webkit-animation: 5.8s star -3s infinite;
  animation: 5.8s star -3s infinite;
}

.star-147 {
  top: 78vh;
  left: 10vw;
  -webkit-animation: 3.3s star -4.2s infinite;
  animation: 3.3s star -4.2s infinite;
}

.star-148 {
  top: 38vh;
  left: 2vw;
  -webkit-animation: 4.1s star -3.8s infinite;
  animation: 4.1s star -3.8s infinite;
}

.star-149 {
  top: 19vh;
  left: 50vw;
  -webkit-animation: 4.7s star -0.5s infinite;
  animation: 4.7s star -0.5s infinite;
}

.star-150 {
  top: 74vh;
  left: 33vw;
  -webkit-animation: 4.5s star -2.5s infinite;
  animation: 4.5s star -2.5s infinite;
}

.star-151 {
  top: 55vh;
  left: 65vw;
  -webkit-animation: 4.6s star -4.4s infinite;
  animation: 4.6s star -4.4s infinite;
}

.star-152 {
  top: 8vh;
  left: 45vw;
  -webkit-animation: 5.4s star -3s infinite;
  animation: 5.4s star -3s infinite;
}

.star-153 {
  top: 31vh;
  left: 75vw;
  -webkit-animation: 5.7s star -4.3s infinite;
  animation: 5.7s star -4.3s infinite;
}

.star-154 {
  top: 58vh;
  left: 19vw;
  -webkit-animation: 4.3s star -0.8s infinite;
  animation: 4.3s star -0.8s infinite;
}

.star-155 {
  top: 92vh;
  left: 53vw;
  -webkit-animation: 3.9s star -2.5s infinite;
  animation: 3.9s star -2.5s infinite;
}

.star-156 {
  top: 62vh;
  left: 96vw;
  -webkit-animation: 5.3s star -4.9s infinite;
  animation: 5.3s star -4.9s infinite;
}

.star-157 {
  top: 40vh;
  left: 23vw;
  -webkit-animation: 5.6s star -4.3s infinite;
  animation: 5.6s star -4.3s infinite;
}

.star-158 {
  top: 47vh;
  left: 89vw;
  -webkit-animation: 3.5s star -1s infinite;
  animation: 3.5s star -1s infinite;
}

.star-159 {
  top: 14vh;
  left: 71vw;
  -webkit-animation: 3.3s star -1.4s infinite;
  animation: 3.3s star -1.4s infinite;
}

.star-160 {
  top: 57vh;
  left: 30vw;
  -webkit-animation: 3.6s star -3.8s infinite;
  animation: 3.6s star -3.8s infinite;
}

.star-161 {
  top: 35vh;
  left: 90vw;
  -webkit-animation: 5.9s star -0.5s infinite;
  animation: 5.9s star -0.5s infinite;
}

.star-162 {
  top: 81vh;
  left: 52vw;
  -webkit-animation: 4.3s star -2.6s infinite;
  animation: 4.3s star -2.6s infinite;
}

.star-163 {
  top: 85vh;
  left: 46vw;
  -webkit-animation: 4.4s star -4.3s infinite;
  animation: 4.4s star -4.3s infinite;
}

.star-164 {
  top: 96vh;
  left: 83vw;
  -webkit-animation: 3.8s star -4.7s infinite;
  animation: 3.8s star -4.7s infinite;
}

.star-165 {
  top: 37vh;
  left: 39vw;
  -webkit-animation: 4.8s star -3.9s infinite;
  animation: 4.8s star -3.9s infinite;
}

.star-166 {
  top: 71vh;
  left: 67vw;
  -webkit-animation: 4.1s star -1.4s infinite;
  animation: 4.1s star -1.4s infinite;
}

.star-167 {
  top: 58vh;
  left: 90vw;
  -webkit-animation: 5.8s star -5s infinite;
  animation: 5.8s star -5s infinite;
}

.star-168 {
  top: 99vh;
  left: 22vw;
  -webkit-animation: 4.2s star -1.9s infinite;
  animation: 4.2s star -1.9s infinite;
}

.star-169 {
  top: 41vh;
  left: 13vw;
  -webkit-animation: 5.2s star -3.2s infinite;
  animation: 5.2s star -3.2s infinite;
}

.star-170 {
  top: 90vh;
  left: 11vw;
  -webkit-animation: 3.5s star -3.6s infinite;
  animation: 3.5s star -3.6s infinite;
}

.star-171 {
  top: 25vh;
  left: 8vw;
  -webkit-animation: 4.2s star -2.5s infinite;
  animation: 4.2s star -2.5s infinite;
}

.star-172 {
  top: 29vh;
  left: 29vw;
  -webkit-animation: 4.8s star -2.9s infinite;
  animation: 4.8s star -2.9s infinite;
}

.star-173 {
  top: 14vh;
  left: 71vw;
  -webkit-animation: 5.5s star -4.6s infinite;
  animation: 5.5s star -4.6s infinite;
}

.star-174 {
  top: 29vh;
  left: 75vw;
  -webkit-animation: 4.2s star -1.7s infinite;
  animation: 4.2s star -1.7s infinite;
}

.star-175 {
  top: 99vh;
  left: 59vw;
  -webkit-animation: 3.1s star -4.4s infinite;
  animation: 3.1s star -4.4s infinite;
}

.star-176 {
  top: 78vh;
  left: 42vw;
  -webkit-animation: 4.9s star -3.6s infinite;
  animation: 4.9s star -3.6s infinite;
}

.star-177 {
  top: 25vh;
  left: 15vw;
  -webkit-animation: 4s star -4.9s infinite;
  animation: 4s star -4.9s infinite;
}

.star-178 {
  top: 9vh;
  left: 82vw;
  -webkit-animation: 3.2s star -4.2s infinite;
  animation: 3.2s star -4.2s infinite;
}

.star-179 {
  top: 5vh;
  left: 68vw;
  -webkit-animation: 4.2s star -0.4s infinite;
  animation: 4.2s star -0.4s infinite;
}

.star-180 {
  top: 98vh;
  left: 71vw;
  -webkit-animation: 4.1s star -1.9s infinite;
  animation: 4.1s star -1.9s infinite;
}

.star-181 {
  top: 7vh;
  left: 100vw;
  -webkit-animation: 5.9s star -3.9s infinite;
  animation: 5.9s star -3.9s infinite;
}

.star-182 {
  top: 45vh;
  left: 26vw;
  -webkit-animation: 3.8s star -1.8s infinite;
  animation: 3.8s star -1.8s infinite;
}

.star-183 {
  top: 66vh;
  left: 65vw;
  -webkit-animation: 3.1s star -3.4s infinite;
  animation: 3.1s star -3.4s infinite;
}

.star-184 {
  top: 74vh;
  left: 33vw;
  -webkit-animation: 4.5s star -2.5s infinite;
  animation: 4.5s star -2.5s infinite;
}

.star-185 {
  top: 8vh;
  left: 43vw;
  -webkit-animation: 5.5s star -0.3s infinite;
  animation: 5.5s star -0.3s infinite;
}

.star-186 {
  top: 56vh;
  left: 97vw;
  -webkit-animation: 4.9s star -1.3s infinite;
  animation: 4.9s star -1.3s infinite;
}

.star-187 {
  top: 19vh;
  left: 91vw;
  -webkit-animation: 5.8s star -4.5s infinite;
  animation: 5.8s star -4.5s infinite;
}

.star-188 {
  top: 22vh;
  left: 18vw;
  -webkit-animation: 5.7s star -2.1s infinite;
  animation: 5.7s star -2.1s infinite;
}

.star-189 {
  top: 72vh;
  left: 54vw;
  -webkit-animation: 3.2s star -3.9s infinite;
  animation: 3.2s star -3.9s infinite;
}

.star-190 {
  top: 83vh;
  left: 28vw;
  -webkit-animation: 4.5s star -4.1s infinite;
  animation: 4.5s star -4.1s infinite;
}

.star-191 {
  top: 5vh;
  left: 88vw;
  -webkit-animation: 4.5s star -1.3s infinite;
  animation: 4.5s star -1.3s infinite;
}

.star-192 {
  top: 80vh;
  left: 24vw;
  -webkit-animation: 4.6s star -0.7s infinite;
  animation: 4.6s star -0.7s infinite;
}

.star-193 {
  top: 40vh;
  left: 34vw;
  -webkit-animation: 3.7s star -0.9s infinite;
  animation: 3.7s star -0.9s infinite;
}

.star-194 {
  top: 70vh;
  left: 7vw;
  -webkit-animation: 5.7s star -4.8s infinite;
  animation: 5.7s star -4.8s infinite;
}

.star-195 {
  top: 40vh;
  left: 17vw;
  -webkit-animation: 4.1s star -3.8s infinite;
  animation: 4.1s star -3.8s infinite;
}

.star-196 {
  top: 18vh;
  left: 85vw;
  -webkit-animation: 3.3s star -4.6s infinite;
  animation: 3.3s star -4.6s infinite;
}

.star-197 {
  top: 22vh;
  left: 32vw;
  -webkit-animation: 4.1s star -0.6s infinite;
  animation: 4.1s star -0.6s infinite;
}

.star-198 {
  top: 89vh;
  left: 64vw;
  -webkit-animation: 5.4s star -4.8s infinite;
  animation: 5.4s star -4.8s infinite;
}

.star-199 {
  top: 17vh;
  left: 66vw;
  -webkit-animation: 3.4s star -3.1s infinite;
  animation: 3.4s star -3.1s infinite;
}

.star-200 {
  top: 14vh;
  left: 84vw;
  -webkit-animation: 4.3s star -1.5s infinite;
  animation: 4.3s star -1.5s infinite;
}

.star-201 {
  top: 81vh;
  left: 91vw;
  -webkit-animation: 3.4s star -4.9s infinite;
  animation: 3.4s star -4.9s infinite;
}

.star-202 {
  top: 41vh;
  left: 25vw;
  -webkit-animation: 5s star -4.1s infinite;
  animation: 5s star -4.1s infinite;
}

.star-203 {
  top: 35vh;
  left: 59vw;
  -webkit-animation: 3.4s star -0.2s infinite;
  animation: 3.4s star -0.2s infinite;
}

.star-204 {
  top: 12vh;
  left: 53vw;
  -webkit-animation: 5s star -3.8s infinite;
  animation: 5s star -3.8s infinite;
}

.star-205 {
  top: 59vh;
  left: 5vw;
  -webkit-animation: 5.1s star -4.2s infinite;
  animation: 5.1s star -4.2s infinite;
}

.star-206 {
  top: 42vh;
  left: 11vw;
  -webkit-animation: 5.9s star -1.4s infinite;
  animation: 5.9s star -1.4s infinite;
}

.star-207 {
  top: 92vh;
  left: 48vw;
  -webkit-animation: 4.4s star -1.2s infinite;
  animation: 4.4s star -1.2s infinite;
}

.star-208 {
  top: 65vh;
  left: 68vw;
  -webkit-animation: 3.4s star -4.9s infinite;
  animation: 3.4s star -4.9s infinite;
}

.star-209 {
  top: 80vh;
  left: 74vw;
  -webkit-animation: 5.3s star -0.4s infinite;
  animation: 5.3s star -0.4s infinite;
}

.star-210 {
  top: 86vh;
  left: 57vw;
  -webkit-animation: 4.6s star -4.3s infinite;
  animation: 4.6s star -4.3s infinite;
}

.star-211 {
  top: 19vh;
  left: 45vw;
  -webkit-animation: 4.5s star -2.4s infinite;
  animation: 4.5s star -2.4s infinite;
}

.star-212 {
  top: 50vh;
  left: 70vw;
  -webkit-animation: 3.8s star -4.9s infinite;
  animation: 3.8s star -4.9s infinite;
}

.star-213 {
  top: 34vh;
  left: 35vw;
  -webkit-animation: 3.4s star -1.6s infinite;
  animation: 3.4s star -1.6s infinite;
}

.star-214 {
  top: 13vh;
  left: 55vw;
  -webkit-animation: 5.5s star -3.1s infinite;
  animation: 5.5s star -3.1s infinite;
}

.star-215 {
  top: 70vh;
  left: 15vw;
  -webkit-animation: 4.1s star -3s infinite;
  animation: 4.1s star -3s infinite;
}

.star-216 {
  top: 70vh;
  left: 46vw;
  -webkit-animation: 5s star -4.6s infinite;
  animation: 5s star -4.6s infinite;
}

.star-217 {
  top: 64vh;
  left: 36vw;
  -webkit-animation: 3.9s star -2.8s infinite;
  animation: 3.9s star -2.8s infinite;
}

.star-218 {
  top: 93vh;
  left: 11vw;
  -webkit-animation: 3.1s star -4.3s infinite;
  animation: 3.1s star -4.3s infinite;
}

.star-219 {
  top: 2vh;
  left: 42vw;
  -webkit-animation: 3.3s star -1.2s infinite;
  animation: 3.3s star -1.2s infinite;
}

.star-220 {
  top: 60vh;
  left: 90vw;
  -webkit-animation: 3.6s star -0.6s infinite;
  animation: 3.6s star -0.6s infinite;
}

.star-221 {
  top: 75vh;
  left: 41vw;
  -webkit-animation: 5.7s star -0.4s infinite;
  animation: 5.7s star -0.4s infinite;
}

.star-222 {
  top: 43vh;
  left: 40vw;
  -webkit-animation: 4.6s star -1.3s infinite;
  animation: 4.6s star -1.3s infinite;
}

.star-223 {
  top: 78vh;
  left: 46vw;
  -webkit-animation: 4s star -1s infinite;
  animation: 4s star -1s infinite;
}

.star-224 {
  top: 58vh;
  left: 89vw;
  -webkit-animation: 4.3s star -1.6s infinite;
  animation: 4.3s star -1.6s infinite;
}

.star-225 {
  top: 70vh;
  left: 64vw;
  -webkit-animation: 5.4s star -0.7s infinite;
  animation: 5.4s star -0.7s infinite;
}

.star-226 {
  top: 86vh;
  left: 96vw;
  -webkit-animation: 4.2s star -1s infinite;
  animation: 4.2s star -1s infinite;
}

.star-227 {
  top: 49vh;
  left: 59vw;
  -webkit-animation: 6s star -3.6s infinite;
  animation: 6s star -3.6s infinite;
}

.star-228 {
  top: 19vh;
  left: 5vw;
  -webkit-animation: 5s star -4.5s infinite;
  animation: 5s star -4.5s infinite;
}

.star-229 {
  top: 75vh;
  left: 98vw;
  -webkit-animation: 3.2s star -3.9s infinite;
  animation: 3.2s star -3.9s infinite;
}

.star-230 {
  top: 64vh;
  left: 27vw;
  -webkit-animation: 4.4s star -0.9s infinite;
  animation: 4.4s star -0.9s infinite;
}

.star-231 {
  top: 64vh;
  left: 10vw;
  -webkit-animation: 3.4s star -4.5s infinite;
  animation: 3.4s star -4.5s infinite;
}

.star-232 {
  top: 76vh;
  left: 34vw;
  -webkit-animation: 4.3s star -1s infinite;
  animation: 4.3s star -1s infinite;
}

.star-233 {
  top: 39vh;
  left: 50vw;
  -webkit-animation: 3.3s star -3.6s infinite;
  animation: 3.3s star -3.6s infinite;
}

.star-234 {
  top: 73vh;
  left: 73vw;
  -webkit-animation: 4.9s star -3.3s infinite;
  animation: 4.9s star -3.3s infinite;
}

.star-235 {
  top: 39vh;
  left: 33vw;
  -webkit-animation: 3.8s star -1.3s infinite;
  animation: 3.8s star -1.3s infinite;
}

.star-236 {
  top: 28vh;
  left: 99vw;
  -webkit-animation: 4.2s star -0.1s infinite;
  animation: 4.2s star -0.1s infinite;
}

.star-237 {
  top: 41vh;
  left: 81vw;
  -webkit-animation: 4.3s star -3s infinite;
  animation: 4.3s star -3s infinite;
}

.star-238 {
  top: 18vh;
  left: 11vw;
  -webkit-animation: 4s star -2.7s infinite;
  animation: 4s star -2.7s infinite;
}

.star-239 {
  top: 77vh;
  left: 40vw;
  -webkit-animation: 5.1s star -2.8s infinite;
  animation: 5.1s star -2.8s infinite;
}

.star-240 {
  top: 46vh;
  left: 96vw;
  -webkit-animation: 5.4s star -2.3s infinite;
  animation: 5.4s star -2.3s infinite;
}

.star-241 {
  top: 20vh;
  left: 14vw;
  -webkit-animation: 5.3s star -4.5s infinite;
  animation: 5.3s star -4.5s infinite;
}

.star-242 {
  top: 6vh;
  left: 34vw;
  -webkit-animation: 4s star -2.1s infinite;
  animation: 4s star -2.1s infinite;
}

.star-243 {
  top: 16vh;
  left: 17vw;
  -webkit-animation: 5.4s star -5s infinite;
  animation: 5.4s star -5s infinite;
}

.star-244 {
  top: 25vh;
  left: 90vw;
  -webkit-animation: 4.1s star -3.2s infinite;
  animation: 4.1s star -3.2s infinite;
}

.star-245 {
  top: 89vh;
  left: 19vw;
  -webkit-animation: 4.5s star -0.6s infinite;
  animation: 4.5s star -0.6s infinite;
}

.star-246 {
  top: 30vh;
  left: 66vw;
  -webkit-animation: 3.6s star -4.1s infinite;
  animation: 3.6s star -4.1s infinite;
}

.star-247 {
  top: 2vh;
  left: 35vw;
  -webkit-animation: 5.6s star -4.9s infinite;
  animation: 5.6s star -4.9s infinite;
}

.star-248 {
  top: 78vh;
  left: 29vw;
  -webkit-animation: 5.9s star -1.1s infinite;
  animation: 5.9s star -1.1s infinite;
}

.star-249 {
  top: 92vh;
  left: 67vw;
  -webkit-animation: 5.5s star -2.2s infinite;
  animation: 5.5s star -2.2s infinite;
}

.star-250 {
  top: 45vh;
  left: 45vw;
  -webkit-animation: 4.2s star -4.6s infinite;
  animation: 4.2s star -4.6s infinite;
}

.star-251 {
  top: 75vh;
  left: 14vw;
  -webkit-animation: 3.6s star -0.7s infinite;
  animation: 3.6s star -0.7s infinite;
}

.star-252 {
  top: 59vh;
  left: 5vw;
  -webkit-animation: 5.6s star -1.9s infinite;
  animation: 5.6s star -1.9s infinite;
}

.star-253 {
  top: 40vh;
  left: 47vw;
  -webkit-animation: 4.1s star -4.4s infinite;
  animation: 4.1s star -4.4s infinite;
}

.star-254 {
  top: 13vh;
  left: 10vw;
  -webkit-animation: 5.2s star -4.8s infinite;
  animation: 5.2s star -4.8s infinite;
}

.star-255 {
  top: 73vh;
  left: 35vw;
  -webkit-animation: 5.7s star -2.4s infinite;
  animation: 5.7s star -2.4s infinite;
}

.star-256 {
  top: 28vh;
  left: 33vw;
  -webkit-animation: 5s star -2.9s infinite;
  animation: 5s star -2.9s infinite;
}

.star-257 {
  top: 72vh;
  left: 33vw;
  -webkit-animation: 3.2s star -2.5s infinite;
  animation: 3.2s star -2.5s infinite;
}

.star-258 {
  top: 96vh;
  left: 12vw;
  -webkit-animation: 4.4s star -2s infinite;
  animation: 4.4s star -2s infinite;
}

.star-259 {
  top: 49vh;
  left: 80vw;
  -webkit-animation: 3.2s star -4s infinite;
  animation: 3.2s star -4s infinite;
}

.star-260 {
  top: 48vh;
  left: 31vw;
  -webkit-animation: 6s star -4.7s infinite;
  animation: 6s star -4.7s infinite;
}

.star-261 {
  top: 18vh;
  left: 22vw;
  -webkit-animation: 4.1s star -4.4s infinite;
  animation: 4.1s star -4.4s infinite;
}

.star-262 {
  top: 44vh;
  left: 70vw;
  -webkit-animation: 4.7s star -4.8s infinite;
  animation: 4.7s star -4.8s infinite;
}

.star-263 {
  top: 16vh;
  left: 27vw;
  -webkit-animation: 4.1s star -2.6s infinite;
  animation: 4.1s star -2.6s infinite;
}

.star-264 {
  top: 17vh;
  left: 100vw;
  -webkit-animation: 5.7s star -3.1s infinite;
  animation: 5.7s star -3.1s infinite;
}

.star-265 {
  top: 88vh;
  left: 81vw;
  -webkit-animation: 3.1s star -4.9s infinite;
  animation: 3.1s star -4.9s infinite;
}

.star-266 {
  top: 96vh;
  left: 85vw;
  -webkit-animation: 5.1s star -1.2s infinite;
  animation: 5.1s star -1.2s infinite;
}

.star-267 {
  top: 80vh;
  left: 11vw;
  -webkit-animation: 5.2s star -1.4s infinite;
  animation: 5.2s star -1.4s infinite;
}

.star-268 {
  top: 48vh;
  left: 13vw;
  -webkit-animation: 5.4s star -3s infinite;
  animation: 5.4s star -3s infinite;
}

.star-269 {
  top: 44vh;
  left: 13vw;
  -webkit-animation: 4.4s star -4.1s infinite;
  animation: 4.4s star -4.1s infinite;
}

.star-270 {
  top: 15vh;
  left: 52vw;
  -webkit-animation: 4s star -3.3s infinite;
  animation: 4s star -3.3s infinite;
}

.star-271 {
  top: 26vh;
  left: 11vw;
  -webkit-animation: 5.2s star -1.9s infinite;
  animation: 5.2s star -1.9s infinite;
}

.star-272 {
  top: 95vh;
  left: 42vw;
  -webkit-animation: 6s star -2.9s infinite;
  animation: 6s star -2.9s infinite;
}

.star-273 {
  top: 64vh;
  left: 12vw;
  -webkit-animation: 4.9s star -4.5s infinite;
  animation: 4.9s star -4.5s infinite;
}

.star-274 {
  top: 42vh;
  left: 87vw;
  -webkit-animation: 4.3s star -0.8s infinite;
  animation: 4.3s star -0.8s infinite;
}

.star-275 {
  top: 16vh;
  left: 97vw;
  -webkit-animation: 5.4s star -4.3s infinite;
  animation: 5.4s star -4.3s infinite;
}

.star-276 {
  top: 54vh;
  left: 87vw;
  -webkit-animation: 3.9s star -1.9s infinite;
  animation: 3.9s star -1.9s infinite;
}

.star-277 {
  top: 95vh;
  left: 26vw;
  -webkit-animation: 4.5s star -2.3s infinite;
  animation: 4.5s star -2.3s infinite;
}

.star-278 {
  top: 47vh;
  left: 25vw;
  -webkit-animation: 4.3s star -4s infinite;
  animation: 4.3s star -4s infinite;
}

.star-279 {
  top: 35vh;
  left: 34vw;
  -webkit-animation: 3.6s star -3.8s infinite;
  animation: 3.6s star -3.8s infinite;
}

.star-280 {
  top: 1vh;
  left: 34vw;
  -webkit-animation: 3.7s star -0.4s infinite;
  animation: 3.7s star -0.4s infinite;
}

.star-281 {
  top: 84vh;
  left: 27vw;
  -webkit-animation: 4s star -4s infinite;
  animation: 4s star -4s infinite;
}

.star-282 {
  top: 17vh;
  left: 55vw;
  -webkit-animation: 4.6s star -1.1s infinite;
  animation: 4.6s star -1.1s infinite;
}

.star-283 {
  top: 48vh;
  left: 22vw;
  -webkit-animation: 4.5s star -1.7s infinite;
  animation: 4.5s star -1.7s infinite;
}

.star-284 {
  top: 94vh;
  left: 67vw;
  -webkit-animation: 3.8s star -3.2s infinite;
  animation: 3.8s star -3.2s infinite;
}

.star-285 {
  top: 80vh;
  left: 20vw;
  -webkit-animation: 5.9s star -1.2s infinite;
  animation: 5.9s star -1.2s infinite;
}

.star-286 {
  top: 49vh;
  left: 83vw;
  -webkit-animation: 4.4s star -2.6s infinite;
  animation: 4.4s star -2.6s infinite;
}

.star-287 {
  top: 21vh;
  left: 58vw;
  -webkit-animation: 5.6s star -1.8s infinite;
  animation: 5.6s star -1.8s infinite;
}

.star-288 {
  top: 76vh;
  left: 45vw;
  -webkit-animation: 3.3s star -4.3s infinite;
  animation: 3.3s star -4.3s infinite;
}

.star-289 {
  top: 39vh;
  left: 83vw;
  -webkit-animation: 5s star -2.9s infinite;
  animation: 5s star -2.9s infinite;
}

.star-290 {
  top: 17vh;
  left: 62vw;
  -webkit-animation: 5.5s star -4.8s infinite;
  animation: 5.5s star -4.8s infinite;
}

.star-291 {
  top: 99vh;
  left: 51vw;
  -webkit-animation: 3.7s star -0.4s infinite;
  animation: 3.7s star -0.4s infinite;
}

.star-292 {
  top: 88vh;
  left: 91vw;
  -webkit-animation: 4s star -1.2s infinite;
  animation: 4s star -1.2s infinite;
}

.star-293 {
  top: 82vh;
  left: 63vw;
  -webkit-animation: 6s star -1s infinite;
  animation: 6s star -1s infinite;
}

.star-294 {
  top: 48vh;
  left: 46vw;
  -webkit-animation: 3.5s star -4.7s infinite;
  animation: 3.5s star -4.7s infinite;
}

.star-295 {
  top: 58vh;
  left: 71vw;
  -webkit-animation: 3.1s star -3.2s infinite;
  animation: 3.1s star -3.2s infinite;
}

.star-296 {
  top: 70vh;
  left: 98vw;
  -webkit-animation: 5.2s star -1.5s infinite;
  animation: 5.2s star -1.5s infinite;
}

.star-297 {
  top: 9vh;
  left: 36vw;
  -webkit-animation: 4.8s star -0.1s infinite;
  animation: 4.8s star -0.1s infinite;
}

.star-298 {
  top: 70vh;
  left: 43vw;
  -webkit-animation: 3.3s star -3.9s infinite;
  animation: 3.3s star -3.9s infinite;
}

.star-299 {
  top: 85vh;
  left: 80vw;
  -webkit-animation: 3.7s star -3.2s infinite;
  animation: 3.7s star -3.2s infinite;
}

.star-300 {
  top: 99vh;
  left: 73vw;
  -webkit-animation: 4.2s star -0.8s infinite;
  animation: 4.2s star -0.8s infinite;
}

.star-301 {
  top: 38vh;
  left: 28vw;
  -webkit-animation: 5.1s star -0.2s infinite;
  animation: 5.1s star -0.2s infinite;
}

.star-302 {
  top: 39vh;
  left: 66vw;
  -webkit-animation: 3.1s star -0.1s infinite;
  animation: 3.1s star -0.1s infinite;
}

.star-303 {
  top: 27vh;
  left: 94vw;
  -webkit-animation: 5.7s star -3.8s infinite;
  animation: 5.7s star -3.8s infinite;
}

.star-304 {
  top: 84vh;
  left: 18vw;
  -webkit-animation: 5.8s star -1.5s infinite;
  animation: 5.8s star -1.5s infinite;
}

.star-305 {
  top: 25vh;
  left: 28vw;
  -webkit-animation: 5.3s star -0.1s infinite;
  animation: 5.3s star -0.1s infinite;
}

.star-306 {
  top: 21vh;
  left: 98vw;
  -webkit-animation: 3.3s star -1.2s infinite;
  animation: 3.3s star -1.2s infinite;
}

.star-307 {
  top: 24vh;
  left: 4vw;
  -webkit-animation: 3.8s star -2.3s infinite;
  animation: 3.8s star -2.3s infinite;
}

.star-308 {
  top: 93vh;
  left: 53vw;
  -webkit-animation: 3.3s star -2.2s infinite;
  animation: 3.3s star -2.2s infinite;
}

.star-309 {
  top: 19vh;
  left: 65vw;
  -webkit-animation: 5.5s star -4.6s infinite;
  animation: 5.5s star -4.6s infinite;
}

.star-310 {
  top: 21vh;
  left: 18vw;
  -webkit-animation: 4.6s star -1.1s infinite;
  animation: 4.6s star -1.1s infinite;
}

.star-311 {
  top: 34vh;
  left: 71vw;
  -webkit-animation: 5.5s star -3.7s infinite;
  animation: 5.5s star -3.7s infinite;
}

.star-312 {
  top: 45vh;
  left: 44vw;
  -webkit-animation: 5.4s star -1.2s infinite;
  animation: 5.4s star -1.2s infinite;
}

.star-313 {
  top: 99vh;
  left: 54vw;
  -webkit-animation: 3.2s star -1.9s infinite;
  animation: 3.2s star -1.9s infinite;
}

.star-314 {
  top: 16vh;
  left: 99vw;
  -webkit-animation: 3.3s star -2s infinite;
  animation: 3.3s star -2s infinite;
}

.star-315 {
  top: 68vh;
  left: 81vw;
  -webkit-animation: 5.6s star -1s infinite;
  animation: 5.6s star -1s infinite;
}

.star-316 {
  top: 24vh;
  left: 99vw;
  -webkit-animation: 3.2s star -3.5s infinite;
  animation: 3.2s star -3.5s infinite;
}

.star-317 {
  top: 47vh;
  left: 39vw;
  -webkit-animation: 3.6s star -0.8s infinite;
  animation: 3.6s star -0.8s infinite;
}

.star-318 {
  top: 78vh;
  left: 38vw;
  -webkit-animation: 4.4s star -2.9s infinite;
  animation: 4.4s star -2.9s infinite;
}

.star-319 {
  top: 65vh;
  left: 24vw;
  -webkit-animation: 4.1s star -0.8s infinite;
  animation: 4.1s star -0.8s infinite;
}

.star-320 {
  top: 90vh;
  left: 24vw;
  -webkit-animation: 4.4s star -0.9s infinite;
  animation: 4.4s star -0.9s infinite;
}

.star-321 {
  top: 25vh;
  left: 36vw;
  -webkit-animation: 5.3s star -1.2s infinite;
  animation: 5.3s star -1.2s infinite;
}

.star-322 {
  top: 67vh;
  left: 86vw;
  -webkit-animation: 4.1s star -0.2s infinite;
  animation: 4.1s star -0.2s infinite;
}

.star-323 {
  top: 97vh;
  left: 55vw;
  -webkit-animation: 3.8s star -1.2s infinite;
  animation: 3.8s star -1.2s infinite;
}

.star-324 {
  top: 80vh;
  left: 97vw;
  -webkit-animation: 4s star -4.4s infinite;
  animation: 4s star -4.4s infinite;
}

.star-325 {
  top: 59vh;
  left: 45vw;
  -webkit-animation: 3.2s star -0.7s infinite;
  animation: 3.2s star -0.7s infinite;
}

.star-326 {
  top: 100vh;
  left: 17vw;
  -webkit-animation: 3.2s star -2.5s infinite;
  animation: 3.2s star -2.5s infinite;
}

.star-327 {
  top: 98vh;
  left: 100vw;
  -webkit-animation: 5.9s star -2.1s infinite;
  animation: 5.9s star -2.1s infinite;
}

.star-328 {
  top: 25vh;
  left: 8vw;
  -webkit-animation: 5.7s star -0.2s infinite;
  animation: 5.7s star -0.2s infinite;
}

.star-329 {
  top: 25vh;
  left: 20vw;
  -webkit-animation: 5.9s star -4.6s infinite;
  animation: 5.9s star -4.6s infinite;
}

.star-330 {
  top: 74vh;
  left: 58vw;
  -webkit-animation: 4s star -0.3s infinite;
  animation: 4s star -0.3s infinite;
}

.star-331 {
  top: 7vh;
  left: 63vw;
  -webkit-animation: 3.1s star -2s infinite;
  animation: 3.1s star -2s infinite;
}

.star-332 {
  top: 70vh;
  left: 77vw;
  -webkit-animation: 3.2s star -2.9s infinite;
  animation: 3.2s star -2.9s infinite;
}

.star-333 {
  top: 48vh;
  left: 96vw;
  -webkit-animation: 4.7s star -1.1s infinite;
  animation: 4.7s star -1.1s infinite;
}

.star-334 {
  top: 84vh;
  left: 65vw;
  -webkit-animation: 4.1s star -4.5s infinite;
  animation: 4.1s star -4.5s infinite;
}

.star-335 {
  top: 56vh;
  left: 77vw;
  -webkit-animation: 3.6s star -3s infinite;
  animation: 3.6s star -3s infinite;
}

.star-336 {
  top: 28vh;
  left: 58vw;
  -webkit-animation: 5.1s star -4.2s infinite;
  animation: 5.1s star -4.2s infinite;
}

.star-337 {
  top: 93vh;
  left: 19vw;
  -webkit-animation: 3.1s star -2.4s infinite;
  animation: 3.1s star -2.4s infinite;
}

.star-338 {
  top: 72vh;
  left: 40vw;
  -webkit-animation: 5.7s star -4s infinite;
  animation: 5.7s star -4s infinite;
}

.star-339 {
  top: 32vh;
  left: 89vw;
  -webkit-animation: 4.2s star -3.1s infinite;
  animation: 4.2s star -3.1s infinite;
}

.star-340 {
  top: 38vh;
  left: 67vw;
  -webkit-animation: 4.4s star -1.2s infinite;
  animation: 4.4s star -1.2s infinite;
}

.star-341 {
  top: 35vh;
  left: 42vw;
  -webkit-animation: 3.1s star -3.6s infinite;
  animation: 3.1s star -3.6s infinite;
}

.star-342 {
  top: 35vh;
  left: 43vw;
  -webkit-animation: 4.9s star -0.5s infinite;
  animation: 4.9s star -0.5s infinite;
}

.star-343 {
  top: 18vh;
  left: 23vw;
  -webkit-animation: 5s star -4.6s infinite;
  animation: 5s star -4.6s infinite;
}

.star-344 {
  top: 22vh;
  left: 79vw;
  -webkit-animation: 3.9s star -0.1s infinite;
  animation: 3.9s star -0.1s infinite;
}

.star-345 {
  top: 77vh;
  left: 10vw;
  -webkit-animation: 5.1s star -2s infinite;
  animation: 5.1s star -2s infinite;
}

.star-346 {
  top: 67vh;
  left: 65vw;
  -webkit-animation: 4.9s star -3.2s infinite;
  animation: 4.9s star -3.2s infinite;
}

.star-347 {
  top: 59vh;
  left: 11vw;
  -webkit-animation: 5.8s star -5s infinite;
  animation: 5.8s star -5s infinite;
}

.star-348 {
  top: 36vh;
  left: 14vw;
  -webkit-animation: 3.2s star -5s infinite;
  animation: 3.2s star -5s infinite;
}

.star-349 {
  top: 78vh;
  left: 74vw;
  -webkit-animation: 3.2s star -2.6s infinite;
  animation: 3.2s star -2.6s infinite;
}

.star-350 {
  top: 70vh;
  left: 88vw;
  -webkit-animation: 5.6s star -3.2s infinite;
  animation: 5.6s star -3.2s infinite;
}

.star-351 {
  top: 99vh;
  left: 41vw;
  -webkit-animation: 4.6s star -3.2s infinite;
  animation: 4.6s star -3.2s infinite;
}

.star-352 {
  top: 36vh;
  left: 58vw;
  -webkit-animation: 4.3s star -0.7s infinite;
  animation: 4.3s star -0.7s infinite;
}

.star-353 {
  top: 74vh;
  left: 26vw;
  -webkit-animation: 3.1s star -4.2s infinite;
  animation: 3.1s star -4.2s infinite;
}

.star-354 {
  top: 29vh;
  left: 50vw;
  -webkit-animation: 5.9s star -3s infinite;
  animation: 5.9s star -3s infinite;
}

.star-355 {
  top: 72vh;
  left: 98vw;
  -webkit-animation: 5.4s star -3.1s infinite;
  animation: 5.4s star -3.1s infinite;
}

.star-356 {
  top: 5vh;
  left: 29vw;
  -webkit-animation: 3.6s star -5s infinite;
  animation: 3.6s star -5s infinite;
}

.star-357 {
  top: 17vh;
  left: 97vw;
  -webkit-animation: 4.7s star -2.6s infinite;
  animation: 4.7s star -2.6s infinite;
}

.star-358 {
  top: 71vh;
  left: 18vw;
  -webkit-animation: 3.9s star -5s infinite;
  animation: 3.9s star -5s infinite;
}

.star-359 {
  top: 89vh;
  left: 2vw;
  -webkit-animation: 3.1s star -1s infinite;
  animation: 3.1s star -1s infinite;
}

.star-360 {
  top: 65vh;
  left: 12vw;
  -webkit-animation: 3.3s star -4.3s infinite;
  animation: 3.3s star -4.3s infinite;
}

.star-361 {
  top: 41vh;
  left: 62vw;
  -webkit-animation: 6s star -4.6s infinite;
  animation: 6s star -4.6s infinite;
}

.star-362 {
  top: 77vh;
  left: 36vw;
  -webkit-animation: 5.9s star -1.3s infinite;
  animation: 5.9s star -1.3s infinite;
}

.star-363 {
  top: 70vh;
  left: 57vw;
  -webkit-animation: 3.5s star -3.5s infinite;
  animation: 3.5s star -3.5s infinite;
}

.star-364 {
  top: 23vh;
  left: 95vw;
  -webkit-animation: 5s star -3.2s infinite;
  animation: 5s star -3.2s infinite;
}

.star-365 {
  top: 34vh;
  left: 1vw;
  -webkit-animation: 3.5s star -3s infinite;
  animation: 3.5s star -3s infinite;
}

.star-366 {
  top: 83vh;
  left: 73vw;
  -webkit-animation: 4.1s star -0.1s infinite;
  animation: 4.1s star -0.1s infinite;
}

.star-367 {
  top: 73vh;
  left: 40vw;
  -webkit-animation: 4.3s star -2.2s infinite;
  animation: 4.3s star -2.2s infinite;
}

.star-368 {
  top: 6vh;
  left: 30vw;
  -webkit-animation: 6s star -4.7s infinite;
  animation: 6s star -4.7s infinite;
}

.star-369 {
  top: 11vh;
  left: 10vw;
  -webkit-animation: 3.2s star -2.9s infinite;
  animation: 3.2s star -2.9s infinite;
}

.star-370 {
  top: 13vh;
  left: 50vw;
  -webkit-animation: 5s star -1s infinite;
  animation: 5s star -1s infinite;
}

.star-371 {
  top: 74vh;
  left: 93vw;
  -webkit-animation: 3.1s star -4s infinite;
  animation: 3.1s star -4s infinite;
}

.star-372 {
  top: 70vh;
  left: 75vw;
  -webkit-animation: 3.5s star -4.4s infinite;
  animation: 3.5s star -4.4s infinite;
}

.star-373 {
  top: 58vh;
  left: 7vw;
  -webkit-animation: 5.3s star -4.9s infinite;
  animation: 5.3s star -4.9s infinite;
}

.star-374 {
  top: 15vh;
  left: 59vw;
  -webkit-animation: 4s star -4.7s infinite;
  animation: 4s star -4.7s infinite;
}

.star-375 {
  top: 93vh;
  left: 67vw;
  -webkit-animation: 4s star -0.4s infinite;
  animation: 4s star -0.4s infinite;
}

.star-376 {
  top: 49vh;
  left: 52vw;
  -webkit-animation: 5.6s star -4.2s infinite;
  animation: 5.6s star -4.2s infinite;
}

.star-377 {
  top: 33vh;
  left: 98vw;
  -webkit-animation: 4.4s star -0.2s infinite;
  animation: 4.4s star -0.2s infinite;
}

.star-378 {
  top: 55vh;
  left: 12vw;
  -webkit-animation: 3.3s star -2s infinite;
  animation: 3.3s star -2s infinite;
}

.star-379 {
  top: 83vh;
  left: 11vw;
  -webkit-animation: 4s star -2.2s infinite;
  animation: 4s star -2.2s infinite;
}

.star-380 {
  top: 26vh;
  left: 97vw;
  -webkit-animation: 4.3s star -1.5s infinite;
  animation: 4.3s star -1.5s infinite;
}

.star-381 {
  top: 77vh;
  left: 74vw;
  -webkit-animation: 3.8s star -2.2s infinite;
  animation: 3.8s star -2.2s infinite;
}

.star-382 {
  top: 52vh;
  left: 74vw;
  -webkit-animation: 6s star -2s infinite;
  animation: 6s star -2s infinite;
}

.star-383 {
  top: 67vh;
  left: 94vw;
  -webkit-animation: 5.4s star -1s infinite;
  animation: 5.4s star -1s infinite;
}

.star-384 {
  top: 53vh;
  left: 52vw;
  -webkit-animation: 3.3s star -0.3s infinite;
  animation: 3.3s star -0.3s infinite;
}

.star-385 {
  top: 58vh;
  left: 76vw;
  -webkit-animation: 5.5s star -4.4s infinite;
  animation: 5.5s star -4.4s infinite;
}

.star-386 {
  top: 92vh;
  left: 12vw;
  -webkit-animation: 3.1s star -1s infinite;
  animation: 3.1s star -1s infinite;
}

.star-387 {
  top: 50vh;
  left: 25vw;
  -webkit-animation: 3.4s star -0.8s infinite;
  animation: 3.4s star -0.8s infinite;
}

.star-388 {
  top: 19vh;
  left: 93vw;
  -webkit-animation: 5.6s star -0.3s infinite;
  animation: 5.6s star -0.3s infinite;
}

.star-389 {
  top: 94vh;
  left: 70vw;
  -webkit-animation: 4.7s star -3.3s infinite;
  animation: 4.7s star -3.3s infinite;
}

.star-390 {
  top: 88vh;
  left: 81vw;
  -webkit-animation: 6s star -4s infinite;
  animation: 6s star -4s infinite;
}

.star-391 {
  top: 33vh;
  left: 97vw;
  -webkit-animation: 4.2s star -0.5s infinite;
  animation: 4.2s star -0.5s infinite;
}

.star-392 {
  top: 64vh;
  left: 35vw;
  -webkit-animation: 4.4s star -3.3s infinite;
  animation: 4.4s star -3.3s infinite;
}

.star-393 {
  top: 8vh;
  left: 54vw;
  -webkit-animation: 4.1s star -1.3s infinite;
  animation: 4.1s star -1.3s infinite;
}

.star-394 {
  top: 90vh;
  left: 30vw;
  -webkit-animation: 5.2s star -1.4s infinite;
  animation: 5.2s star -1.4s infinite;
}

.star-395 {
  top: 42vh;
  left: 71vw;
  -webkit-animation: 3.9s star -0.4s infinite;
  animation: 3.9s star -0.4s infinite;
}

.star-396 {
  top: 71vh;
  left: 50vw;
  -webkit-animation: 3.2s star -4s infinite;
  animation: 3.2s star -4s infinite;
}

.star-397 {
  top: 82vh;
  left: 81vw;
  -webkit-animation: 3.2s star -2.7s infinite;
  animation: 3.2s star -2.7s infinite;
}

.star-398 {
  top: 56vh;
  left: 33vw;
  -webkit-animation: 3.8s star -3.2s infinite;
  animation: 3.8s star -3.2s infinite;
}

.star-399 {
  top: 79vh;
  left: 31vw;
  -webkit-animation: 4.5s star -0.2s infinite;
  animation: 4.5s star -0.2s infinite;
}

.star-400 {
  top: 36vh;
  left: 5vw;
  -webkit-animation: 3.7s star -1s infinite;
  animation: 3.7s star -1s infinite;
}

@-webkit-keyframes star {
  to {
    opacity: 0.3;
  }
}

@keyframes star {
  to {
    opacity: 0.3;
  }
}
</style>
