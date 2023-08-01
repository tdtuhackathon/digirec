import React from 'react'
import Layout from '../components/Layout'
import Pinata from '../components/Pinata'

function CreateProduct({wallet}) {
  return (
    <Layout wallet={wallet}>
        <div className='h-full w-full flex justify-center items-center'>
            <Pinata />
        </div>
    </Layout>
  )
}

export default CreateProduct