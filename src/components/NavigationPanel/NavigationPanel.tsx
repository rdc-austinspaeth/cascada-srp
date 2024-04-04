import { panelContents } from "../../constants/panelContents";
import { column, headline, line, link, panelContainer } from "./NavigationPanel.css";
import { NavigationPanelProps } from "./NavigationPanel.types";

export const NavigationPanel: React.FunctionComponent<NavigationPanelProps> = (props) => {
  const { panelType } = props || {};

  if (panelType === 'My Home') return;
  
  return (
    <section className={panelContainer}>
      <div className={column}>
        {panelContents[panelType]?.left?.map((element: any) => {
          if (element.elementType === 'headline') {
            return <h3 className={headline}>{element.text}</h3>
          }
          if (element.elementType === 'link') {
            return <a className={link} href="#">{element.text}</a>
          }
          if (element.elementType === 'line') {
            return <div className={line} />
          }
        })}
      </div>
      <div className={column}>
        {panelContents[panelType]?.middle?.map((element: any) => {
          if (element.elementType === 'headline') {
            return <h3 className={headline}>{element.text}</h3>
          }
          if (element.elementType === 'link') {
            return <a className={link} href="#">{element.text}</a>
          }
          if (element.elementType === 'line') {
            return <div className={line} />
          }
        })}
      </div>
      <div className={column}>
        {panelContents[panelType]?.right?.map((element: any) => {
          if (element.elementType === 'headline') {
            return <h3 className={headline}>{element.text}</h3>
          }
          if (element.elementType === 'link') {
            return <a className={link} href="#">{element.text}</a>
          }
          if (element.elementType === 'line') {
            return <div className={line} />
          }
        })}
      </div>
    </section>
  )
}
