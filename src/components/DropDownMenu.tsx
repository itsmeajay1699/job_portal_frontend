"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const DropDownMenu = ({ categories }: { categories: string[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  useOnClickOutside(navRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={navRef} className="h-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={buttonVariants({
          className:
            "flex items-center gap-2  h-full cursor-pointer hover:bg-gray-100 transition-colors duration-300",
          variant: "ghost",
        })}
      >
        <div className="">
          <span>Categories</span>
        </div>
        <div
          className={cn(
            "cursor-pointer",
            "flex items-center justify-center w-6 h-6",
            "transition-transform duration-300",
            "transform",
            isOpen ? "rotate-180" : ""
          )}
        >
          <ChevronDown />
        </div>
      </div>
      <div
        className={cn(
          "absolute top-full bg-primary",
          "border border-gray-300",
          "left-0 right-0 w-full z-10 rounded-md p-1",
          isOpen ? "block" : "hidden"
        )}
      >
        {categories.map((category) => {
          return (
            <Link
              href={{
                pathname: "/mainPage",
                query: { category: category },
              }}
              key={category}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={cn(
                  "p-2",
                  "hover:bg-gray-100 hover:text-primary",
                  "transition-colors duration-300 rounded-sm"
                )}
                key={category}
              >
                <span>{category}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownMenu;
