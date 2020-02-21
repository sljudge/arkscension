import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
    mandalaContainer: {
        // position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'calc(100vh - 10rem)',
        // padding: '4rem',
        margin: '25vh 0 35vh 0',
        backgroundColor: 'rgba(256,256,256,0.8)',
        backgroundSize: 'auto 90%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    blue: {
        backgroundImage: 'url(./img/mandalas/blue_small.png)',
    },
    green: {
        backgroundImage: 'url(./img/mandalas/green_small.png)',
    }
})

const Mandala = props => {
    const { color } = { ...props }
    return (
        <div className={css(styles.mandalaContainer,
            color === '1' ? styles.blue :
                color === '2' ? styles.green :
                    null)}
        >
            {props.children}
        </div>
    )
}

export default Mandala