import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const pages = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Peças",
    href: "/pecas",
  },
  {
    name: "Sobre",
    href: "/sobre",
  },
  {
    name: "Contato",
    href: "/contato",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between h-16 p-4 border-b-2 sticky top-0">
        <div className="h-full">
          <h1 className="flex text-2xl">
            <p className="text-[#E50914]">Fast</p>Flix{" "}
          </h1>
        </div>
        <nav className="flex align-center gap-5">
          {pages.map((page) => (
            <Link href={page.href}>{page.name}</Link>
          ))}
        </nav>

        <div className="flex gap-3">
          <Button variant={"outline"}>Entrar</Button>
          {/* <Button variant={"default"}>Inscrever-se</Button> */}
          <ModeToggle />
        </div>
      </header>
      {children}
    </>
  );
}
