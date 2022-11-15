import { ReactNode } from "react";
import { BadgeLabel, Color } from "../../types";

interface IProps {
  label: BadgeLabel;
  color: Color;
  children: ReactNode;
}

export const Badge = ({ label, color, children }: IProps) => {
  return (
    <h4>
      <span className={`badge text-bg-${color}`}>
        {label}: {children}
      </span>
    </h4>
  );
};
