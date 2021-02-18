<template>
  <h1>Home page</h1>
  <button @click.prevent="count++">click {{count}}</button>

  <h3>Цель урока</h3>
  <p>
    Используя предоставленные ресурсы, на странице Posts, создать динамический список загрузки пользователей.
    Цель, загружаем сразу 10 пользователей (при первой загрузке) но с расчетом что на экране отобразится 5 карточки.
    При прокрутке страницы, вызывать загрузку еще 10 новых постов и вывод страницы далее.
    В этом поможет API Intersection, документации на ресурсе достаточно для реализации.

    Стили минимальные.
    При наличии времени после реализации, попробовать добавить анимацию появления карточек пользователей
  </p>

  <h3>Используем русурсы:</h3>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank">Intersection</a></li>
    <li><a href="https://jsonplaceholder.typicode.com/" target="_blank">Jsonplaceholder</a></li>
  </ul>
</template>

<script>
import {ref, watchEffect} from 'vue';
export default {
  setup(props) {
    const count = ref(0);
    

    return { count }
  }

}
</script>

<style>

</style>