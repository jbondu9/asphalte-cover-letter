<template>
  <div class="application-container">
    <ShortPresentation />
    <Title title="Rock - Cover - Letter" />
    <FourIssues />
    <Title title="La candidature revisitée" />
    <ReflexionContent />
  </div>
</template>

<script>
  import ShortPresentation from "~/components/content/ShortPresentation"
  import Title from "~/components/content/Title"
  import FourIssues from "~/components/content/FourIssues"
  import ReflexionContent from "~/components/content/ReflexionContent"

  export default {
    components: {
      ShortPresentation,
      Title,
      FourIssues,
      ReflexionContent
    }
  }
</script>