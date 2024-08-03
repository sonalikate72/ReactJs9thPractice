import React, { useEffect, useState } from 'react'
import UseOnlineStatus from './UseOnlineStatus'
import UseAuth from './UseAuth';

const Customhookexample = () => {
    const isConnected = UseOnlineStatus();
    const isAuthenticated = UseAuth();
   
  return (
    <div>
        <h2><strong>Custom-Hook</strong></h2>
        <h3>Status is:  {isConnected ? '✅ Online' : '❌ Disconnected'}</h3>
        {/* <h2>{isAuthenticated ?'✅ Authenticated' : '❌ Disconnected' }</h2> */}
    </div>
  )
}

export default Customhookexample