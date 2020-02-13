import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
    logoContainer: {
        height: '100%',
        width: '12.5rem',
        margin: '0.5rem 2rem 0 2rem',
        backgroundImage: 'url(./img/logo.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(225,112,118, 0.8)',
        borderRadius: '100%',
        border: '1px solid rgba(256,256,256,0.4)',
        transition: 'all 1.5s'
    },
    open: {
        cursor: 'pointer',
        backgroundColor: '#fbe0c5',
    }
})

const Logo = props => {
    const { setShow, show } = { ...props }
    return (
        <div className={css(styles.logoContainer, show && styles.open)} onClick={setShow} />
    )
}

export default Logo