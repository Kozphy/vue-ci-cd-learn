<template>
  <div class="hello">
    <h1 data-testid="currentCounter">當前點擊次數{{ count }}</h1>
    <button
      type="button"
      @click="increment()"
    >點我 + 1</button>

    <h4>
      test ci/cd
    </h4>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
