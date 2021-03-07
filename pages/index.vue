<template>
  <div class="application-container">
    <ShortPresentation />
    <Title title="Rock - Cover - Letter" />
    <FourIssues />
    <Title title="La candidature revisitée" />
    <Reflexion />
    <Waterfall />
    <Title title="De la formation à la fabrication" />
    <Double />
    <Contact />
  </div>
</template>

<script>
  import ShortPresentation from "~/components/content/ShortPresentation"
  import Title from "~/components/content/Title"
  import FourIssues from "~/components/content/FourIssues"
  import Reflexion from "~/components/content/Reflexion"
  import Waterfall from "~/components/content/Waterfall"
  import Double from "~/components/content/Double"
  import Contact from "~/components/content/Contact"

  export default {
    components: {
      ShortPresentation,
      Title,
      FourIssues,
      Reflexion,
      Waterfall,
      Double,
      Contact
    }
  }
</script>