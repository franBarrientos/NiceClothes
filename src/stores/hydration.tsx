"use client"; // (a)

import * as React from "react";
import useCartStore from "@/stores/cartStore";

const Hydration = () => {
  React.useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;
