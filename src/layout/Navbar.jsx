import { Menu, X } from "lucide-react"
import { Button } from "../components/Button"
import { useState } from "react"

const navLink = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return <header className="fixed top-0 right-0 left-0 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                VT<span className="text-primary">,</span>
            </a>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {navLink.map((links, index) => (
                        <a href={links.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {links.label}</a>
                    ))}
                </div>
            </div>
            {/*CTA Button*/}
            <div className="hidden md:block">
                <Button size="sm">
                    Contact Me
                </Button>
            </div>
            {/*Mobile Menu Button*/}
            <button className="md:hidden p-2 text-foreground cursor-pointer"
                onClick={() => {
                    setIsMobileMenuOpen((prev) => !prev
                    )
                }}>
                {isMobileMenuOpen ? <X size={24} /> : < Menu size={24} />}
            </button>
        </nav>
        {/* Mobile Menu Button*/}
        {isMobileMenuOpen &&
            (<div className="md:hidden glass-strong animate-fade-in ">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLink.map((links, index) => (
                        <a href={links.href} key={index} className="text-lg text-muted-foreground hover:text-foreground py-2">
                            {links.label}</a>
                    ))}
                    <Button>
                        Contact Me
                    </Button>
                </div>
            </div>)}
    </header>
}