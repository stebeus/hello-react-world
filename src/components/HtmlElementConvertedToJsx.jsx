export function HtmlElementConvertedToJsx() {
  return (
    <section>
      <h2>HTML element that got converted to JSX</h2>
      <svg aria-label="Circle">
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <h3>Random form</h3>
        <input type="text" placeholder="I am a random input!" />
      </form>
    </section>
  );
}
