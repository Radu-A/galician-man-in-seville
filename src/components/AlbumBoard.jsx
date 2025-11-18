import { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";

import { getAlbums } from "../firebase/getData";
import AlbumCard from "./AlbumCard";

// Extracted transition logic for cleaner component
// Calculates a staggered delay based on the card's column index.
const CARD_TRANSITION = (index) => ({
  duration: 0.5,
  ease: easeOut,
  // 'index % 3' gets the column (0, 1, or 2)
  delay: (index % 3) * 0.1,
});

export default function AlbumBoard() {
  const [albumList, setAlbumList] = useState(null);

  useEffect(() => {
    // Fetches albums on component mount
    getAlbums().then((res) => setAlbumList(res));
  }, []);

  if (!albumList) {
    return (
      // Changed loading text to English
      <p className="pt-10 text-center text-neutral-500">Loading albums...</p>
    );
  }

  return (
    <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 pt-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {albumList.map((album, index) => (
        <motion.div
          key={album.id}
          // Variants for fade-up animation
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          // Dynamic transition logic
          transition={CARD_TRANSITION(index)}
        >
          <AlbumCard album={album} />
        </motion.div>
      ))}
    </div>
  );
}
