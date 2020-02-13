import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Mandala from '../Mandala'


const styles = StyleSheet.create({
    quoteContainer: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '90%',
        padding: '2rem',
        margin: '2rem 12.5%',
        boxShadow: 'inset 2px 1px 7px -1px rgba(30,30,30,0.49)',
        backgroundColor: 'rgba(256,256,256,0.4)'
    },
    quote: {
        display: 'flex',
        width: '100%',
        height: '90%',
        fontSize: '2rem',
        color: 'rgba(30,30,30,0.5)'
    },
    quoteOpen: {
        justifyContent: "flex-start"
    },
    quoteClose: {
        justifyContent: 'flex-end',
        alignItems: "flex-end",
    },
    quoteText: {
        backgroundColor: 'rgba(256,256,256,0.8)',
        fontSize: '1.25rem',
        fontFamily: "cursive",
        textAlign: 'justify',
        lineHeight: '4rem',
    }
})

const Quote = props => {
    const { color } = { ...props }
    return (
        <Mandala color={color}>
            <div className={css(styles.quoteContainer)}>
                <div className={css(styles.quote, styles.quoteOpen)}>
                    <i className="fas fa-quote-left" />
                </div>
                <div className={css(styles.quoteText)}>
                    {props.children}
                </div>
                <div className={css(styles.quote, styles.quoteClose)}>
                    <i className="fas fa-quote-right" />
                </div>
            </div>
        </Mandala>
    )
}

export default Quote