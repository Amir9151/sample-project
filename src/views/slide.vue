<template>
 <div id="el">
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"

      :src="item.src"
    >
{{item.src}}
    
    </v-carousel-item>
  </v-carousel>
 </div>
</template>
<script>
  export default {
      name:"slide",
    data () {
    
      return {
        items: [
          {
            src: './image0 (1).jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: './image0 (1).jpg',
          },
          {
            src: './image0 (1).jpg',
          },
          {
            src: './image0 (1).jpg',
          },
      
        ],
      }
    },
  }
</script>