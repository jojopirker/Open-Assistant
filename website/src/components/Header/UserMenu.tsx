import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

import { Button, ColorModeScript, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";

export function UserMenu() {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();
  if (!session) {
    return <></>;
  }
  if (session && session.user) {
    const email = session.user.email;
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
          <MenuButton as={Button} >
            <div className="flex items-center gap-4 rounded-full">
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
              <MenuItem>
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
                </a></MenuItem>
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
            <MenuItem>
              <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  }
}

export default UserMenu;
