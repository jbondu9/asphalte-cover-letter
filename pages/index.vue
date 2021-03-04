<template>
  <div class="application-container">
    <ShortPresentation />
    <FourIssues />
  </div>
</template>

<script>
  import ShortPresentation from "~/components/content/ShortPresentation"
  import FourIssues from "~/components/content/FourIssues"
  
  export default {
    components: { ShortPresentation, FourIssues }
  }
</script>