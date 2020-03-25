<template>
  <div>
    <div id="main" class="relative h-screen border-b-2 lg:grid lg:grid-cols-2 lg:gap-4">
    <!-- CSS: right sight border as line seperator 
      - Phone top - down
      - Lap right left.
    -->
    <div id="left" class="left lg:my-0 my-20 ">
      <div class="imgBorder border-r-2">
        <img id='img' src="" alt="" class="img m-auto w-64 main-image rounded-lg" >
      </div>
    </div>

    <!-- Main - Contents -->
    <div id="contents" class="m-auto px-4 lg:my-20 child">
      <div id="name" class="text-center lg:text-left text-6xl"></div>
      <div id="role" class="text-center lg:text-left text-3xl"></div>
      <div id="connects" class="text-center lg:text-left text-3xl my-4">
        
      </div>
      <div id="links" class="text-center lg:text-left"></div>
      <a target="_top" id="mail" class="block text-center lg:text-left text-sm my-2"></a>
    </div>
  </div>

  

  </div>
</template>

<script>
import {main} from '../assets/data';

export default {
  name: 'Minimal',
   data: () => ({
    main
  }),
  mounted() {

    
    const getDOM = selector => () => {
      return document.querySelector(selector);
    };
  
  document.title = `${main.name} | ${main.role}`
  
  // Values DOM nodes
  const dom = {
    main: {
      name: getDOM('#main #name'),
      mail: getDOM('#main #mail'),
      img: getDOM('#main #img'),
      role: getDOM('#main #role'),
      connects: getDOM('#main #connects'),
      links: getDOM('#main #links')
    },
    projects: getDOM('#projects'),
    logo: getDOM('#projects-page #logo')
  };
  
  function assignDOM(dom, value, options) {
    //console.log('dom, value, img:', dom, value, img);
  
    if (options && options.isImg) {
      dom.src = value;
      return;
    }
  
    if (options && options.isAdjacent) {
      dom.insertAdjacentHTML('afterbegin', value);
    }
  
    dom.innerHTML = value;
  }
  
  // Assigning
  
  // MAIN
  
  assignDOM(dom.main.name(), main.name);
  assignDOM(dom.main.mail(), main.mail);
  dom.main.mail().href = `mailto:${main.mail}?Subject=Hello%20again`;
  assignDOM(dom.main.img(), main.img, { isImg: true });
  assignDOM(dom.main.role(), main.role);
  // assignDOM(dom.main.links(), main.links)
  
  // External Links (ICONS)
  const connectsDOM = main.connects
    .map(
      ({ name, iconName, link }) =>
        `<a href=${link} target="_blank"><ion-icon name="${iconName}" title="${name}"></ion-icon></a>`
    )
    .join('\n');
  assignDOM(dom.main.connects(), connectsDOM);
  
  // Internal Links
  const getLinks = links =>
    links
      .map(({ name, link }) => `<a href="${link}" class="text-pink-500" >${name}</a>`)
      .map((link, index, links) => index === links.length - 1 ? link: `${link} - `)
      .join('\n');
  assignDOM(dom.main.links(), getLinks(main.links));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1024px) { 
  #main {
    font-size: 1.2em;
    overflow: hidden;
  }

  .main-image {
    width: 80%;
  }

  .child {
    position: relative;
    top: 50%;
    height: 100vh;
    width: 100%;
    margin-top: -128px; /* account for padding and border if not using box-sizing: border-box; */
    overflow: hidden;
  }

  #main .imgBorder {
    position: relative;
    top: 50vh;
    transform: translateY(-50%);
  }

}
</style>
