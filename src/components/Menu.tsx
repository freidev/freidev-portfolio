import { motion } from "framer-motion";
import { useState } from "react";
interface Props {
  className?: string;
}
const Menu: React.FC<Props> = ({ className }) => {
  const tabs: string[] = ["Home", "Skils", "Projects", "Resumer"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <ul className={`flex gap-5 ${className}`}>
      {tabs.map((item) => (
        <li
          key={item}
          className={item === selectedTab ? "selected" : ""}
          onClick={() => setSelectedTab(item)}
        >
          {`${item}`}
          {item === selectedTab ? (
            <motion.div className="underline" layoutId="underline" />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export { Menu };
