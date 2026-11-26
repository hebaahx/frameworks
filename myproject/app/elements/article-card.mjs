export default function ArticleCard({ html, state }) {
  const { attrs } = state

  return html`
    <img src="${attrs.image}" alt="${attrs.alt || ''}">
    <a href="#">
      <h2>${attrs.heading}</h2>
    </a>
  `
}