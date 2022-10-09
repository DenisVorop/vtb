
import React from 'react'

import { mustache } from '../utils/mustache'
import { sanitize } from '../utils/sanitize'

export const useContentRenderer = () => {
  const handler = React.useCallback((template: string, view: any, render = true) => {
    try {
      const code = mustache(template, view)
      return render ? <div
        dangerouslySetInnerHTML={{ __html: sanitize(code) }}
      /> : code
    } catch (e) {
      return template
    }
  }, [])
  return {
    r: handler,
  }
}
