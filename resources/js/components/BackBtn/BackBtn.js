import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    navigateBtn: {
        position: 'fixed',
        top: '2rem',
        left: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '3rem',
        width: '3rem',
        backgroundColor: 'rgba(256,256,256,0.7)',
        color: 'rgba(30,30,30,0.7)',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    btn: {
        height: '80%',
        margin: '1rem'
    },
})

const BackBtn = props => {
    const { setShowBlogItem } = { ...props }
    return (
        <div className={css(styles.navigateBtn, styles.back)} onClick={() => { setShowBlogItem(false) }}>
            <img className={css(styles.btn)} src='./img/navIcons/back.svg' />
        </div>
    )
}

export default BackBtn