export default function ArticleCard({ html, state }) {
  const { attrs } = state

  return html`
    <a href="#">
      <h2>${attrs.heading}</h2>
    </a>
  `
}