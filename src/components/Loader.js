import React from 'react'
import { Box } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Box className='loader'>
            <InfinitySpin color="grey" />
        </Box>
    )
}

export default Loader