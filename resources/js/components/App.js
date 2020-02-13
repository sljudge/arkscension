import React, { useState } from 'react'

import Cover from './Cover'
import Nav from './Nav'
import NavLink from './NavLink'
import Logo from './Logo'
import ContentPanel from './ContentPanel'
import Meditation from './Meditation'
import Bowen from './Bowen'
import Blog from './Blog'

const App = () => {
    const [show, setShow] = useState('blog')

    return (
        <>
            <Cover>
                <Nav show={show}>
                    <NavLink title={'Meditation'} icon={'meditation'} setShow={() => setShow('meditation')} />
                    <NavLink title={'Bowen Therapy'} icon={'leaf'} setShow={() => setShow('bowen')} />
                    <Logo setShow={() => setShow(false)} show={show} />
                    <NavLink title={'Energy Therapy'} icon={'energy'} setShow={() => setShow(true)} />
                    <NavLink title={'Blog'} icon={'blog'} setShow={() => setShow('blog')} />
                </Nav>
                <ContentPanel show={show}>
                    {show === 'meditation' && <Meditation />}
                    {show === 'bowen' && <Bowen />}
                    {show === 'blog' && <Blog />}


                </ContentPanel>
            </Cover>
        </>
    )
}

export default App
