import { activeBorder, linkText, navigationLinkContainer } from "./NavigationLink.css";
import { NavigationLinkProps } from "./NavigationLink.types";

export const NavigationLink: React.FunctionComponent<NavigationLinkProps> = (props) => {
  const { text, active } = props || {};

  return (
    <div className={navigationLinkContainer}>
      <div dangerouslySetInnerHTML={{ __html: text }} className={linkText} />
      <div className={activeBorder} style={{ backgroundColor: active ? '#2b2b2b' : 'transparent' }} />
    </div>
  )
}

export default NavigationLink;
