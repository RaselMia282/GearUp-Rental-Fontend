"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Menu,
  X,
  User,
  Settings,
  LogOut,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { logOut } from "@/service/logOut";

interface NavbarProps {
  user?: {
    id?: string;
    email?: string;
    name?: string;
    role?: string;
    image?: string;
  } | null;
}

export function Navbar({ user }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // logout function
  const handleLogOut = async () => {
    await logOut();
    router.refresh();
    router.push("/login");
  };

  const getFormattedName = () => {
    if (user?.name) {
      return user.name.charAt(0).toUpperCase() + user.name.slice(1);
    }
    if (user?.email) {
      const emailName = user.email.split("@")[0];
      return emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }
    return "User";
  };

  const getInitials = () => {
    const name = getFormattedName();
    return name.slice(0, 1).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-orange-600">
            GearUp
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <Link
            href="/gears"
            className="transition-colors hover:text-foreground"
          >
            Gears
          </Link>
          <Link
            href="/categories"
            className="transition-colors hover:text-foreground"
          >
            Categories
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Right Section: Desktop Profile & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Desktop User Profile / Auth */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 outline-none rounded-full p-1 hover:bg-accent transition-colors cursor-pointer">
                  <Avatar className="h-9 w-9 border border-orange-200 shadow-sm">
                    <AvatarImage src={user.image} alt={getFormattedName()} />
                    <AvatarFallback className="bg-orange-600 font-semibold text-white">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col text-left pr-1">
                    <span className="text-sm font-semibold leading-none text-foreground">
                      {getFormattedName()}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium capitalize mt-0.5">
                      {user.role?.toLowerCase() || "member"}
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-56 p-2 shadow-lg rounded-xl"
                >
                  {/* Header Profile Info (Base UI safe wrapper) */}
                  <div className="p-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold leading-none">
                        {getFormattedName()}
                      </p>
                      {user.role && (
                        <Badge
                          variant="outline"
                          className="text-[10px] px-1.5 py-0 border-orange-300 text-orange-600 bg-orange-50"
                        >
                          {user.role}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </p>
                  </div>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => router.push("/dashboard")}
                      className="cursor-pointer rounded-lg py-2"
                    >
                      <User className="mr-2.5 h-4 w-4 text-muted-foreground" />
                      <span className="font-bold">Dashboard</span>
                    </DropdownMenuItem>

                    {user.role === "ADMIN" && (
                      <DropdownMenuItem
                        onClick={() => router.push("/dashboard")}
                        className="cursor-pointer rounded-lg py-2"
                      >
                        <ShieldCheck className="mr-2.5 h-4 w-4 text-orange-500" />
                        <span>Admin Dashboard</span>
                      </DropdownMenuItem>
                    )}


                    {/* provider dashboard */}

                    {user.role === "PROVIDER" && (
                      <DropdownMenuItem
                        onClick={() => router.push("/dashboard")}
                        className="cursor-pointer rounded-lg py-2"
                      >
                        <ShieldCheck className="mr-2.5 h-4 w-4 text-orange-500" />
                        <span>Admin Dashboard</span>
                      </DropdownMenuItem>
                    )}


                    <DropdownMenuItem
                      onClick={() => router.push("/dashboard")}
                      className="cursor-pointer rounded-lg py-2"
                    ></DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={handleLogOut}
                    className="cursor-pointer rounded-lg py-2 text-red-600 focus:bg-red-50 focus:text-red-600"
                  >
                    <LogOut className="mr-2.5 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2 cursor-pointer">
                <Button variant="ghost" onClick={() => router.push("/login")}>
                  Sign in
                </Button>
                <Button
                  className="bg-orange-600 hover:bg-orange-700"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-sm">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link
              href="/gears"
              className="hover:text-orange-600 transition-colors"
            >
              Gears
            </Link>
            <Link
              href="/categories"
              className="hover:text-orange-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2 border-t">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border border-orange-200">
                    <AvatarImage src={user.image} alt={getFormattedName()} />
                    <AvatarFallback className="bg-orange-600 font-semibold text-white">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      {getFormattedName()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {user.email}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 pt-2 text-sm font-medium">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <User className="h-4 w-4" /> Profile
                  </Link>
                  {user.role === "ADMIN" && (
                    <Link
                      href="/admin"
                      className="flex items-center gap-2 text-orange-600"
                    >
                      <ShieldCheck className="h-4 w-4" /> Admin Dashboard
                    </Link>
                  )}
                  <button className="flex items-center gap-2 text-red-600 pt-2">
                    <LogOut className="h-4 w-4" /> Log out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push("/login")}
                >
                  Sign in
                </Button>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
