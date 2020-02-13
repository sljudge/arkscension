import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
    contentPanel: {
        position: 'absolute',
        top: '100%',
        // display: 'flex',
        height: 'calc(100% - 7rem)', //10rem is nav container height,
        width: '100%',
        overflowY: "auto",
        minWidth: '100%',
        backgroundColor: 'rgba(256,256,256,0.8)',
        // backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        transition: 'top 1.5s',
    },
    open: {
        top: '7rem'
    }

})

const ContentPanel = props => {
    const { show } = { ...props }
    return (
        <div className={css(styles.contentPanel, show && styles.open)}>
            {props.children}
        </div>
    )
}

export default ContentPanel