<template>
  <div class="form-content">
    <div class="media">
      <span class="label">Contacter par</span>
      :
      <span>{{ media }}</span>
    </div>
    <div class="media-list">
      <div class="media-option mail" role="button" @click="setMedia('Mail'), $emit('getFormData', media, object)" :class="{active: media === 'Mail'}"></div>
      <div class="media-option linkedin" role="button" @click="setMedia('LinkedIn'), $emit('getFormData', media, object)" :class="{active: media === 'LinkedIn'}"></div>
      <div v-if="mobile" class="media-option phone" role="button" @click="setMedia('Téléphone'), $emit('getFormData', media, object)" :class="{active: media === 'Téléphone'}"></div>
    </div>
    <div class="mail-object" v-if="media === 'Mail'">
      <div class="object">
        <div>
          <span class="label">Objet</span>
          :
          <span>{{ object }}</span>
        </div>
        <div>
          <span class="guide">Guide des objets</span>
        </div>
      </div>
      <div class="object-list">
        <div class="object-option" role="button" @click="setObject('S'), $emit('getFormData', media, object)" :class="{active: object === 'S'}">
          <span>S</span>
        </div>
        <div class="object-option" role="button" @click="setObject('M'), $emit('getFormData', media, object)" :class="{active: object === 'M'}">
          <span>M</span>
        </div>
        <div class="object-option" role="button" @click="setObject('L'), $emit('getFormData', media, object)" :class="{active: object === 'L'}">
          <span>L</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        media: "Mail",
        object: "S"
      }
    },

    props: [
      "mobile"
    ],

    methods: {
      setMedia(media) {
        this.media = media
      },

      setObject(object) {
        this.object = object
      }
    } 
  }
</script>

<style scoped>
  .form-content {
    margin-top: 5px;
    font-family: "Qanelas";
  }

  .media, .object {
    margin-bottom: 10px;
  }

  .media-list, .object-list {
    display: flex;
  }

  .media-list {
    margin-bottom: 24px;
  }

  .media-option {
    position: relative;
    width: 42px;
    height: 42px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #e3e3e3;
    cursor: pointer;
    transition: all .25s;
  }

  .media-option.active {
    border: 2px solid #000;
  }

  .media-option.mail {
    background: center / 60% no-repeat url("~assets/icons/mail.svg"),
                linear-gradient(rgb(0, 102, 255), rgb(0, 200, 255));
  }

  .media-option.linkedin {
    background: center / 90% no-repeat url("~assets/icons/linkedin.svg");
  }

  .media-option.phone {
    background: center / 60% no-repeat url("~assets/icons/call.svg"),
                linear-gradient(rgb(150, 255, 79), rgb(48, 212, 15));
  }

  .media-option::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid #fff;
  }

  .object {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .label {
    font-family: "Qanelas-Bold";
    font-weight: 700;
  }

  .guide {
    text-decoration: underline;
  }

  .object-list {
    margin-bottom: 16px;
  }

  .object-option {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border: 2px solid #e3e3e3;
    cursor: pointer;
    transition: all .25s;
  }

  .object-option.active {
    font-family: "Qanelas-Bold";
    font-weight: 700;
    border: 2px solid #000;
  }

  .object-option > span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>