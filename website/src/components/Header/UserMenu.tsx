import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

export function UserMenu() {
  const { data: session } = useSession();

  if (!session) {
    return <></>;
  }
  if (session && session.user) {
    const accountOptions = [
      {
        name: "Account Settings",
        href: "/account",
        desc: "Account Settings",
        icon: FaCog,
        //For future use
      },
    ];
    return (
      <>
        <Menu>
          <MenuButton as={Button} borderRadius="9999px" ps="0" pe="4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/temp-avatars/av1.jpg"
                alt="Profile Picture"
                width="40"
                height="40"
                className="rounded-full p-1"
              />
              <p className="hidden lg:flex">{session.user.name || session.user.email}</p>
            </div>
          </MenuButton>
          <MenuList>
            {accountOptions.map((item) => (
              <MenuItem key={item.name}>
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.desc}
                  className="flex items-center rounded-md hover:bg-gray-200/50"
                >
                  <div className="p-4">
                    <item.icon aria-hidden="true" />
                  </div>
                  <div>
                    <p>{item.name}</p>
                  </div>
                </a>
              </MenuItem>
            ))}
            <MenuItem>
              <a
                className="flex items-center rounded-md hover:bg-gray-100 cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <div className="p-4">
                  <FaSignOutAlt />
                </div>
                <div>
                  <p>Sign Out</p>
                </div>
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  }
}

export default UserMenu;
