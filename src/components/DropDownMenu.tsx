"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import axios from "axios";

type Category = {
  categoryName: string;
  _id: string;
};

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

  const [allCategories, setAllCategories] = React.useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL_DEV}/category`
        );

        setAllCategories(response.data.data.category);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        {allCategories?.map((category: Category) => {
          return (
            <Link
              href={{
                pathname: "/mainPage",
                query: { category: category.categoryName },
              }}
              key={category._id}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={cn(
                  "p-2",
                  "hover:bg-gray-100 hover:text-primary",
                  "transition-colors duration-300 rounded-sm"
                )}
              >
                <span>{category.categoryName}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropDownMenu;
