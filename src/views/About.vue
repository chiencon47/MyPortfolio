<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="about-row">
      <div class="paragraph">
        <div>
          I'm <strong>Chien</strong>, a Unity Developer with <strong>3+ years</strong> of experience building Hyper-Casual and Casual mobile games.<br/>
          I've contributed to products with <strong>200M+</strong> downloads, focusing on gameplay development, scalable system architecture and performance optimization.<br/>
          I also work on UI development, particle systems and shaders, and third-party SDK integration (Firebase, IronSource, AppLovin MAX, AdMob, IAP).<br/>
          Beyond coding, I enjoy exploring design tools like Figma and Photoshop to enhance the player experience.
        </div>

        <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">projects</router-link>, on <router-link to="/other-projects">other projects</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

        <div style="margin-top: 40px;">
          I'm <strong>currently looking for new opportunities</strong> as a Unity Developer.
          You can reach me at <a href="mailto:letrongchien472002@gmail.com">letrongchien472002@gmail.com</a>
          or <router-link to="/contact">through here</router-link>.
        </div>
      </div>

      <div class="photo">
        <img src="img/avatar.png" alt="Avatar of Chien" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

/* Giu dung ty le goc cua anh du anh nguon co kich thuoc nao */
.photo img {
  width: 220px;
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media only screen and (min-width: 620px){
  .about-row {
    display: flex;
    align-items: flex-start;
  }

  .paragraph {
    flex: 1 1 auto;
  }

  .photo {
    flex: 0 0 auto;
    margin-top: 10px;
    margin-left: 60px;
  }
}
</style>
