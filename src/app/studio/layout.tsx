export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        <p>Studio Sections All</p>
        {children}
    </section>
  )
}