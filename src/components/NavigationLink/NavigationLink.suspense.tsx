import { activeBorderSuspense, navigationLinkInnerSuspense, navigationLinkSuspense } from "./NavigationLink.css";
import { NavigationLinkProps } from "./NavigationLink.types";

export const NavigationLinkSuspense: React.FunctionComponent<NavigationLinkProps> = (props) => {
  const { width, active } = props || {};

  return (
    <div className={navigationLinkSuspense} style={{ width: width }}>
      <div className={navigationLinkInnerSuspense} />
      <div className={activeBorderSuspense} style={{ backgroundColor: active ? '#ccc' : 'transparent' }} />
    </div>
  )
}

export default NavigationLinkSuspense;
