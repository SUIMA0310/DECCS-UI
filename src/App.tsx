import { RouterProvider } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Router from './Router'

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
          ログアウト
        </button>
      ) : (
        <button onClick={() => loginWithRedirect()}>ログイン</button>
      )}
      <RouterProvider router={Router()} />
    </div>
  )
}

export default App
