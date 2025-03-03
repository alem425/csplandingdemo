"use client";
import React from "react";

type InputFieldsProps = {
  title: string;
  helpertext: string;
};

const InputField = ({ title, helpertext }: InputFieldsProps) => {
  return (
    <div className="flex flex-col my-3">
      <div className="text-black text-base font-bold">{title}</div>
      <input
        type="text"
        className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={helpertext}
      />
      {/* <div className="mt-1 text-xs text-gray-500">{helpertext}</div> */}
    </div>
  );
};

export default InputField;
