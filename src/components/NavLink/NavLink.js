import React, { useRef } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    navLink: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '2rem',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        cursor: 'pointer',
    },
    iconContainer: {
        fontSize: '2.5rem',
    },
    title: {
        position: 'absolute',
        marginTop: '0',
        minWidth: '10rem',
        padding: '0.5rem',
        textAlign: 'center',
        letterSpacing: '0.25rem',
        color: 'rgba(256,256,256,1)',
        // backgroundColor: 'rgba(133,38,75, 0.5)',
        fontSize: '1.5rem',
        borderRadius: '10px'
    }

})

/**
 * #e1a570 - beige
 * #707be1 - blue
 * #76e170 - green
 * #e1dd70 - yellow
 */

const NavLink = props => {
    const { title, icon, setShow } = { ...props }
    const linkRef = useRef()

    const toggleFocus = (e) => {
        e.current.style.display = e.current.style.display === 'none' ? 'block' : 'none'
        console.log(e.current.id)
        switch (e.current.id) {
            case 'Meditation':
                e.current.style.backgroundColor = 'rgba(112, 123, 225,0.4)'
                break
            case 'Bowen Therapy':
                e.current.style.backgroundColor = 'rgba(118, 225, 112,0.4)'
                break
            case 'Energy Therapy':
                e.current.style.backgroundColor = 'rgba(225, 221, 112,0.4)'
                break
            case 'Blog':
                e.current.style.backgroundColor = 'rgba(112, 225, 214, 0.4)'
                break
            default: null

        }
    }

    let Icon
    switch (icon) {
        case 'leaf':
            Icon = <i className="fas fa-leaf"></i>
            break
        case 'meditation':
            Icon = <i className="fas fa-praying-hands"></i>
            break
        case 'energy':
            Icon = <i className="fas fa-sun"></i>
            break
        case 'blog':
            Icon = <i className="fas fa-book-reader"></i>
            break
        default: null
    }
    return (
        <div
            className={css(styles.navLink)}
            onClick={setShow}
            onMouseEnter={() => toggleFocus(linkRef)}
            onMouseLeave={() => toggleFocus(linkRef)}
        >
            <div className={css(styles.iconContainer)}>
                {Icon}
            </div>
            <div id={title} className={css(styles.title)} ref={linkRef} style={{ display: 'none' }}>{title}</div>
        </div>
    )
}

export default NavLink