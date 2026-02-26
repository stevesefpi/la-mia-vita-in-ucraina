import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: "../../../public/fonts/Roboto/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-roboto",
});

export const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins/Poppins-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  preload: false,
  variable: "--font-poppins",
});
