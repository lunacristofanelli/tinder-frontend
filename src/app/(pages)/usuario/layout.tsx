"use client"


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="header">
                <h1>hola usuario</h1>
            </header>
            {children}
        </>
    );
}