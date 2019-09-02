<template>
  <div>
    <recent-posts-widget limit="5">Derniers articles</recent-posts-widget>
    <pages-widget limit="5">Pages</pages-widget>
  </div>
</template>

<script>
import RecentPostsWidget from "./widgets/RecentPosts.vue";
import PagesWidget from "./widgets/Pages.vue";

export default {
  components: {
    RecentPostsWidget,
    PagesWidget
  }
};
</script>
