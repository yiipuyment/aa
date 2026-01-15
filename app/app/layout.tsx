export const metadata = {
  title: 'AI Workspace Pro',
  description: 'Multi-provider AI workspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 overflow-hidden">{children}</body>
    </html>
  )
}
