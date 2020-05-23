import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, css } from 'aphrodite'

let rotateInterval

const styles = StyleSheet.create({
    loadingContainer: {
        height: '4rem',
        width: '4rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2rem'
    },
    loadingIcon: {
        height: '100%',
        width: '100%'
    }
})

const Loading = () => {
    const [rotate, setRotate] = useState(0)
    const loadingRef = useRef(null)

    const icon = (
        <img className={css(styles.loadingIcon)} src="./img/navIcons/yin-yang.svg" />
    )

    useEffect(() => {
        rotateInterval = setInterval(() => {
            setRotate(prevState => prevState + 3)
        }, 10)
        return () => {
            clearInterval(rotateInterval)
        }
    }, [icon])



    return (
        <div className={css(styles.loadingContainer)} style={{ transform: `rotate(${rotate}deg)` }}>
            {icon}
        </div>
    )
}

export default Loading
