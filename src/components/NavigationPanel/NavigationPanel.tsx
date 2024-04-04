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
            return <h3 key={`left-${element.elementType}-${element.text}`} className={headline}>{element.text}</h3>
          }
          if (element.elementType === 'link') {
            return <a key={`left-${element.elementType}-${element.text}`} className={link} href="#">{element.text}</a>
          }
          if (element.elementType === 'line') {
            return <div key={`left-${element.elementType}-${panelType}`} className={line} />
          }
        })}
      </div>
      <div className={column}>
        {panelContents[panelType]?.middle?.map((element: any, index: number) => {
          if (element.elementType === 'headline') {
            return <h3 key={`mid-${element.elementType}-${element.text}`} className={headline}>{element.text}</h3>
          }
          if (element.elementType === 'link') {
            return <a key={`mid-${element.elementType}-${element.text}`} className={link} href="#">{element.text}</a>
          }
          if (element.elementType === 'line') {
            return <div key={`mid-${element.elementType}-${panelType}-${index}`} className={line} />
          }
        })}
      </div>
      <div className={column}>
        {panelContents[panelType]?.right?.map((element: any) => {
          if (element.elementType === 'headline') {
            return <h3 key={`right-${element.elementType}-${element.text}`} className={headline}>{element.text}</h3>
          }
          if (element.elementType === 'link') {
            return <a key={`right-${element.elementType}-${element.text}`} className={link} href="#">{element.text}</a>
          }
          if (element.elementType === 'line') {
            return <div key={`right-${element.elementType}-${panelType}`} className={line} />
          }
        })}
      </div>
    </section>
  )
}
