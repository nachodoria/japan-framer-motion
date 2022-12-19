import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom';
import Japan from '../pages/japan';
import Tokyo from '../pages/Tokyo';
import Osaka from '../pages/Osaka';
import Kyoto from '../pages/Kyoto';
import Nagoya from '../pages/Nagoya';

function AnimatedRoutes() {
  return (
    <AnimatePresence>
        <Routes>
            <Route exact path="/" element={<Japan />} />

            <Route exact path="/tokyo" element={<Tokyo />} />

            <Route exact path="/osaka" element={<Osaka />} />

            <Route exact path="/kyoto" element={<Kyoto />} />

            <Route exact path="/nagoya" element={<Nagoya />} />

        </Routes>
</AnimatePresence>
  )
}

export default AnimatedRoutes;