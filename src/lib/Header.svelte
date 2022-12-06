<header>
  <div class="logo">
    <h1><span class="emoji">✨</span> Cool Companies</h1>
  </div>
</header>

<style>
  header {
    background-color: var(--background-color);
    border-bottom: 2px solid var(--main-color);
    padding: 20px;
  }
  .logo {
    background-color: var(--main-color);
    width: 300px;
    max-width: calc(100% - 2 * 20px);
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
  }
  h1 {
    font-family: var(--font-family-headings);
    font-size: var(--font-size-logo);
    font-weight: 400;
    color: var(--bright-color);
    line-height: 1;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.25em;
  }
  .emoji {
    display: flex;
    align-items: center;
    height: var(--font-size-logo);
    font-size: 1.25em;
  }
</style>
