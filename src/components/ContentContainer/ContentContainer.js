import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    contentContainer: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: "column",
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        // backgroundColor: 'rgba(256,256,256,0.1)'
    }
})

const ContentContainer = props => {
    return (
        <div className={css(styles.contentContainer)}>
            {props.children}
        </div>
    )
}

export default ContentContainer