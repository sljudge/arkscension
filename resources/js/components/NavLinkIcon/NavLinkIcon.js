import React, { useRef } from 'react'
import { StyleSheet, css } from 'aphrodite'

const screenWidth = window.innerWidth

const styles = StyleSheet.create({
    navLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '2.5rem',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        cursor: 'pointer',
        borderRadius: '50%',
    },
    iconContainer: {
        height: '4rem',
        width: '4rem',
        padding: '0.75rem',
        borderRadius: '50%'
    },
    title: {
        position: 'absolute',
        marginTop: '0',
        minWidth: '10rem',
        padding: '0.5rem',
        textAlign: 'center',
        letterSpacing: '0.25rem',
        color: 'rgba(256,256,256,1)',
        fontSize: screenWidth > 800 ? '1.25rem' : '1rem',
        fontWeight: '500',
        borderRadius: '10px'
    },
    iconImg: {
        maxHeight: '100%'
    }

})

/**
 * #e1a570 - beige
 * #707be1 - blue
 * #76e170 - green
 * #e1dd70 - yellow
 */

const NavLinkIcon = props => {
    const { title, icon, show, setShow } = { ...props }
    const linkRef = useRef()

    const toggleFocus = (e) => {
        if (screenWidth > 500) {
            e.current.style.display = e.current.style.display === 'none' ? 'block' : 'none'
            switch (e.current.id) {
                case 'Meditation':
                    e.current.style.backgroundColor = 'rgba(225, 221, 112,0.95)' //0.7
                    break
                case 'Bowen Therapy':
                    e.current.style.backgroundColor = 'rgba(118, 225, 112,0.95)' //0.7
                    break
                case 'Energy Balancing':
                    e.current.style.backgroundColor = 'rgba(225, 221, 112,0.95)' //0.7
                    break
                case 'Sound Healing':
                    e.current.style.backgroundColor = 'rgba(112, 225, 214, 0.95)' //0.7
                    break
                case 'Blog':
                    e.current.style.backgroundColor = 'rgba(112, 225, 214, 0.95)' //0.7
                    break
                case 'About':
                    e.current.style.backgroundColor = 'rgba(118, 225, 112,0.95)' //0.7
                    break
                default: null
            }
        }
    }

    let Icon
    switch (icon) {
        case 'leaf':
            Icon = (
                <div className={css(styles.iconContainer)} style={{ backgroundColor: 'rgba(118, 225, 112,0.7)' }}>
                    <img className={css(styles.iconImg)} src="./img/navIcons/leaf.svg" />
                </div>
            )
            break
        case 'meditation':
            Icon = (
                <div className={css(styles.iconContainer)} style={{ backgroundColor: 'rgba(225, 221, 112,0.7)' }}>
                    <img className={css(styles.iconImg)} src="./img/navIcons/hands.svg" />
                </div>
            )
            break
        case 'energy':
            Icon = (
                <div className={css(styles.iconContainer)} style={{ backgroundColor: 'rgba(225, 221, 112,0.7)' }}>
                    <img className={css(styles.iconImg)} src="./img/navIcons/sun.svg" />
                </div>
            )
            break
        case 'bird':
            Icon = (
                <div className={css(styles.iconContainer)} style={{ backgroundColor: 'rgba(112, 225, 214, 0.7)' }}>
                    <img className={css(styles.iconImg)} src="./img/navIcons/bird.svg" />
                </div>
            )
            break
        case 'about':
            Icon = (
                <div className={css(styles.iconContainer)} style={{ backgroundColor: 'rgba(118, 225, 112,0.7)' }}>
                    <img className={css(styles.iconImg)} src="./img/navIcons/info.svg" />
                </div>
            )
            break
        case 'blog':
            Icon = (
                <div className={css(styles.iconContainer)} style={{ backgroundColor: 'rgba(112, 225, 214, 0.7)' }}>
                    <img className={css(styles.iconImg)} src="./img/navIcons/blog.svg" />
                </div>
            )
            break
        default: null
    }

    return (
        <div
            className={css(styles.navLink)}
            onClick={() => setShow(true)}
            onMouseEnter={() => toggleFocus(linkRef)}
            onMouseLeave={() => toggleFocus(linkRef)}
        >
            {Icon}

            <h2 id={title} className={css(styles.title)} ref={linkRef} style={{ display: 'none' }}>{title}</h2>
        </div >
    )
}

export default NavLinkIcon