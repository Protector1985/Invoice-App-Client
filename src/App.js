import React from 'react'

import Sidebar from './layout/components/Sidebar/Sidebar'
import Main from './layout/components/Main/Main'
import appCSS from './appcss.module.css'


function App() {
  return (
    <div className={appCSS.container}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
