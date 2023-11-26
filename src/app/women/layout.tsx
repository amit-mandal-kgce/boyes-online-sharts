export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <p>Women Sections All</p>
        {children}
    </section>
  )
}