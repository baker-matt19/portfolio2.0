import React from 'react';
import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-40 h-16 w-1 rounded-full hidden sm:block'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
    ></motion.div>
  )
}

