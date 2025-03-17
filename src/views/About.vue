<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Chien</strong>, a passionate Unity Developer with 1.5 years of experience.<br/>
        I specialize in developing and optimizing gameplay using C# and Unity, creating stunning particle effects, and designing intuitive UI.<br/>
        I also have experience working with Shaders, Client-Server systems, Firebase integration, and AdMob monetization.<br/>
        Beyond coding, I enjoy exploring new design tools like Figma, Photoshop, and Illustrator to enhance user experience.
    </div>


      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">
    I'm <strong>currently looking for new opportunities</strong> as a Unity Developer.  
    You can reach me at <a href="mailto:letrongchien472002@gmail.com">letrongchien472002@gmail.com</a>  
    or <router-link to="/contact">through here</router-link>.
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

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

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>