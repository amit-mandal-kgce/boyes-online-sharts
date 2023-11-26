export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <p>Mens Sections All</p>
        {children}
    </section>
  )
}