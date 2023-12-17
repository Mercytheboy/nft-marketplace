import { motion } from "framer-motion";

interface ButtonProps {
  label: string;
  variant?: "solid" | "outline";
  type?: "button" | "reset" | "submit";
  size?: "xs" | "sm" | "md" | "lg";
  leftIcon?: React.ReactElement;
  onClick?: (e?: React.SyntheticEvent) => void;
}
function Btn({ label, leftIcon, variant = "solid", onClick }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-start gap-2 px-8 py-4 rounded-2xl text-white capitalize border-2 border-purple-500 ${
        variant === "solid"
          ? "bg-purple-500 hover:bg-purple-800 hover:border-purple-800"
          : "bg-transparent hover:border-purple-800"
      } duration-200 transition-colors ease-out`}
      onClick={onClick}>
      {leftIcon && leftIcon}
      <span>{label}</span>
    </motion.button>
  );
}

export default Btn;
