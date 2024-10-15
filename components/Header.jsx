import Link from "next/link";
import { Button } from "./ui/button";
import { Span } from "next/dist/trace";

const Header = () => {
    return (
    <header className="py-8 xl:py-12 text-white ">
        <div className="container mx-auto">
            <Link href="/">
            <h1 className="text-4xl font-semibold">Zheer Barzan <span>.</span> </h1>
            </Link>
            header
        </div>
    </header>
    );
}

export default Header; 