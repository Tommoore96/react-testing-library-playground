import React, { useState, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  error: null,
  data: null,
}

function dataReducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        data: action.data,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        data: null,
      }
    }
    default: {
      return state
    }
  }
}

export default function Fetch({ url }) {
  const [{ error, data }, dispatch] = useReducer(
    dataReducer,
    initialState
    )
    const [buttonClicked, setButtonClicked] = useState(false)

  const fetchData = async () => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response

        dispatch({ type: 'SUCCESS', data: data.data })
        setButtonClicked(true)
      })
      .catch((error) => {
        dispatch({ type: 'ERROR', error })
      })
  }

  const buttonText = buttonClicked ? 'Ok' : 'Load data'

  return (
    <div>
      <button onClick={fetchData} disabled={buttonClicked}>
        {buttonText}
      </button>
      {data && <h1>Hello {data.first_name}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
}