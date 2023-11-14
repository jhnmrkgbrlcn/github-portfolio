import { useState } from 'react'
import './App.css'
import Search from './components/controls/search'
import searchIcon from "C:/Users/carre/Desktop/ITP75-Carrera/React/ITP75/ITP75/react-logs/src/assets/searcIcon.png"
function App() {
  const [count, setCount] = useState(0)

  return (                                                                
    <>
      <h1>LOGS</h1><Search name="search-name"/>
      <div>
        <table>
          <tr>
            <th>#</th>
            <th>Description</th>
            <th>Time Created</th>
            <th>Date Created</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>1</td>
            <td>This is a test</td>
            <td>1:00:00</td>
            <td>14/11/2023</td>
            <td>Test User</td>
            <td>...</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default App
