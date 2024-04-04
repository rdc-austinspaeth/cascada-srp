import { NavigationPanel } from "../NavigationPanel";

import { activeBorder, linkText, navigationLinkContainer } from "./NavigationLink.css";
import { NavigationLinkProps } from "./NavigationLink.types";

export const NavigationLink: React.FunctionComponent<NavigationLinkProps> = (props) => {
  const { text, active, width } = props || {};

  return (
    <button className={navigationLinkContainer}>
      <div dangerouslySetInnerHTML={{ __html: text }} className={linkText} />
      <div className={activeBorder} style={{ width: width + 15, backgroundColor: active ? '#2b2b2b' : 'transparent' }} />
      <NavigationPanel panelType={text} />
    </button>
  )
}

export default NavigationLink;
