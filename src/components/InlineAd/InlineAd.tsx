import { inlineAdContainer, inlineAdPlacholder } from "./InlineAd.css"
import { inlineAdProps } from "./InlineAd.types"

export const InlineAd: React.FunctionComponent<inlineAdProps> = (props) => {
  const { id } = props || {};

  return (
    <div className={inlineAdContainer}>
      <div id={`ad_container_${id}`} className={ inlineAdPlacholder }>
        <div id={`div-gpt-ad-${id}`} />
      </div>
    </div>
  )
}
