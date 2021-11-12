<script lang="ts">
  function exit(): void {
    window.close();
  }
</script>

<navbar>
  <div class="nav">

    <div class="title">
      <h1>EMI Client</h1>
    </div>
  
    <div class="navigation">
      <a href="/connect/">Connect</a>
      <a href="/settings/">Settings</a>
      <a href="/data/">Data</a> &nbsp; &nbsp; &nbsp; &nbsp; 
      <button class="button-dark" on:click={exit}>Exit</button>
    </div>
  
  </div>
</navbar>

<style lang="scss">
.nav {
  padding-left: 1em;
  padding-right: 1em;
  border-bottom: 1px solid black;
  padding-bottom: .5em;
}

h1 {
  color: #ff003b;
}

a {
  color: black;
  border: 1px solid black;
  padding: 3px 7px 3px 7px;
  border-radius: 5px;
}

a:hover {
  color: #ff003b;
  border: 1px solid #ff003b;
}

button {
  @extend a;
  background-color: transparent;
}

.nav {
  display: flex;
  height: 50px;      /* optional; just for demo */
  background: white;
}

.title {
  flex: 1;          /* shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.navigation {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin: 0 5px;
    text-decoration: none;
  }
}

/*.header-title {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff003b;
}*/
</style>