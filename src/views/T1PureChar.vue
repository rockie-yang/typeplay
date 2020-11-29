<template>
  <svg height="1080px" width="1920px">
    <text
      x="400"
      :y="index * height + height"
      v-for="(item, index) in items"
      :key="index"
      class="heavy"
      :class="'color' + (index % 10)"
    >
      {{ item }}
    </text>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      items: ["A, A is for Apple"],
      height: 40,
      t1: require(`../assets/t1.json`),
    };
  },
  mounted() {
    window.addEventListener("keyup", (e) => {
      const ch: string = String.fromCharCode(e.keyCode).toUpperCase();
      console.log(e.keyCode, ch);
      let item = "Something else";
      if (Object.prototype.hasOwnProperty.call(this.t1, ch)) {
        item = this.t1[ch];
      }

      this.items.push(item);
      if (this.items.length > 20 && this.items.length % 2 == 0) {
        const c = this.items.shift();
        const [d] = this.items.splice(0, 1);
      }
      const msg = new SpeechSynthesisUtterance();
      msg.text = item;
      msg.lang = "en-UK";
      // msg.lang = "zh-Hans";
      msg.rate = 1;
      // const msg = this.getSample(ch.toString());
      window.speechSynthesis.speak(msg);
      // console.log(this.items);
    });
  },
});
</script>

<style lang="css" scoped>
.heavy {
  font-size: 35px;
  font-weight: bold;
}
.color0 {
  fill: #1f77b4;
}
.color1 {
  fill: #ff7f0e;
}
.color2 {
  fill: #2ca02c;
}
.color3 {
  fill: #d62728;
}
.color4 {
  fill: #9467bd;
}
.color5 {
  fill: #8c564b;
}
.color6 {
  fill: #e377c2;
}
.color7 {
  fill: #7f7f7f;
}
.color8 {
  fill: #bcbd22;
}
.color9 {
  fill: #17becf;
}
</style>