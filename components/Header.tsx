"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { useUser } from "@clerk/nextjs"
import BreadCrumbs from "./BreadCrumbs"

const Header = () => {

    const {user} = useUser()
  return (
    <div className="flex item-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">{user?.firstName}{`'s`} Space</h1>
      )}
        <BreadCrumbs/>
      <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
            <UserButton/>
        <SignedIn>

        </SignedIn>
      </div>
    </div>
  )
}

export default Header
