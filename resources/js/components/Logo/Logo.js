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
        // backgroundColor: 'rgba(225,112,118, 0.8)',
        backgroundColor: 'rgba(34,139,34, 0.8)',
        borderRadius: '100%',
        border: '1px solid rgba(256,256,256,0.4)',
        transition: 'all 1.5s',
        cursor: 'pointer',
    },
    open: {
        // backgroundColor: '#fbe0c5',
        backgroundColor: 'rgba(152,251,152, 0.9)',
    }
})

const Logo = props => {
    const { setShow, show } = { ...props }

    const toggleShow = () => {
        if (show) {
            setShow(false)
        } else {
            setShow('blog')
        }
    }

    return (
        <div className={css(styles.logoContainer, show && styles.open)} onClick={() => toggleShow()} />
    )
}

export default Logo