import React, { PropsWithChildren } from 'react'

import TopBar from './TopBar';

const MainLayout = ({children}:PropsWithChildren) => {
  return (
    <>
        <TopBar/>
        {children}
    </>
  )
}

export default MainLayout