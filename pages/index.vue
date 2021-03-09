<template>
  <div class="application-container">
    <ShortPresentation />
    <Title>
      Rock - Cover - Letter
    </Title>
    <FourIssues />
    <Title>
      La candidature revisitée
    </Title>
    <Reflexion />
    <Waterfall />
    <Title>
      Côté formation
    </Title>
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