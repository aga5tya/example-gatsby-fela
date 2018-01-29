import React from "react"
import { renderToString } from "react-dom/server"
import { Provider } from 'react-fela'

import { createRenderer } from 'fela'
import { renderToMarkup, renderToSheetList } from 'fela-dom'

const renderer = createRenderer()

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const bodyHTML = renderToString(
    <Provider renderer={renderer}>
      {bodyComponent}
    </Provider>
  );
  const sheetList = renderToSheetList(renderer)
  const elements = sheetList.map(({ type, css, media, support }) =>
    <style
      dangerouslySetInnerHTML={{ __html: css }}
      data-fela-type={type}
      data-fela-support={support}
      key={`${type}-${media}`}
      media={media}
    />
  )
  replaceBodyHTMLString(bodyHTML)
  setHeadComponents(elements)
}
