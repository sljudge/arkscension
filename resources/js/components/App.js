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
    const [show, setShow] = useState(false)

    return (
        <>
            <Cover>
                <Nav show={show}>
                    <NavLink title={'Bowen Therapy'} icon={'leaf'} setShow={() => setShow('bowen')} />
                    <NavLink title={'Sound Healing'} icon={'bird'} setShow={() => setShow(true)} />
                    <Logo setShow={() => setShow('blog')} show={show} />
                    <NavLink title={'Energy Balancing'} icon={'energy'} setShow={() => setShow(true)} />
                    <NavLink title={'Meditation'} icon={'meditation'} setShow={() => setShow('meditation')} />
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
