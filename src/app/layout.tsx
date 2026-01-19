import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className="bg-neutral-950 text-white antialiased selection:bg-white selection:text-black">
                {children}
            </body>
        </html>
    );
} 