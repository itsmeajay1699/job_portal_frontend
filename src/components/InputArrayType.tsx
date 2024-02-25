"use client";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Cross, XCircle } from "lucide-react";

interface InputArrayTypeProps {
  items: string[];
  setItems: (items: string[]) => void;
  register: any;
  label: string;
  id: string;
}

const InputArrayType = (props: InputArrayTypeProps) => {
  const ref = useRef<HTMLInputElement | any>(null);
  const updateItems = (value: string) => {
    const newItems = [...props.items, value];
    props.setItems(newItems);
  };

  const handleKey = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = ref.current.value;
      if (!value) return;
      updateItems(value);
      ref.current.value = "";
    } else {
      return;
    }
  };

  return (
    <div
      style={{}}
      className="w-full"
      onKeyDown={handleKey}
      onBlur={(e: any) => {
        const value: any = e.target.value;
        if (!value) return;
        updateItems(value);
        ref.current.value = "";
      }}
    >
      <Label className="" htmlFor={props.id}>
        {props.label}
      </Label>
      <div className="flex gap-2">
        <div className="flex">
          {props.items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-2 m-1 rounded-md relative"
            >
              {item}
              <div
                className="cursor-pointer absolute top-[-5px] right-[-5px]  w-5 h-5 bg-black text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
                onClick={() => {
                  const newItems = props.items.filter((i) => i !== item);
                  props.setItems(newItems);
                }}
              >
                <XCircle className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <Input {...props.register(props.id)} label={props.label} ref={ref} />
        </div>
      </div>
    </div>
  );
};

export default InputArrayType;
