'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/logo.png'; // Adjust the path if needed

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-center gap-8`}
    >
      <div className="flex-grow" />
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt="Arara Logo"
          width={44} // Adjust width as needed to match the title size
          height={44} // Adjust height as needed to match the title size
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          ARARASWAP
        </h2>
      </div>
      <div className="flex-grow" />
    </div>
  </motion.nav>
);

export default Navbar;
