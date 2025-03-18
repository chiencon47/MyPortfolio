<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>[Your Name]</strong>, a Unity Developer with 1.5 years of experience in game development.
      <br />Proficient in C#, OOP, and Unity, with expertise in Particle System, Shader, UI Design, Firebase, and AdMob.
      <br />I have a strong background in game mechanics, graphics optimization, and monetization strategies.
      <br />Passionate about creating immersive gaming experiences and continuously improving my skills.
      <br />
      <br />If you have any opportunities, feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides game development, I enjoy exploring new technologies, designing creative UI/UX, and optimizing game performance.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of [Your Name]" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Unity Developer</h3>
      <h4>1.5 Years Experience</h4>

      <ul>
        <li>Developed and optimized gameplay using C# and Unity.</li>
        <li>Designed and implemented Particle Systems for game effects.</li>
        <li>Worked with Shaders to enhance graphics quality.</li>
        <li>Created and optimized UI designs for better user experience.</li>
        <li>Integrated Firebase for data storage and player management.</li>
        <li>Implemented and optimized AdMob ads for monetization.</li>
        <li>Developed and maintained Client-Server architecture.</li>
      </ul>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Game Development</h3>
        <ul>
          <li>Unity</li>
          <li>C# Programming</li>
          <li>OOP & ECS</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Graphics & Effects</h3>
        <ul>
          <li>Particle System</li>
          <li>Shader</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>UI/UX Design</h3>
        <ul>
          <li>Figma</li>
          <li>Photoshop & Illustrator</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Networking & Monetization</h3>
        <ul>
          <li>Firebase</li>
          <li>Client-Server</li>
          <li>AdMob</li>
        </ul>
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>PTIT HCM (2020 - 2025)</h3>
      <h4>Information Technology</h4>

      <h2>Languages</h2>
      <h3>English</h3>
      <div>Proficient in technical and conversational English.</div>

      <h3>Vietnamese</h3>
      <div>Native speaker.</div>

      <h2>Hobbies & Interests</h2>
      <div>
        <h3>Technology</h3>
        <div>Passionate about exploring new frameworks, AI, and game engines.</div>

        <h3>Design</h3>
        <div>Enjoys creating intuitive UI/UX designs for interactive experiences.</div>

        <h3>Gaming</h3>
        <div>Always exploring new game mechanics and trends in the gaming industry.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>
