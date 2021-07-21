import React from 'react'

import Sidebar from './layout/components/Sidebar/Sidebar'
import Main from './layout/components/Main/Main'
import appCSS from './appcss.module.css'
import ViewInvoice from './layout/pages/Viewinvoice'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {


  return (
    <div className={appCSS.container}>
      <Router >
        <Sidebar />
        <Route exact path="/" component={Main} />
        <Route path="/:invoiceNumber" render={(rest) => <ViewInvoice {...rest} />} />
      </Router>
    </div>
    
  );
}

export default App;
