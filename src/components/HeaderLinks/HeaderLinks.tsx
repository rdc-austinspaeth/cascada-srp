import { headerLink, headerLinksContainer } from "./HeaderLinks.css";
import { HeaderLinksProps } from "./HeaderLinks.types";

export const HeaderLinks: React.FunctionComponent<HeaderLinksProps> = () => {
  return (
    <div className={headerLinksContainer}>
      <div className={headerLink}>Manage rentals</div>
      <div className={headerLink}>Advertise</div>
    </div>
  )
}

export default HeaderLinks;
