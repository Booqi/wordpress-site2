/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Mission from "./components/Mission";
import Values from "./components/Values";
import Team from "./components/Team";
import Edge from "./components/Edge";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Mission />
        <Values />
        <Team />
        <Edge />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
