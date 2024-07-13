

// PARALLEL ROUTES IN USE!!
// the "archive" and "latest" will be received as props because of the directories we created that start with @ symbol.
export default function ArchiveLayout({archive, latest}) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id={'archive-filter'}>{archive}</section>
      <section id={'archive-latest'}>{latest}</section>
    </div>
  )
}
