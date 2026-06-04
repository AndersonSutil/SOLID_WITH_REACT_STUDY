import HeroBanner, { HeroBannerProps } from "../HeroBanner";

const BackgroundBanner = ({ backgroundImage, ...props }: HeroBannerProps) =>
     <HeroBanner backgroundImage={backgroundImage} {...props} />;

export default BackgroundBanner;