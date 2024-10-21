// declare type MagicButton = {};

import { ReactNode } from "react";

declare interface MagicButtonParams {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}
