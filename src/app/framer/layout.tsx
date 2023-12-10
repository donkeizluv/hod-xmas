import FitLayout from "@/components/Layouts/FitLayout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <FitLayout
      minW="100%"
      justifyContent="top"
      alignItems="center"
      flexDirection="row"
      bgImage="linear-gradient(180deg, rgba(0, 0, 0, 0.80) 45%, rgba(0, 0, 0, 0.24) 100%), url('/assets/images/pixel_forest_bg.jpg')"
      bgBlendMode="darken"
      bgSize="cover"
      bgPos="50% 50%"
    >
      {children}
    </FitLayout>
  );
}
