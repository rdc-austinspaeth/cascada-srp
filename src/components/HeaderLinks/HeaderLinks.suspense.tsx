import { headerLinksContainerSuspense, headerLinkSuspense } from "./HeaderLinks.css";
import { HeaderLinksProps } from "./HeaderLinks.types";

export const HeaderLinksSuspense: React.FunctionComponent<HeaderLinksProps> = () => {
  return (
    <div className={headerLinksContainerSuspense}>
      <div style={{ width: 119.7 }} className={headerLinkSuspense} />
      <div style={{ width: 74.62 }} className={headerLinkSuspense} />
    </div>
  )
}

export default HeaderLinksSuspense;
