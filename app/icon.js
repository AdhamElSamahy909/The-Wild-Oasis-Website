import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

async function Icon() {
  const iconBuffer = await fetch(
    new URL("./logo-img.png", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    <img
      src={iconBuffer}
      width={size.width}
      height={size.height}
      alt="Icon Image"
    />,
    { ...size },
  );
}

export default Icon;
