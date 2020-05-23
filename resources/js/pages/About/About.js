import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import Text from '../../components/Text'
import Blog from '../../components/Blog'

const screenWidth = window.innerWidth

const About = React.forwardRef((props, ref) => {
    const { showBlogItem, setShowBlogItem } = { ...props }

    const styles = StyleSheet.create({
        aboutContainer: {
            display: 'flex',
            flexDirection: screenWidth > 800 ? 'row' : 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%'
        },
        bioImgContainer: {
            position: 'absolute',
            top: 'calc(50% - 7.5rem  )',
            left: 'calc(50% - 7.5rem)',
            width: '15rem',
            minWidth: '15rem',
            height: '15rem',
            minHeight: '15rem',
            borderRadius: '100%',
            backgroundImage: 'url("./img/bio.jpg")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        },
        halo: {
            width: '20rem',
            minWidth: '20rem',
            height: '20rem',
            minHeight: '20rem',
            backgroundImage: 'url(./img/spring.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '100%',
            filter: 'opacity(35%)',
        },
        aboutText: {
            padding: '3rem',
            textAlign: 'justify',
            fontSize: '1.25rem',
            lineHeight: '3rem',
            fontWeight: '450',
            whiteSpace: 'pre-wrap',
        },
        aboutImage: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25rem',
            maxWidth: '100%',
            padding: screenWidth > 500 ? '2rem' : '0',
        }
    })

    const aboutInfo = (
        <div className={css(styles.aboutContainer)}>
            <div className={css(styles.aboutImage)}>
                <div className={css(styles.halo)} />
                <div className={css(styles.bioImgContainer)} />
            </div>
            <div className={css(styles.aboutText)}>
                <p>Hi, I am Michelle,<br />I am based in Gloucestershire, with my teenage children and cats. I have many loves, including a deep love and passion for life.<br />I love connecting with and working with people, walking in nature, connecting with the elements and trees. I love singing and dancing (somewhat unprofessionally at home). And I love yoga, intuitive movement, energy work and meditation, writing and capturing photos.<br />All of these feel like immense Blessings: ways to connect, express, learn and grow.</p>
            </div>
        </div>
    )

    return (
        <>
            <Text title='About' about={aboutInfo} />
        </>
    )
})

export default About