import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
