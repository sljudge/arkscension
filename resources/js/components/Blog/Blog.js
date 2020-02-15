import React, { useState, useEffect } from 'react'
import { StyleSheet, css } from 'aphrodite'
import BlogItem from '../BlogItem'
import Text from '../Text'

const styles = StyleSheet.create({
    blogContainer: {
        minHeight: '100%',
        padding: '4rem 0',
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
        fontSize: '1.25rem',
        // overflow: 'hidden',
    },
    title: {
        width: '100%',
        textAlign: 'center',
    },
    blogItemsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navigateBtn: {
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
        width: '5rem',
        backgroundColor: 'rgba(30,30,30,0.2)',
        borderRadius: '50%',
        cursor: 'pointer'
    },
    btn: {
        top: '12rem',
        height: '80%',
        margin: '1rem'
    },
    back: {
        left: '2rem',
    },
    forward: {
        right: '2rem'
    },
})

const Blog = props => {
    const [showItem, setShowItem] = useState(false)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const getItems = () => {
        fetch(`/api/blog_articles`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('RESPONSE: ', response)
                setItems(response.map(article => {
                    if (article.item_photo_path) {
                        return article
                    } else {
                        article.item_photo_path = './img/logo.svg'
                        return article
                    }
                }))
            })
            .then(
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            )
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getItems()
    }, [])

    return (

        <div className={css(styles.blogContainer)}>
            <h2 className={css(styles.title)}>Blog</h2>
            {loading ? <h1>...Loading</h1> :


                showItem === false ?
                    <>
                        <div className={css(styles.blogItemsContainer)}>
                            {items.map(article => (
                                <BlogItem
                                    key={`blog_item_${article.id}`}
                                    showItem={setShowItem}
                                    id={article.id}
                                    title={article.title}
                                    img_url={article.item_photo_path}
                                />
                            ))}
                        </div>
                    </>
                    :
                    <>
                        <div className={css(styles.navigateBtn, styles.back)} onClick={() => setShowItem(false)}>
                            <img className={css(styles.btn)} src='./img/navIcons/back.svg' />
                        </div>
                        {items[showItem].texts.map(textItem => (
                            <Text key={`text_item_${textItem.id}`} title={textItem.title}>
                                {/* <p>{textItem.content.replace(/\n/g, <br />)}</p> */}
                                {textItem.content}
                            </Text>
                        ))}
                    </>
            }

        </div>
    )
}

export default Blog