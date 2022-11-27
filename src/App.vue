<template>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
<div class="graphs">
        <div
          class="tableauPlaceholder"
          id="viz1664896244831"
          style="position: relative"
        >
          <noscript
            ><a href="#"
              ><img
                alt="2022-2023 Premier League Expected Goals "
                src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2022-2023PremierLeagueExpectedGoals&#47;2022-2023PremierLeagueExpectedGoals&#47;1_rss.png"
                style="border: none" /></a></noscript
          ><object class="tableauViz" style="display: none">
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param
              name="name"
              value="2022-2023PremierLeagueExpectedGoals&#47;2022-2023PremierLeagueExpectedGoals"
            />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;20&#47;2022-2023PremierLeagueExpectedGoals&#47;2022-2023PremierLeagueExpectedGoals&#47;1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>
        <component :is="'script'" type="text/javascript">
          var divElement = document.getElementById("viz1664896244831");
          var vizElement = divElement.getElementsByTagName("object")[0];
          vizElement.style.width = "100%";
          vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
          var scriptElement = document.createElement("script");
          scriptElement.src =
            "https://public.tableau.com/javascripts/api/viz_v1.js";
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </component>
      </div></template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
    </script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
