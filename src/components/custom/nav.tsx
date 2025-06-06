import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return <section className="bg-gray-200 shadow-md w-full h-20 flex fixed items-center justify-between sm:px-16 px-4 py-6 z-10">
        <div className="flex items-center gap-4">
            <Image src={"/images/rope.png"} width={50} height={50} alt="Logo" className="border border-black rounded-full " />
            <h1 className="sm:text-2xl text-xl font-bold">Saurabh Chauhan</h1>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger className="sm:invisible visible">
                <Menu className="w-8 h-8 text-gray-800" />
            </DropdownMenuTrigger >
            <DropdownMenuContent className="bg-white shadow-lg rounded-lg p-4 w-48 sm:invisible visible">
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="#about" className="text-gray-800 hover:text-blue-600">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#certifications" className="text-gray-800 hover:text-blue-600">Certifications</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#publications" className="text-gray-800 hover:text-blue-600">Publications</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="#contacts" className="text-gray-800 hover:text-blue-600">Contact</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <nav className="w-0 sm:w-auto absolute sm:static">
            <NavigationMenu className="invisible sm:visible">
                <NavigationMenuList className="flex items-center gap-8">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#about" className="text-lg font-semibold">About</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#certifications" className="text-lg font-semibold">Certifications</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#projects" className="text-lg font-semibold">Projects</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#publications" className="text-lg font-semibold">Publications</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#contacts" className="text-lg font-semibold">Contact</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    </section>

}