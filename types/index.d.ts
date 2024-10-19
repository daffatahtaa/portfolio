// declare type MagicButton = {};

import { ReactNode } from "react";

declare interface MagicButton {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

declare interface NavItem {
    name: string,
    link: string,
    icon: React.ReactNode
}