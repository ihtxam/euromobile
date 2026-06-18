import { motion } from "framer-motion";

// Shared scroll-reveal wrapper for clean staggered fade-up
export const Reveal = ({ children, delay = 0, className = "", testid }) => (
  <motion.div
    data-testid={testid}
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);
