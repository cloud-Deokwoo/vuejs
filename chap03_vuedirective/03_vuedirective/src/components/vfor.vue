<template>
    <div>
      <ul>
        <!-- v-for 디렉티브를 사용하여 배열 항목을 반복합니다. -->
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ]
      };
    }
  };
  </script>