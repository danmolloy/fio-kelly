import React from "react";
import { Element } from "react-scroll";

type IndexSectionProps = {
  children: React.ReactNode
  title: string
  classNames?: string
}

export default function IndexSection(props: IndexSectionProps) {
  const { children, title, classNames } = props;

  return (
    <Element name={title.toLowerCase()} className={`pt-16 p-12 text-sm flex flex-col items-center ${classNames}`}>
      <div className="flex flex-row w-full">
      <h1 className="font-5xl my-8 font-display">{title}</h1>
      </div>
      {children}
    </Element>
  )
}