import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="bg-white shadow-sm text-gray-800 flex justify-between p-5">
      <Link href="/" className="flex items-center text-4xl font-thin">
        <div className="rounded-full bg-white p-5">
          <Image src={Logo} alt="Company Logo" width={100} height={100} />
        </div>
        <div className="space-y-1">
          <h1 className="text-lg md:text-4xl">
            FormStack <span className="text-sm">&copy;</span>
          </h1>
          <h2 className="text-xs md:text-sm ">
            Your Customisable Feedback Form Creator
          </h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <UserButton showName />
        </SignedIn>

        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
