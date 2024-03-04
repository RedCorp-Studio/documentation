import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 'RedCorp Studio',
  logoLink: '/',
  chat: {
    link: 'https://discord.redcorp.studio',
  },
  footer: {
    text: 'RedCorp Studio © 2020 - 2023',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – RedCorp Studio'
      }
    }
  }
}

export default config