import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const containerHeight = '10rem'

const styles = StyleSheet.create({
    navContainer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: containerHeight,
        backgroundColor: 'rgba(30,30,30,0.8)',
        color: 'rgba(256,256,256,0.2)',
        borderRadius: '50% 50% 0 0',
        transition: 'all 1.5s'
    },
    openShow: {
        bottom: `calc(100% - ${containerHeight})`,
        backgroundColor: 'rgba(30,30,30,0.9)',
        borderRadius: '0',
        color: 'rgba(256,256,256,0.5)',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '5rem',
        width: '100%',
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        flexGrow: '1'
    },
    title: {
        fontSize: '2.5rem',
        margin: '0.75rem 0 0.5rem 1rem',
        letterSpacing: '1rem',
        width: '100%',
        textAlign: 'center',
        fontWeight: '400',
        color: 'whitesmoke'
    }
})

const Nav = props => {
    const { show } = { ...props }
    return (
        <div className={css(styles.navContainer, show && styles.openShow)}>
            <div className={css(styles.nav)}>
                <div className={css(styles.linksContainer)}>
                    {props.children}
                </div>
            </div>
            <h1 className={css(styles.title)}>Arkscension</h1>
        </div>
    )
}

export default Nav