"use client"; 

import { useEffect } from "react";
import Tank from "@/components/Tank";

export default function ProductPage() {
  useEffect(() => {
    document.title = "Montre Tank Must de Cartier - Petit modèle | Richartistique Le Brassus et Cartier MC";
  }, []);

  return <Tank />;
}