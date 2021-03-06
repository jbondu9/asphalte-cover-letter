<template>
  <div class="application-container">
    <ShortPresentation />
    <Title title="Rock - Cover - Letter" />
    <FourIssues />
    <Title title="La candidature revisitée" />
    <Reflexion />
    <Waterfall />
  </div>
</template>

<script>
  import ShortPresentation from "~/components/content/ShortPresentation"
  import Title from "~/components/content/Title"
  import FourIssues from "~/components/content/FourIssues"
  import Reflexion from "~/components/content/Reflexion"
  import Waterfall from "~/components/content/Waterfall"

  export default {
    components: {
      ShortPresentation,
      Title,
      FourIssues,
      Reflexion,
      Waterfall
    }
  }
</script>