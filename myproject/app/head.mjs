import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  const { pageTitle = '' } = store

  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html lang="nl">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${styles}
      <link rel="stylesheet" href="/_public/style.css">
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="Nieuws en opinie over de HvA.">
    </head>
`
}