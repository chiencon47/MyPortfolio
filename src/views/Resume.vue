<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Le Trong Chien</strong>, a Unity Developer with <strong>3+ years</strong> of experience developing Hyper-Casual and Casual mobile games.
      <br />I've contributed to products with <strong>200M+</strong> downloads, specializing in gameplay development, scalable system architecture, performance optimization, and third-party SDK integration.
      <br />Proficient in C#, OOP, SOLID and design patterns, with hands-on experience in UI development, particle systems, shaders, Firebase and ad monetization.
      <br />
      <br />If you have any opportunities, feel free to
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides game development, I enjoy exploring new technologies, designing creative UI/UX, and optimizing game performance.

    </div>
    <div class="photo">
      <img src="img/avatar.png" alt="Photo of Le Trong Chien" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work Experience</h2>

      <h3>Unity Developer - Uplive VN</h3>
      <h4>Jul 2025 - Jul 2026</h4>

      <div>Contributed to multiple hyper-casual and casual mobile games with over 200M+ downloads.</div>
      <ul>
        <li>Developed and maintained gameplay features using Unity and C#.</li>
        <li>Designed scalable game systems with clean, maintainable code.</li>
        <li>Optimized performance, memory usage, loading time, and app size.</li>
        <li>Integrated Firebase, client-server APIs, and third-party SDKs (IronSource, AppLovin MAX, AdMob).</li>
        <li>Collaborated with cross-functional teams to deliver and maintain live game features.</li>
      </ul>

      <h3>Unity Developer - Mason Game VN</h3>
      <h4>Aug 2023 - Jul 2025</h4>

      <div>Worked on multiple hyper-casual and casual mobile games.</div>
      <ul>
        <li>Developed gameplay features and scalable systems.</li>
        <li>Optimized performance, memory usage, and app size.</li>
        <li>Integrated UI, VFX, and third-party SDKs.</li>
        <li>Implemented mobile ad monetization.</li>
      </ul>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming & Architecture</h3>
        <ul>
          <li>C#, Unity (2D/3D)</li>
          <li>OOP, SOLID, Design Patterns</li>
          <li>Dependency Injection</li>
          <li>Decoupled Architecture</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Optimization & Profiling</h3>
        <ul>
          <li>Performance & Memory Optimization</li>
          <li>App Size Reduction</li>
          <li>Addressables, AssetBundles</li>
          <li>Unity Profiler, Frame Debugger</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Gameplay & Graphics</h3>
        <ul>
          <li>Gameplay Systems</li>
          <li>UI Development (UGUI / UI Toolkit)</li>
          <li>Particle Systems</li>
          <li>Shader Graph / HLSL Shaders</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Services & Analytics</h3>
        <ul>
          <li>Firebase (Remote Config, Crashlytics)</li>
          <li>Meta SDK</li>
          <li>AppsFlyer</li>
          <li>GameAnalytics</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Monetization & Ads</h3>
        <ul>
          <li>Google AdMob</li>
          <li>IronSource LevelPlay</li>
          <li>AppLovin MAX</li>
          <li>In-App Purchases (IAP)</li>
        </ul>
      </div>

      <div class="skill-set">
        <h3>Tools & Workflow</h3>
        <ul>
          <li>Git, Jira, ClickUp, Confluence</li>
          <li>Figma, Photoshop</li>
          <li>Agile / Scrum</li>
        </ul>
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Posts and Telecommunications Institute of Technology HCM</h3>
      <h4>Information Technology, Oct 2020 - Jul 2025</h4>

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
    display: inline-block;
    vertical-align: top;
    width: 240px;
    padding-right: 60px;
  }
}
</style>
