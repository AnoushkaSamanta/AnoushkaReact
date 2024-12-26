import React from 'react'
import Row from '../Row/Row'
import Box from '../Box/Box'

function TicTacToe() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col items-center gap-8'>
        <h1 className='title text-3xl font-semibold text-zinc-600 mt-5'>Tic-Tac-Toe</h1>
        <div className='board'>
          <Row>
            <Box/>
            <Box/>
            <Box/>
          </Row>
          <Row>
            <Box/>
            <Box/>
            <Box/>
          </Row>
          <Row>
            <Box/>
            <Box/>
            <Box/>
          </Row>
        </div>
      <button className='bg-zinc-800 px-6 py-2 text-xl rounded-full text-white'>Reset</button>
    </div>
  )
}

export default TicTacToe
