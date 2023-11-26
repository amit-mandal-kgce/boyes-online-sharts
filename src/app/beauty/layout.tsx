export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <p>Beauty Sections All</p>
        {children}
    </section>
  )
}