import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './screens/Login';
import { Response } from './screens/Response';
import { LoginDesktop } from './screens/LoginDesktop';
import { DashboardSocial } from './screens/DashboardSocial';
import { ResponseScreen } from './screens/ResponseScreen';
import { DashboardFile } from './screens/DashboardFile';
import { DashboardEmail } from './screens/DashboardEmail';
import { ConnectorTransport } from './screens/ConnectorTransport';
import { SaveRun } from './screens/SaveRun';
import { UnifiedInbox } from './screens/UnifiedInbox';
import { Contacts } from './screens/Contacts';
import { ApiAuthorization } from './screens/ApiAuthorization';
import { SmsTriggers } from './screens/SmsTriggers';
import { LoginScreen } from './screens/LoginScreen';

const router = createBrowserRouter([
  {
    path: '/login-mobile',
    element: <Login />,
  },
  {
    path: '/login-1',
    element: <Login />,
  },
  {
    path: '/response-1',
    element: <Response />,
  },
  {
    path: '/*',
    element: <LoginDesktop />,
  },
  {
    path: '/dashboard-social-media',
    element: <DashboardSocial />,
  },
  {
    path: '/response-2',
    element: <ResponseScreen />,
  },
  {
    path: '/dashboard-file-storage',
    element: <DashboardFile />,
  },
  {
    path: '/dashboard-email-clients',
    element: <DashboardEmail />,
  },
  {
    path: '/connector-transport-data-response',
    element: <ConnectorTransport />,
  },
  {
    path: '/save-u38-run',
    element: <SaveRun />,
  },
  {
    path: '/unified-inbox',
    element: <UnifiedInbox />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/api-authorization',
    element: <ApiAuthorization />,
  },
  {
    path: '/sms-triggers',
    element: <SmsTriggers />,
  },
  {
    path: '/login-2',
    element: <LoginScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
