import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    aboutBtn: {
        position: "absolute",
        // bottom: '0',
        // right: 'calc(50% - 10rem)',
        top: 'calc(50% - 5rem)',
        right: '0',
        height: '20rem',
        width: '7rem',
        padding: '0.5rem',
        borderRadius: '150% 0 0 150%',
        backgroundColor: 'rgba(256,256,256,0.4)',
        backgroundImage: 'url(./moods/vectors/decorative.svg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ':hover': {
            backgroundColor: 'rgba(256,256,256,0.7)'
        }
    },
})

const About = props => {
    return (
        <>
            <div className={css(styles.aboutBtn)}>
            </div>
        </>
    )
}

export default About