<template lang="">
  <div>
    <Panel header="FAQ" class="create-card">
      <div>
        <h2>What is this?</h2>
        <p>
          This is a tool for Dungeon Masters to help manage combat in Dungeons and Dragons 5th
          Edition. It is designed to be used on a laptop or tablet during combat or to prep. It has
          over 2000 built in monsters and NPCs, as well as a way to create your own. It also has a
          way to track initiative and conditions.
        </p>
        <h2>How do I use it?</h2>
        <p>
          On the builder screen you can add players and monsters. For monsters you can add either
          statblocks from the database which includes over 2000 monster you can search through and
          filter, or you can use the lazy statblocks which are more simple general use statblocks
          intended to use alongside Sly Flourish's Forge of Foes. You can add Players in the Top
          panel and choose their level as well. This will factor into the difficulty calculation.
        </p>
        <p>
          Once you have added all the players and monsters you want to use, you can start the
          encounter. This will take you to the encounter screen where initiative will automatically
          be rolled for combatants using their modifier and quick information about the combatants
          will be displayed. You can then track initiative and conditions from this screen. If you
          want to see more information about a monster, you can click on their name to open a new
          tab with their statblock.
        </p>
        <p>
          If you just want to use the tool to track initiative and conditions, you can use the
          encounter page and just add the combatants you need and then add their initiative modifier
          to the initiative that they rolled.
        </p>
        <h2>What is the Lazy Benchmark?</h2>
        <p>
          The Lazy Benchmark is a quick way to determine the difficulty of an encounter. It is based
          on the number of players and their levels. It is a quick way to determine if an encounter
          is deadly or not. It is based off
          <a
            href="https://slyflourish.com/lazy_5e_monster_building_resource_document.html#lazyencounterbenchmark"
            target="_blank"
          >
            the Lazy 5e Monster Building Resource Document</a
          >
          by Sly Flourish.
        </p>
        <h2>Where are the monsters from?</h2>
        <p>
          The monsters are from the
          <a href="https://open5e.com/" target="_blank">Open5e</a> project. They have a large
          collection of monsters and NPCs that are free to use. The statblocks are all in the
          database and can be searched and filtered. They use the OGL to aggregate many 5e sources
          into one, including Kobold Press, Level Up Advanced 5e, and more.
        </p>
        <h2>Is this Open Source?</h2>
        <p>
          Yes! This project is open source and can be found on
          <a href="https://github.com/benhodges65/artisanal-combat-tracker" target="_blank"
            >GitHub</a
          >, feel free to contribute, fork, or use whatever. Just make sure to credit and properly
          keep the licensing.
        </p>
        <h2>Who made this?</h2>
        <p>
          Hi, I am Ben! I am the creator of this site! I wanted to give my love back to the RPG
          community and this seemed like a great way to do it! If you want to message me for
          requests you can find me on discord under the username BenHolder
        </p>
        <p></p>
      </div>
    </Panel>
    <Panel header="Licensing">
      <p>
        The licensing page for this project can be found here:
        <a href="licensing.html">Licensing</a>
      </p>

      <p>This project also uses content from the below 2 sources:</p>
      <blockquote>
        This work includes material taken from the
        <a href="https://slyflourish.com/lazy_5e_monster_building_resource_document.html"
          >Lazy GM's 5e Monster Builder Resource Document</a
        >
        written by Teos Abadía of <a href="https://alphastream.org">Alphastream.org</a>, Scott
        Fitzgerald Gray of <a href="https://insaneangel.com">Insaneangel.com</a>, and Michael E.
        Shea of <a href="https://slyflourish.com">SlyFlourish.com</a>, available under a
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
          >Creative Commons Attribution 4.0 International License</a
        >.
      </blockquote>
      <blockquote>
        This work includes material taken from the
        <a href="https://slyflourish.com/lazy_gm_resource_document.html"
          >Lazy GM's Resource Document</a
        >
        by Michael E. Shea of <a href="https://slyflourish.com">SlyFlourish.com</a>, available under
        a
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"
          >Creative Commons Attribution 4.0 International License</a
        >.
      </blockquote>
    </Panel>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: rgb(102, 102, 110);
}

a:hover {
  text-decoration: underline;
}

div {
  margin-bottom: 10px;
}
</style>
