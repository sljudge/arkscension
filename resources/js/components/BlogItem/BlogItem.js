import React from 'react'
import { StyleSheet, css } from 'aphrodite'


const BlogItem = props => {
    const { setShowItem, id, title, img_url } = { ...props }

    const styles = StyleSheet.create({
        blogItem: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            minWidth: '25rem',
            maxWidth: '25rem',
            minHeight: '20rem',
            maxHeight: '20rem',
            padding: '0.5rem',
            margin: '2rem',
            backgroundColor: 'rgba(256,256,256,0.6)',
            boxShadow: '10px 10px 5px 0px rgba(48,48,48,0.21)',
            cursor: 'pointer'
        },
        blogImage: {
            minWidth: '22rem',
            maxWidth: '22rem',
            minHeight: '10rem',
            maxHeight: '10rem',
            backgroundImage: `url(${img_url})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        },
        blogTitle: {
            width: '100%',
            padding: '1rem',
            textAlign: "center",
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.3)'
        }
    })
    return (
        <div className={css(styles.blogItem)} onClick={() => setShowItem(id - 1)}>
            <div className={css(styles.blogImage)} />
            <div className={css(styles.blogTitle)}>{title}</div>
        </div>
    )
}

export default BlogItem