import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 0',
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',

    },
    text: {
        maxWidth: '680px',
        textAlign: 'justify',
        fontSize: '1.25rem',
        lineHeight: '3rem',
        fontWeight: '450',
        whiteSpace: 'pre-wrap',
    },
    title: {
        width: '100%',
        textAlign: 'center'
    }
})

const Text = props => {
    const { title } = { ...props }
    return (
        <div className={css(styles.textContainer)}>
            <div className={css(styles.text)}>
                <h2 className={css(styles.title)}>{title}</h2>
                {props.children}
            </div>
        </div>
    )
}

export default Text