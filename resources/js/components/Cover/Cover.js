import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    cover: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: 'center',
        width: '100vw',
        minWidth: '100vw',
        height: '100vh',
        minHeight: '100vh',
        margin: '0',
        padding: '0',
        // backgroundImage: 'url(./img/tree.jpg)',
        backgroundImage: 'url(./img/spring.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    title: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: '3rem'
    }
})

const Cover = props => {
    return (
        <div className={css(styles.cover)}>
            {props.children}
        </div>
    )
}

export default Cover