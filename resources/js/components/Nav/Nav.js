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
        // backgroundColor: 'rgba(30,30,30,0.8)',
        backgroundColor: 'rgba(256,256,256,0.3)',
        color: 'rgba(30,30,30,0.2)',
        // color: 'rgba(256,256,256,0.2)',
        borderRadius: '50% 50% 0 0',
        transition: 'all 1.5s'
    },
    openContainer: {
        height: '7rem',
        bottom: `calc(100% - 7rem)`,
        backgroundColor: 'rgba(30,30,30,0.9)',
        borderRadius: '0',
        color: 'rgba(256,256,256,0.5)',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
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
        color: 'whitesmoke',
        transition: 'all 2s'
    },
    noTitle: {
        height: '0',
        overflow: 'hidden'
    }
})

const Nav = props => {
    const { show } = { ...props }
    return (
        <div className={css(styles.navContainer, show && styles.openContainer)}>
            <div className={css(styles.nav)}>
                <div className={css(styles.linksContainer)}>
                    {props.children}
                </div>
            </div>
            <h1 className={css(styles.title, show && styles.noTitle)}>Arkscension</h1>
        </div>
    )
}

export default Nav