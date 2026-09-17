import type { ComponentPropsWithoutRef, ElementType } from "react";
import type { Bilingue } from "@/content/types";

interface Props {
  value: Bilingue;
  as?: ElementType;
  className?: string;
}

export default function Bi({
  value,
  as: Tag = "span",
  className,
  ...rest
}: Props & Omit<ComponentPropsWithoutRef<ElementType>, keyof Props>) {
  return (
    <Tag className={className} {...rest}>
      <span lang="es">{value.es}</span>
      <span lang="en">{value.en}</span>
    </Tag>
  );
}
