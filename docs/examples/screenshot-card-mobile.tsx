import { ScreenshotCard } from '@/components/ui/screenshot-card';

export default function ScreenshotCardMobile() {
  return (
    <ScreenshotCard
      className="w-48"
      device="mobile"
      src="./examples/shot-mobile.svg"
      alt="Northwind mobile product page"
      brand="Northwind"
      pageType="Product page"
    />
  );
}
