import React, { forwardRef } from "react";
import { Element as ScrollElement } from "react-scroll";

const ScrollElementComponent = ScrollElement as any;

export type IndexSectionProps = {
  children: React.ReactNode;
  title: string;
  classNames?: string;
};

export default function IndexSection(props: IndexSectionProps) {
  const { children, title, classNames } = props;

  return (
    <section>
      <ScrollElementComponent
        name={title.toLowerCase()}
        className={`pt-16 p-12 text-sm flex flex-col items-center ${classNames}`}
      >
        <div data-testid="index-section" className="flex flex-row w-full">
          <h1 className="font-5xl my-8 font-display">{title}</h1>
        </div>
        {children}
      </ScrollElementComponent>
    </section>
  );
}
