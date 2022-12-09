<template>
  <div class="container">
    <form action="/member/join" method="post">
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" name="name" placeholder="이름을 입력하세요">
      </div>
      <button type="submit"> 등록</button>

    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>